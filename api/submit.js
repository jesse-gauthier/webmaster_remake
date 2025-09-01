import { Resend } from 'resend'

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

function sanitizeHtml(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
}

function validateEnvironment() {
    const required = ['RESEND_API_KEY', 'EMAIL_TO']
    const missing = required.filter(key => !process.env[key])
    if (missing.length > 0) {
        throw new Error(`Missing environment variables: ${missing.join(', ')}`)
    }
}

const submissionTimes = new Map()

function checkRateLimit(ip) {
    const now = Date.now()
    const lastSubmission = submissionTimes.get(ip)

    if (lastSubmission && now - lastSubmission < 60000) { // 1 minute
        return false
    }

    submissionTimes.set(ip, now)

    // Clean old entries
    for (const [key, time] of submissionTimes.entries()) {
        if (now - time > 60000) {
            submissionTimes.delete(key)
        }
    }

    return true
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' })
    }

    try {
        // Rate limiting
        const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown'
        console.log('Form submission attempt:', {
            ip: clientIp,
            userAgent: req.headers['user-agent']?.substring(0, 200),
            timestamp: new Date().toISOString(),
            method: req.method
        })

        if (!checkRateLimit(clientIp)) {
            console.warn('Rate limit exceeded:', { ip: clientIp, timestamp: new Date().toISOString() })
            return res.status(429).json({
                error: 'Too many requests. Please wait before submitting again.',
                code: 'RATE_LIMIT_EXCEEDED'
            })
        }

        const { email, message } = req.body

        // Validate input
        if (!email || !message) {
            return res.status(400).json({ error: 'Missing required fields' })
        }

        if (!validateEmail(email)) {
            return res.status(400).json({ error: 'Invalid email format' })
        }

        if (message.length > 5000) {
            return res.status(400).json({ error: 'Message too long (max 5000 characters)' })
        }

        // Validate environment
        validateEnvironment()

        // Process the data (save to database, send email, etc.)
        const result = await processFormData({ email, message })

        console.log('Form submission successful:', {
            ip: clientIp,
            email: email,
            emailId: result.emailId,
            timestamp: new Date().toISOString()
        })

        res.status(200).json({
            success: true,
            message: 'Form submitted successfully',
            id: result.emailId
        })
    } catch (error) {
        console.error('Form submission error:', {
            message: error.message,
            stack: error.stack,
            timestamp: new Date().toISOString()
        })

        // Return more specific error messages for debugging
        if (error.message.includes('Missing environment variables')) {
            return res.status(500).json({
                error: 'Server configuration error',
                code: 'ENV_CONFIG_ERROR'
            })
        }

        if (error.message.includes('authentication failed')) {
            return res.status(500).json({
                error: 'Email service configuration error',
                code: 'EMAIL_AUTH_ERROR'
            })
        }

        if (error.message.includes('configuration error')) {
            return res.status(500).json({
                error: 'Email service configuration error',
                code: 'EMAIL_CONFIG_ERROR'
            })
        }

        if (error.message.includes('rate limit exceeded')) {
            return res.status(429).json({
                error: 'Service temporarily unavailable. Please try again later.',
                code: 'EMAIL_RATE_LIMIT'
            })
        }

        if (error.message.includes('network error')) {
            return res.status(503).json({
                error: 'Email service temporarily unavailable',
                code: 'EMAIL_NETWORK_ERROR'
            })
        }

        res.status(500).json({
            error: 'Internal server error',
            details: process.env.NODE_ENV === 'development' ? error.message : undefined
        })
    }
}

async function processFormData(data) {
    const { email, message } = data

    try {
        // Validate API key format
        if (!process.env.RESEND_API_KEY || !process.env.RESEND_API_KEY.startsWith('re_')) {
            throw new Error('Invalid Resend API key format')
        }

        const resend = new Resend(process.env.RESEND_API_KEY)

        // Validate email configuration
        const fromEmail = 'noreply@contact.ottawawebmasters.ca'
        const toEmail = process.env.EMAIL_TO

        if (!toEmail || !toEmail.includes('@')) {
            throw new Error('Invalid recipient email configuration')
        }

        const emailData = await resend.emails.send({
            from: fromEmail,
            to: toEmail,
            subject: 'New Form Submission',
            html: `
                <h2>New Form Submission</h2>
                <p><strong>From:</strong> ${sanitizeHtml(email)}</p>
                <p><strong>Message:</strong></p>
                <p>${sanitizeHtml(message).replace(/\n/g, '<br>')}</p>
                <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
            `
        })

        // Log successful email send
        console.log('Email sent successfully:', {
            id: emailData.id,
            to: toEmail,
            from: fromEmail,
            timestamp: new Date().toISOString()
        })

        return { success: true, emailId: emailData.id }
    } catch (error) {
        // Enhanced error logging for Resend API
        console.error('Resend API Error:', {
            message: error.message,
            stack: error.stack,
            timestamp: new Date().toISOString(),
            formData: { email, messageLength: message.length },
            apiKeyExists: !!process.env.RESEND_API_KEY,
            apiKeyFormat: process.env.RESEND_API_KEY?.startsWith('re_'),
            recipientEmail: process.env.EMAIL_TO
        })

        // Handle specific Resend API errors
        if (error.message.includes('API key')) {
            throw new Error('Email service authentication failed')
        }
        if (error.message.includes('Invalid recipient')) {
            throw new Error('Email service configuration error')
        }
        if (error.message.includes('rate limit') || error.message.includes('429')) {
            throw new Error('Email service rate limit exceeded')
        }
        if (error.message.includes('Invalid from address')) {
            throw new Error('Email service sender configuration error')
        }
        if (error.message.includes('network') || error.message.includes('timeout')) {
            throw new Error('Email service network error')
        }

        // Re-throw the error with original message for unhandled cases
        throw error
    }
}
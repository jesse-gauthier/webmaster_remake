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
        if (!checkRateLimit(clientIp)) {
            return res.status(429).json({ error: 'Too many requests. Please wait before submitting again.' })
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
        await processFormData({ email, message })

        res.status(200).json({ success: true, message: 'Form submitted successfully' })
    } catch (error) {
        console.error('Form submission error:', {
            message: error.message,
            stack: error.stack,
            timestamp: new Date().toISOString()
        })
        
        // Return more specific error messages for debugging
        if (error.message.includes('Missing environment variables')) {
            return res.status(500).json({ error: 'Server configuration error' })
        }
        
        if (error.message.includes('API key')) {
            return res.status(500).json({ error: 'Email service configuration error' })
        }
        
        res.status(500).json({ 
            error: 'Internal server error',
            details: process.env.NODE_ENV === 'development' ? error.message : undefined
        })
    }
}

async function processFormData(data) {
    const { email, message } = data

    const resend = new Resend(process.env.RESEND_API_KEY)

    const emailData = await resend.emails.send({
        from: 'noreply@ottawawebmasters.ca',
        to: process.env.EMAIL_TO,
        subject: 'New Form Submission',
        html: `
            <h2>New Form Submission</h2>
            <p><strong>From:</strong> ${sanitizeHtml(email)}</p>
            <p><strong>Message:</strong></p>
            <p>${sanitizeHtml(message).replace(/\n/g, '<br>')}</p>
            <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
        `
    })

    return { success: true, emailId: emailData.id }
}
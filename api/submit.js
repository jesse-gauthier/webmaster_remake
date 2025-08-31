import nodemailer from 'nodemailer'

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
    const required = ['EMAIL_USER', 'EMAIL_PASS', 'EMAIL_TO']
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
        
        if (error.message.includes('getaddrinfo ENOTFOUND') || error.message.includes('connect ECONNREFUSED')) {
            return res.status(500).json({ error: 'Email service unavailable' })
        }
        
        res.status(500).json({ 
            error: 'Internal server error',
            details: process.env.NODE_ENV === 'development' ? error.message : undefined
        })
    }
}

async function processFormData(data) {
    const { email, message } = data

    // Create transporter
    const transporter = nodemailer.createTransport({
        host: 'mail.protonmail.ch',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },
        connectionTimeout: 10000,
        greetingTimeout: 5000,
        socketTimeout: 10000
    })

    // Email options
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_TO,
        subject: 'New Form Submission',
        html: `
            <h2>New Form Submission</h2>
            <p><strong>From:</strong> ${sanitizeHtml(email)}</p>
            <p><strong>Message:</strong></p>
            <p>${sanitizeHtml(message).replace(/\n/g, '<br>')}</p>
            <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
        `
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return { success: true }
}
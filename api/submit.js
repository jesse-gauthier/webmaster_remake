import nodemailer from 'nodemailer'

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' })
    }

    try {
        const { email, message } = req.body

        // Validate input
        if (!email || !message) {
            return res.status(400).json({ error: 'Missing required fields' })
        }

        // Process the data (save to database, send email, etc.)
        await processFormData({ email, message })

        res.status(200).json({ success: true, message: 'Form submitted successfully' })
    } catch (error) {
        console.error('Form submission error:', error)
        res.status(500).json({ error: 'Internal server error' })
    }
}

async function processFormData(data) {
    const { email, message } = data

    // Create transporter
    const transporter = nodemailer.createTransporter({
        host: 'mail.protonmail.ch',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    })

    // Email options
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_TO,
        subject: 'New Form Submission',
        html: `
            <h2>New Form Submission</h2>
            <p><strong>From:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
            <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
        `
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return { success: true }
}
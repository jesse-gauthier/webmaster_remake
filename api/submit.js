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

    // Send email to contact@ottawawebmasters.ca
    const response = await fetch('https://api.vercel.com/v1/integrations/webhooks/email/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            to: 'contact@ottawawebmasters.ca',
            subject: 'New Form Submission',
            html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>From:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
            replyTo: email
        })
    })

    if (!response.ok) {
        throw new Error('Failed to send email')
    }
}
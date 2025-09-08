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

    // Parse the structured message to extract contact details
    const messageLines = message.split('\n');
    const contactData = {};
    
    // Extract structured data from the message
    messageLines.forEach(line => {
      if (line.includes('Name: ')) contactData.name = line.replace('Name: ', '').trim();
      if (line.includes('Email: ')) contactData.email = line.replace('Email: ', '').trim();
      if (line.includes('Phone: ')) contactData.phone = line.replace('Phone: ', '').trim();
      if (line.includes('Service: ')) contactData.service = line.replace('Service: ', '').trim();
      if (line.includes('Budget: ')) contactData.budget = line.replace('Budget: ', '').trim();
    });
    
    // Extract the actual message content
    const messageStartIndex = message.indexOf('Message:');
    const additionalDetailsIndex = message.indexOf('Additional Details:');
    const actualMessage = messageStartIndex !== -1 && additionalDetailsIndex !== -1 
      ? message.substring(messageStartIndex + 8, additionalDetailsIndex).trim()
      : message;

    const emailData = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: contactData.email || email, // Set reply-to to the contact's email
      subject: `New Inquiry from ${contactData.name || 'Website Visitor'} - ${contactData.service || 'General'}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
              line-height: 1.6;
              color: #333333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f8fafc;
            }
            .container {
              background-color: #ffffff;
              border-radius: 12px;
              padding: 32px;
              box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
              border: 1px solid #e2e8f0;
            }
            .header {
              text-align: center;
              margin-bottom: 32px;
              padding-bottom: 24px;
              border-bottom: 2px solid #f1f5f9;
            }
            .header h1 {
              color: #1e293b;
              margin: 0;
              font-size: 24px;
              font-weight: 600;
            }
            .header p {
              color: #64748b;
              margin: 8px 0 0 0;
              font-size: 14px;
            }
            .info-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
              gap: 20px;
              margin-bottom: 32px;
            }
            .info-item {
              background-color: #f8fafc;
              padding: 16px;
              border-radius: 8px;
              border-left: 4px solid #3b82f6;
            }
            .info-label {
              font-weight: 600;
              color: #374151;
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 4px;
            }
            .info-value {
              color: #1f2937;
              font-size: 16px;
              font-weight: 500;
            }
            .message-section {
              margin-top: 32px;
              padding: 24px;
              background-color: #f9fafb;
              border-radius: 8px;
              border: 1px solid #e5e7eb;
            }
            .message-label {
              font-weight: 600;
              color: #374151;
              margin-bottom: 12px;
              font-size: 14px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
            .message-content {
              color: #1f2937;
              line-height: 1.7;
              white-space: pre-wrap;
              font-size: 15px;
            }
            .timestamp {
              text-align: center;
              margin-top: 32px;
              padding-top: 24px;
              border-top: 1px solid #e5e7eb;
              color: #6b7280;
              font-size: 13px;
            }
            .reply-note {
              background-color: #ecfdf5;
              border: 1px solid #d1fae5;
              border-radius: 8px;
              padding: 16px;
              margin-top: 24px;
              color: #065f46;
              font-size: 14px;
            }
            .reply-note strong {
              color: #047857;
            }
            @media (max-width: 600px) {
              body { padding: 10px; }
              .container { padding: 20px; }
              .info-grid { grid-template-columns: 1fr; gap: 12px; }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Inquiry</h1>
              <p>Ottawa Webmasters - Website Contact Form</p>
            </div>
            
            <div class="info-grid">
              <div class="info-item">
                <div class="info-label">Contact Name</div>
                <div class="info-value">${sanitizeHtml(contactData.name || 'Not provided')}</div>
              </div>
              
              <div class="info-item">
                <div class="info-label">Email Address</div>
                <div class="info-value">${sanitizeHtml(contactData.email || email)}</div>
              </div>
              
              <div class="info-item">
                <div class="info-label">Phone Number</div>
                <div class="info-value">${sanitizeHtml(contactData.phone || 'Not provided')}</div>
              </div>
              
              <div class="info-item">
                <div class="info-label">Service Requested</div>
                <div class="info-value">${sanitizeHtml(contactData.service || 'Not specified')}</div>
              </div>
              
              <div class="info-item">
                <div class="info-label">Budget Range</div>
                <div class="info-value">${sanitizeHtml(contactData.budget || 'Not specified')}</div>
              </div>
            </div>
            
            ${actualMessage ? `
            <div class="message-section">
              <div class="message-label">Project Details</div>
              <div class="message-content">${sanitizeHtml(actualMessage)}</div>
            </div>
            ` : ''}
            
            <div class="reply-note">
              <strong>💡 Quick Reply:</strong> This email is configured to reply directly to the customer's email address (${sanitizeHtml(contactData.email || email)}) for seamless communication.
            </div>
            
            <div class="timestamp">
              Received on ${new Date().toLocaleDateString('en-CA', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZone: 'America/Toronto'
              })} (EST)
            </div>
          </div>
        </body>
        </html>
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

# Contact Form Content

## Form Header Section (Left Side - Primary Background)
- **Main Headline**: "Let's Talk Digital"
- **Subheadline**: "Have a project in mind? We're excited to hear about it. Fill out the form, and our team will get back to you within 24 hours."
- **Contact Information**: 
  - Email: Contact@ottawawebmasters.ca (with email icon)

### "Who We Are" Section (Desktop Only)
- **Section Title**: "Who We Are"
- **Content**:
  - "We are a dedicated team of web design and development specialists based in Ottawa, passionate about creating exceptional websites for small businesses."
  - "Our mission is simple: empower small businesses with quality digital solutions that drive real results. This guiding principle shapes every service we offer and every project we undertake."
  - "With our combined expertise and client-focused approach, we deliver websites that not only look great but also perform exceptionally well in today's competitive digital landscape."

## Form Fields (Right Side)

### Personal Information Section
1. **Full Name** (required)
   - Placeholder: "Your Full Name"
   - Error message: "Name is required"

2. **Email Address** (required)
   - Type: email
   - Placeholder: "you@example.com"
   - Error message: "Please enter a valid email address"

3. **Phone Number** (required)
   - Type: tel
   - Placeholder: "(555) 123-4567"
   - Error message: "Please enter a valid phone number"

### Project Information Section
4. **Service Interested In** (required dropdown)
   - Options:
     - "WordPress Development"
     - "WordPress Maintenance" 
     - "Shopify Development"
     - "Shopify Maintenance"
     - "Consultation"
     - "Other"
   - Error message: "Please select a service"

5. **Estimated Budget** (required dropdown)
   - Options:
     - "Under $1,000"
     - "$1,000 - $5,000"
     - "$5,000 - $10,000" 
     - "$10,000 - $25,000"
     - "Over $25,000"
   - Error message: "Please select a budget range"

6. **Project Details** (required textarea)
   - Placeholder: "Tell us about your project, goals, and any specific requirements..."
   - Minimum 10 characters
   - Error message: "Message must be at least 10 characters long"

## Form Features
- **Security**: CSRF token protection, honeypot field for bot detection
- **Validation**: Real-time field validation with error messages
- **Analytics Tracking**: Form interactions and submissions tracked
- **Accessibility**: Full ARIA labels, screen reader support, keyboard navigation
- **Success Message**: "Thank you! We've received your message and will contact you soon."
- **Error Message**: "Oops! There was an error submitting the form. Please try again later."
- **Submit Button**: "Send" with loading spinner during submission

## Form Styling
- Two-column layout (desktop)
- Left side: Primary background with white text
- Right side: White background with form fields
- Form uses Tailwind utility classes for styling
- Responsive design with stacked layout on mobile
# Contact Form Setup Guide for GitHub Pages

Since GitHub Pages only hosts static websites, you need to use a third-party service to handle form submissions. Here are the best options:

## Option 1: Formspree (Recommended) ⭐

**Free Tier:** 50 submissions/month  
**Setup Time:** 5 minutes  
**Best For:** Most users

### Setup Steps:

1. **Sign up at [Formspree.io](https://formspree.io/)**
   - Create a free account
   - Verify your email

2. **Create a new form:**
   - Go to [Forms Dashboard](https://formspree.io/forms)
   - Click "New Form"
   - Name it (e.g., "Portfolio Contact Form")
   - Copy your form endpoint (looks like: `https://formspree.io/f/YOUR_FORM_ID`)

3. **Update your HTML:**
   - Open `index.html`
   - Find the form tag: `<form class="contact-form" id="contactForm" action="..."`
   - Replace `YOUR_FORM_ID` with your actual Formspree form ID
   - Example: `action="https://formspree.io/f/xpzgkqyz"`

4. **Configure form settings (optional):**
   - In Formspree dashboard, you can:
     - Set up email notifications
     - Add custom redirect after submission
     - Enable spam protection
     - View submissions

5. **Test your form:**
   - Submit a test message
   - Check your email for the confirmation
   - Verify the submission appears in Formspree dashboard

**Pros:**
- Easy setup
- Reliable service
- Spam protection included
- View submissions in dashboard
- Email notifications

**Cons:**
- 50 submissions/month on free tier
- Requires email verification

---

## Option 2: EmailJS

**Free Tier:** 200 emails/month  
**Setup Time:** 10 minutes  
**Best For:** Direct email delivery

### Setup Steps:

1. **Sign up at [EmailJS.com](https://www.emailjs.com/)**

2. **Add Email Service:**
   - Go to "Email Services"
   - Add service (Gmail, Outlook, etc.)
   - Follow connection steps

3. **Create Email Template:**
   - Go to "Email Templates"
   - Create new template
   - Use variables: `{{name}}`, `{{email}}`, `{{subject}}`, `{{message}}`

4. **Get your credentials:**
   - Service ID
   - Template ID
   - Public Key

5. **Update your code:**
   - Add to HTML `<head>`:
     ```html
     <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
     ```
   - Update `script.js` with EmailJS code (see comments in script.js)

**Pros:**
- Higher free tier limit
- Direct email delivery
- No redirect needed

**Cons:**
- More complex setup
- Requires email service configuration

---

## Option 3: Web3Forms

**Free Tier:** Unlimited (with rate limiting)  
**Setup Time:** 2 minutes  
**Best For:** Quick setup, no signup

### Setup Steps:

1. **Get Access Key:**
   - Go to [Web3Forms.com](https://web3forms.com/)
   - Enter your email
   - Copy the access key

2. **Update HTML form:**
   ```html
   <form action="https://api.web3forms.com/submit" method="POST">
       <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY">
       <!-- rest of form fields -->
   </form>
   ```

**Pros:**
- No signup required
- Unlimited submissions
- Simple setup

**Cons:**
- Less customization
- Basic dashboard

---

## Option 4: FormSubmit

**Free Tier:** Unlimited  
**Setup Time:** 1 minute  
**Best For:** Simplest option

### Setup Steps:

1. **Update HTML form:**
   ```html
   <form action="https://formsubmit.co/YOUR_EMAIL" method="POST">
       <input type="hidden" name="_subject" value="Portfolio Contact Form">
       <input type="hidden" name="_captcha" value="false">
       <!-- rest of form fields -->
   </form>
   ```

2. **Verify email:**
   - Check your email for verification link
   - Click to verify

**Pros:**
- Simplest setup
- No account needed
- Unlimited submissions

**Cons:**
- Less features
- Basic email delivery

---

## Option 5: Google Forms (Redirect)

**Free Tier:** Unlimited  
**Setup Time:** 5 minutes  
**Best For:** Simple data collection

### Setup Steps:

1. **Create Google Form:**
   - Go to [Google Forms](https://forms.google.com/)
   - Create form with fields matching your contact form
   - Get the form URL

2. **Update form action:**
   ```html
   <form action="YOUR_GOOGLE_FORM_URL" method="GET" target="_blank">
   ```

**Note:** This redirects users to Google Forms (away from your site)

**Pros:**
- Unlimited submissions
- Free Google Sheets integration
- Easy to view responses

**Cons:**
- Redirects away from your site
- Less professional appearance

---

## Comparison Table

| Service | Free Tier | Setup Time | Best For |
|---------|-----------|------------|----------|
| **Formspree** | 50/month | 5 min | Most users ⭐ |
| **EmailJS** | 200/month | 10 min | Direct emails |
| **Web3Forms** | Unlimited | 2 min | Quick setup |
| **FormSubmit** | Unlimited | 1 min | Simplest |
| **Google Forms** | Unlimited | 5 min | Data collection |

---

## Current Implementation

The form is currently configured for **Formspree**. To use it:

1. Sign up at [formspree.io](https://formspree.io/)
2. Create a form and get your form ID
3. Replace `YOUR_FORM_ID` in `index.html` line 342

The form includes:
- ✅ Loading state during submission
- ✅ Success/error messages
- ✅ Form validation
- ✅ Spam protection (honeypot field)
- ✅ Auto-reset on success

---

## Testing Your Form

After setup, test your form:

1. Fill out all fields
2. Submit the form
3. Check for success message
4. Verify email notification (if configured)
5. Check service dashboard for submission

---

## Troubleshooting

**Form not submitting?**
- Check browser console for errors
- Verify form action URL is correct
- Ensure all required fields are filled
- Check if service account is verified

**Not receiving emails?**
- Check spam folder
- Verify email in service settings
- Check service dashboard for submissions
- Ensure email service is properly configured

**Form redirecting to service page?**
- This is normal for some services
- Add `_next` parameter for custom redirect (Formspree)
- Or use EmailJS for no redirect

---

## Need Help?

- Formspree Docs: https://help.formspree.io/
- EmailJS Docs: https://www.emailjs.com/docs/
- Web3Forms Docs: https://docs.web3forms.com/


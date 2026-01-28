# DevOps Engineer Portfolio Website

A modern, responsive portfolio website designed specifically for DevOps engineers. This portfolio showcases your skills, projects, and experience in cloud infrastructure, CI/CD, containerization, and automation.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Sections Included**:
  - Hero/Introduction section
  - About Me
  - Skills & Technologies (Cloud, CI/CD, Containerization, etc.)
  - Projects & Experience
  - Contact Form
- **Interactive Elements**: Smooth scrolling, animated cards, mobile navigation
- **Easy to Customize**: Well-structured code that's easy to modify

## Getting Started

1. **Clone or download** this repository
2. **Open `index.html`** in your web browser
3. **Customize** the content with your own information:
   - Update personal details in the HTML
   - Modify skills and technologies
   - Add your actual projects
   - Update contact information and social media links

## Deployment to GitHub Pages

This repository includes a GitHub Actions workflow that automatically deploys your portfolio to GitHub Pages.

### Setup Instructions:

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
   - The workflow will automatically deploy on every push to `main` or `master` branch

3. **Access your site:**
   - Your portfolio will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
   - If your repository is named `YOUR_USERNAME.github.io`, it will be at: `https://YOUR_USERNAME.github.io/`

### Manual Deployment:

You can also manually trigger the deployment by:
- Going to **Actions** tab in your repository
- Selecting **Deploy to GitHub Pages** workflow
- Clicking **Run workflow**

## Customization Guide

### Update Personal Information

1. **Hero Section** (`index.html`):
   - Change the name in `.name` class
   - Update the subtitle and description
   - Add your social media links

2. **About Section**:
   - Modify the about text
   - Update statistics (projects, uptime, years of experience)

3. **Skills Section**:
   - Add or remove skill categories
   - Update skill tags to match your expertise

4. **Projects Section**:
   - Replace placeholder projects with your actual work
   - Update project descriptions and technologies used

5. **Contact Section**:
   - Update email, phone, and location
   - Add your social media profiles
   - Configure the contact form to work with your backend (if needed)

### Styling

- **Colors**: Modify CSS variables in `styles.css` (`:root` section) to change the color scheme
- **Fonts**: Update the `font-family` in `styles.css` to use your preferred fonts
- **Layout**: Adjust grid layouts and spacing as needed

### Contact Form

The contact form is configured to work with **Formspree** (recommended for GitHub Pages). To make it functional:

1. **Quick Setup (Formspree - Recommended):**
   - Sign up at [formspree.io](https://formspree.io/)
   - Create a new form and get your form ID
   - Replace `YOUR_FORM_ID` in `index.html` (line 342) with your actual form ID
   - Verify your email when you receive the confirmation

2. **Alternative Options:**
   - See `FORM_SETUP.md` for detailed setup instructions for:
     - EmailJS (200 emails/month free)
     - Web3Forms (unlimited free)
     - FormSubmit (unlimited free)
     - Google Forms (redirect method)

3. **Form Features:**
   - ✅ Loading state during submission
   - ✅ Success/error messages
   - ✅ Form validation
   - ✅ Spam protection
   - ✅ Auto-reset on success

**Note:** All form services work with GitHub Pages static hosting limitations.

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript
- Font Awesome Icons

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Feel free to use this portfolio template for your personal website. Customize it to match your style and showcase your DevOps expertise!

## Tips for DevOps Portfolio

1. **Showcase Real Projects**: Include actual infrastructure projects with metrics (uptime, deployment time reduction, etc.)
2. **Highlight Certifications**: Add a certifications section if you have AWS, Azure, or Kubernetes certifications
3. **Include Metrics**: Use real numbers (e.g., "Reduced deployment time by 70%")
4. **Add Blog/Articles**: Link to any technical blog posts or articles you've written
5. **GitHub Integration**: Make sure your GitHub profile is linked and showcases your infrastructure code

---

**Note**: Remember to replace all placeholder content (email addresses, social media links, project descriptions) with your actual information before deploying!


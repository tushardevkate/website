// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const submitText = document.getElementById('submitText');
const submitLoader = document.getElementById('submitLoader');
const formMessage = document.getElementById('formMessage');

// Option 1: Formspree (Recommended - Free tier: 50 submissions/month)
// Setup: 1. Go to https://formspree.io/forms
//        2. Create a new form
//        3. Copy the form endpoint (e.g., https://formspree.io/f/YOUR_FORM_ID)
//        4. Replace YOUR_FORM_ID in the HTML form action attribute
//        5. Verify your email when you receive the confirmation email

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Show loading state
    submitText.style.display = 'none';
    submitLoader.style.display = 'inline';
    submitBtn.disabled = true;
    formMessage.style.display = 'none';
    
    try {
        const formData = new FormData(contactForm);
        
        // For Formspree
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            showMessage('success', 'Thank you for your message! I\'ll get back to you soon.');
            contactForm.reset();
        } else {
            const data = await response.json();
            if (data.errors) {
                showMessage('error', data.errors.map(error => error.message).join(', '));
            } else {
                showMessage('error', 'Oops! There was a problem submitting your form. Please try again.');
            }
        }
    } catch (error) {
        showMessage('error', 'Network error. Please check your connection and try again.');
    } finally {
        // Reset button state
        submitText.style.display = 'inline';
        submitLoader.style.display = 'none';
        submitBtn.disabled = false;
    }
});

function showMessage(type, message) {
    formMessage.className = `form-message ${type}`;
    formMessage.textContent = message;
    formMessage.style.display = 'block';
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

/* 
 * ALTERNATIVE OPTIONS FOR GITHUB PAGES:
 * 
 * Option 2: EmailJS (Free tier: 200 emails/month)
 * Setup: 1. Sign up at https://www.emailjs.com/
 *        2. Create an email service (Gmail, Outlook, etc.)
 *        3. Create an email template
 *        4. Get your Public Key and Service ID
 *        5. Replace the form handler below:
 * 
 * Replace the form submit handler with:
 * 
 * import emailjs from '@emailjs/browser';
 * 
 * contactForm.addEventListener('submit', (e) => {
 *     e.preventDefault();
 *     
 *     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', contactForm, 'YOUR_PUBLIC_KEY')
 *         .then(() => {
 *             showMessage('success', 'Message sent successfully!');
 *             contactForm.reset();
 *         }, (error) => {
 *             showMessage('error', 'Failed to send message. Please try again.');
 *         });
 * });
 * 
 * Add to HTML head:
 * <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
 * 
 * 
 * Option 3: Web3Forms (Free, no signup required)
 * Setup: 1. Go to https://web3forms.com/
 *        2. Get your access key
 *        3. Update form action to: action="https://api.web3forms.com/submit"
 *        4. Add hidden input: <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY">
 * 
 * 
 * Option 4: FormSubmit (Simple, no signup)
 * Setup: 1. Update form action to: action="https://formsubmit.co/YOUR_EMAIL"
 *        2. Add hidden input: <input type="hidden" name="_subject" value="Portfolio Contact Form">
 *        3. Add hidden input: <input type="hidden" name="_captcha" value="false">
 * 
 * 
 * Option 5: Google Forms (Redirect method)
 * Setup: 1. Create a Google Form
 *        2. Get the form URL
 *        3. Update form action to redirect to Google Form
 *        4. Note: This redirects users away from your site
 */

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all project cards, skill categories, and certification cards
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.project-card, .skill-category, .stat-item, .cert-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add typing effect to hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment below to enable typing effect on page load
// window.addEventListener('load', () => {
//     const nameElement = document.querySelector('.name');
//     if (nameElement) {
//         const originalText = nameElement.textContent;
//         typeWriter(nameElement, originalText, 100);
//     }
// });


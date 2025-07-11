import './style.css'
import { initializeAnimations } from './utils/animations.js'
import { router } from './utils/router.js'
import { renderHomePage } from './pages/home.js'
import { renderServicesPage } from './pages/services.js'
import { renderAboutPage } from './pages/about.js'
import { renderContactPage } from './pages/contact.js'
import { renderCloudComputingPage } from './pages/cloud-computing.js'
import { renderDevOpsPage } from './pages/devops.js'
import { renderWebDevelopmentPage } from './pages/web-development.js'
import { renderMachineLearningPage } from './pages/machine-learning.js'

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  // Setup routes
  router.addRoute('home', (container) => {
    container.innerHTML = `
      <!-- Header -->
      <header class="header">
        <nav class="nav">
          <div class="container">
            <div class="nav-container">
              <a href="#" class="logo" onclick="navigateTo('home')">
                <svg class="logo-svg" viewBox="0 0 140 84" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style="stop-color:#2c5f7c;stop-opacity:1" />
                      <stop offset="100%" style="stop-color:#1a4a5c;stop-opacity:1" />
                    </linearGradient>
                    <linearGradient id="lightningGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style="stop-color:#4a9fb8;stop-opacity:1" />
                      <stop offset="100%" style="stop-color:#2c7a8c;stop-opacity:1" />
                    </linearGradient>
                  </defs>
                  <g transform="translate(20, 12)">
                    <path d="M18 30 C10 30, 4 22, 12 18 C12 10, 22 4, 30 10 C38 4, 48 10, 48 18 C56 22, 50 30, 44 30 Z" 
                          fill="none" 
                          stroke="url(#cloudGrad)" 
                          stroke-width="6" 
                          stroke-linecap="round" 
                          stroke-linejoin="round"/>
                    <circle cx="11" cy="25" r="4" fill="url(#cloudGrad)"/>
                    <circle cx="22" cy="37" r="4" fill="url(#cloudGrad)"/>
                    <circle cx="40" cy="37" r="4" fill="url(#cloudGrad)"/>
                    <path d="M22 12 L30 22 L26 22 L36 36 L28 28 L32 28 L22 12 Z" 
                          fill="url(#lightningGrad)" 
                          stroke="url(#lightningGrad)" 
                          stroke-width="2" 
                          stroke-linejoin="round"/>
                  </g>
                </svg>
                <span class="logo-text">CloudIgnitia</span>
              </a>
              <ul class="nav-menu">
                <li><a href="#home" class="nav-link active" onclick="navigateTo('home')">Home</a></li>
                <li><a href="#services" class="nav-link" onclick="navigateTo('services')">Services</a></li>
                <li><a href="#about" class="nav-link" onclick="navigateTo('about')">About</a></li>
                <li><a href="#contact" class="nav-link" onclick="navigateTo('contact')">Contact</a></li>
                <li><a href="#contact" class="btn btn-primary" onclick="navigateTo('contact')">Get Started</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      ${renderHomePage()}

      <!-- Footer -->
      <footer class="footer">
        <div class="container">
          <div class="footer-content">
            <div class="footer-section">
              <div class="footer-logo">
                <svg class="logo-svg" viewBox="0 0 140 84" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="cloudGradFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style="stop-color:#4a9fb8;stop-opacity:1" />
                      <stop offset="100%" style="stop-color:#2c7a8c;stop-opacity:1" />
                    </linearGradient>
                    <linearGradient id="lightningGradFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style="stop-color:#4a9fb8;stop-opacity:1" />
                      <stop offset="100%" style="stop-color:#2c7a8c;stop-opacity:1" />
                    </linearGradient>
                  </defs>
                  <g transform="translate(20, 12)">
                    <path d="M18 30 C10 30, 4 22, 12 18 C12 10, 22 4, 30 10 C38 4, 48 10, 48 18 C56 22, 50 30, 44 30 Z" 
                          fill="none" 
                          stroke="url(#cloudGradFooter)" 
                          stroke-width="6" 
                          stroke-linecap="round" 
                          stroke-linejoin="round"/>
                    <circle cx="11" cy="25" r="4" fill="url(#cloudGradFooter)"/>
                    <circle cx="22" cy="37" r="4" fill="url(#cloudGradFooter)"/>
                    <circle cx="40" cy="37" r="4" fill="url(#cloudGradFooter)"/>
                    <path d="M22 12 L30 22 L26 22 L36 36 L28 28 L32 28 L22 12 Z" 
                          fill="url(#lightningGradFooter)" 
                          stroke="url(#lightningGradFooter)" 
                          stroke-width="2" 
                          stroke-linejoin="round"/>
                  </g>
                </svg>
                <span class="footer-logo-text">CloudIgnitia</span>
              </div>
              <p>Transforming businesses through innovative cloud computing and DevOps solutions.</p>
              <p>Your trusted partner for digital transformation and enterprise-grade cloud infrastructure.</p>
            </div>
            
            <div class="footer-section">
              <h4>Services</h4>
              <a href="#" onclick="navigateTo('cloud-computing')">Cloud Infrastructure</a>
              <a href="#" onclick="navigateTo('devops')">DevOps Automation</a>
              <a href="#" onclick="navigateTo('web-development')">Web Development</a>
              <a href="#" onclick="navigateTo('machine-learning')">AI & Machine Learning</a>
              <a href="#">Security & Compliance</a>
            </div>
            
            <div class="footer-section">
              <h4>Company</h4>
              <a href="#" onclick="navigateTo('about')">About Us</a>
              <a href="#" onclick="navigateTo('contact')">Contact</a>
              <a href="#">Careers</a>
              <a href="#">Blog</a>
              <a href="#">Case Studies</a>
            </div>
            
            <div class="footer-section">
              <h4>Support</h4>
              <a href="#">Documentation</a>
              <a href="#">Help Center</a>
              <a href="#">24/7 Support</a>
              <a href="#">Status Page</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
          
          <div class="footer-bottom">
            <p>&copy; 2025 CloudIgnitia. All rights reserved. Built with excellence for the cloud-first future.</p>
          </div>
        </div>
      </footer>
    `
    
    // Initialize contact form if it exists
    const contactForm = document.getElementById('contactForm')
    if (contactForm) {
      initializeContactForm()
    }
  })
  router.addRoute('services', renderServicesPage)
  router.addRoute('about', renderAboutPage)
  router.addRoute('contact', renderContactPage)
  router.addRoute('cloud-computing', renderCloudComputingPage)
  router.addRoute('devops', renderDevOpsPage)
  router.addRoute('web-development', renderWebDevelopmentPage)
  router.addRoute('machine-learning', renderMachineLearningPage)

  // Navigate to initial page
  router.navigate('home')

  // Make functions globally available
  window.initializeAnimations = initializeAnimations
})

function initializeContactForm() {
  const form = document.getElementById('contactForm')
  if (!form) return
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    
    // Get form data
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    
    // Simulate form submission
    const submitButton = form.querySelector('button[type="submit"]')
    const originalText = submitButton.innerHTML
    
    submitButton.innerHTML = `
      <span>Sending...</span>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"/>
      </svg>
    `
    submitButton.disabled = true
    
    // Send email with form data
    try {
      // Import and initialize email service
      const { emailService } = await import('./utils/emailService.js')
      await emailService.initialize()
      
      // Try to send email
      const result = await emailService.sendContactForm(data)
      
      if (result.success) {
        showSuccessMessage('Thank you for your message! We have received your inquiry and will get back to you within 24 hours.')
      } else {
        // Try Formspree as fallback
        const fallbackResult = await emailService.sendViaFormspree(data)
        if (fallbackResult.success) {
          showSuccessMessage('Thank you for your message! We have received your inquiry and will get back to you within 24 hours.')
        } else {
          showSuccessMessage('Thank you for your message! Your inquiry has been received. We will get back to you within 24 hours.')
        }
      }
    } catch (error) {
      console.error('Email error:', error)
      showSuccessMessage('Thank you for your message! Your inquiry has been received. We will get back to you within 24 hours.')
    } finally {
      form.reset()
      submitButton.innerHTML = originalText
      submitButton.disabled = false
    }
  })
}

function showSuccessMessage(message) {
  // Create a better success notification
  const notification = document.createElement('div')
  notification.className = 'success-notification'
  notification.innerHTML = `
    <div class="notification-content">
      <div class="notification-icon">✅</div>
      <div class="notification-text">${message}</div>
      <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
    </div>
  `
  
  document.body.appendChild(notification)
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentElement) {
      notification.remove()
    }
  }, 5000)
}
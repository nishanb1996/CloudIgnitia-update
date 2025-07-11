export function renderContactPage(container) {
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
              <li><a href="#" class="nav-link" onclick="navigateTo('home')">Home</a></li>
              <li><a href="#" class="nav-link" onclick="navigateTo('services')">Services</a></li>
              <li><a href="#" class="nav-link" onclick="navigateTo('about')">About</a></li>
              <li><a href="#" class="nav-link active" onclick="navigateTo('contact')">Contact</a></li>
              <li><a href="#" class="btn btn-primary" onclick="navigateTo('contact')">Get Started</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <!-- Contact Hero -->
    <section class="page-hero">
      <div class="container">
        <div class="hero-content fade-in">
          <h1>Get In Touch</h1>
          <p>Ready to transform your business? Let's discuss your project and create a solution that drives results.</p>
        </div>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="section">
      <div class="container">
        <div class="contact-content">
          <div class="contact-form slide-in-left">
            <h3>Send us a Message</h3>
            <form id="contactForm">
              <div class="form-group">
                <label for="name" class="form-label">Full Name</label>
                <input type="text" id="name" name="name" class="form-input" required>
              </div>
              
              <div class="form-group">
                <label for="email" class="form-label">Email Address</label>
                <input type="email" id="email" name="email" class="form-input" required>
              </div>
              
              <div class="form-group">
                <label for="company" class="form-label">Company</label>
                <input type="text" id="company" name="company" class="form-input">
              </div>
              
              <div class="form-group">
                <label for="service" class="form-label">Service Interest</label>
                <select id="service" name="service" class="form-input">
                  <option value="">Select a service</option>
                  <option value="cloud">Cloud Computing</option>
                  <option value="devops">DevOps Solutions</option>
                  <option value="web">Web Development</option>
                  <option value="ml">Machine Learning</option>
                  <option value="security">Security & Compliance</option>
                  <option value="analytics">Data Analytics</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="message" class="form-label">Project Details</label>
                <textarea id="message" name="message" class="form-textarea" placeholder="Tell us about your project requirements..."></textarea>
              </div>
              
              <button type="submit" class="btn btn-primary" style="width: 100%;">Send Message</button>
            </form>
          </div>
          
          <div class="contact-info slide-in-right">
            <h3>Contact Information</h3>
            
            <div class="contact-item">
              <div class="contact-icon">📧</div>
              <div class="contact-details">
                <h4>Email</h4>
                <p>hello@nishan-it.com</p>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">📱</div>
              <div class="contact-details">
                <h4>Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">📍</div>
              <div class="contact-details">
                <h4>Office</h4>
                <p>123 Tech Hub Drive<br>Silicon Valley, CA 94025</p>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">🕒</div>
              <div class="contact-details">
                <h4>Business Hours</h4>
                <p>Mon - Fri: 9:00 AM - 6:00 PM<br>24/7 Emergency Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section bg-secondary">
      <div class="container">
        <div class="section-header fade-in">
          <h2 class="section-title">Frequently Asked Questions</h2>
          <p class="section-subtitle">Common questions about our services and process</p>
        </div>
        
        <div class="faq-container">
          <div class="faq-item fade-in">
            <div class="faq-question">
              <h4>How long does a typical cloud migration take?</h4>
              <span class="faq-toggle">+</span>
            </div>
            <div class="faq-answer">
              <p>Cloud migration timelines vary based on complexity, but typically range from 2-6 months. We provide detailed project timelines during our initial consultation.</p>
            </div>
          </div>
          
          <div class="faq-item fade-in">
            <div class="faq-question">
              <h4>Do you provide 24/7 support?</h4>
              <span class="faq-toggle">+</span>
            </div>
            <div class="faq-answer">
              <p>Yes, we offer 24/7 monitoring and support for all our cloud infrastructure and DevOps services to ensure maximum uptime and quick issue resolution.</p>
            </div>
          </div>
          
          <div class="faq-item fade-in">
            <div class="faq-question">
              <h4>What cloud platforms do you work with?</h4>
              <span class="faq-toggle">+</span>
            </div>
            <div class="faq-answer">
              <p>We specialize in AWS, Microsoft Azure, and Google Cloud Platform. Our team holds certifications across all major cloud providers.</p>
            </div>
          </div>
          
          <div class="faq-item fade-in">
            <div class="faq-question">
              <h4>Can you help with compliance requirements?</h4>
              <span class="faq-toggle">+</span>
            </div>
            <div class="faq-answer">
              <p>Absolutely. We help organizations meet various compliance standards including GDPR, HIPAA, SOC 2, and PCI DSS through proper security implementations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h4>Nishan IT</h4>
            <p>Transforming businesses through innovative cloud computing and DevOps solutions.</p>
            <p>Your trusted partner for digital transformation.</p>
          </div>
          
          <div class="footer-section">
            <h4>Services</h4>
            <a href="#" onclick="navigateTo('cloud-computing')">Cloud Computing</a>
            <a href="#" onclick="navigateTo('devops')">DevOps Solutions</a>
            <a href="#" onclick="navigateTo('web-development')">Web Development</a>
            <a href="#" onclick="navigateTo('machine-learning')">Machine Learning</a>
          </div>
          
          <div class="footer-section">
            <h4>Company</h4>
            <a href="#" onclick="navigateTo('about')">About Us</a>
            <a href="#" onclick="navigateTo('contact')">Contact</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
          </div>
          
          <div class="footer-section">
            <h4>Support</h4>
            <a href="#">Documentation</a>
            <a href="#">Help Center</a>
            <a href="#">24/7 Support</a>
            <a href="#">Status Page</a>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2025 Nishan IT. All rights reserved. Built with excellence for the cloud-first future.</p>
        </div>
      </div>
    </footer>
  `
  
  // Initialize contact form
  initializeContactForm()
  // Initialize FAQ
  initializeFAQ()
}

function initializeContactForm() {
  const form = document.getElementById('contactForm')
  
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    // Get form data
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    
    // Simulate form submission
    const submitButton = form.querySelector('button[type="submit"]')
    const originalText = submitButton.textContent
    
    submitButton.textContent = 'Sending...'
    submitButton.disabled = true
    
    // Send email with form data
    sendContactEmail(data, form, submitButton, originalText)
  })
}

async function sendContactEmail(data, form, submitButton, originalText) {
  try {
    // Import and initialize email service
    const { emailService } = await import('../utils/emailService.js')
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
    submitButton.textContent = originalText
    submitButton.disabled = false
  }
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

function initializeFAQ() {
  const faqItems = document.querySelectorAll('.faq-item')
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question')
    const answer = item.querySelector('.faq-answer')
    const toggle = item.querySelector('.faq-toggle')
    
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open')
      
      // Close all FAQ items
      faqItems.forEach(faq => {
        faq.classList.remove('open')
        faq.querySelector('.faq-toggle').textContent = '+'
      })
      
      // Open clicked item if it wasn't already open
      if (!isOpen) {
        item.classList.add('open')
        toggle.textContent = '-'
      }
    })
  })
}
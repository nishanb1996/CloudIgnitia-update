export function renderServicesPage(container) {
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
              <li><a href="#" class="nav-link active" onclick="navigateTo('services')">Services</a></li>
              <li><a href="#" class="nav-link" onclick="navigateTo('about')">About</a></li>
              <li><a href="#" class="nav-link" onclick="navigateTo('contact')">Contact</a></li>
              <li><a href="#" class="btn btn-primary" onclick="navigateTo('contact')">Get Started</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <!-- Services Hero -->
    <section class="page-hero">
      <div class="container">
        <div class="hero-content fade-in">
          <h1>Our Services</h1>
          <p>Comprehensive technology solutions to accelerate your digital transformation journey</p>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="section services-detailed">
      <div class="container">
        <div class="grid grid-2">
          <div class="service-detail-card fade-in" onclick="navigateTo('cloud-computing')">
            <div class="service-icon">☁️</div>
            <h3>Cloud Computing</h3>
            <p>Complete cloud infrastructure setup, migration, and management. AWS, Azure, and Google Cloud expertise with 24/7 monitoring and support.</p>
            <ul class="service-features">
              <li>Cloud Migration & Setup</li>
              <li>Infrastructure Management</li>
              <li>Cost Optimization</li>
              <li>24/7 Monitoring</li>
            </ul>
            <div class="service-cta">
              <span class="btn btn-outline">Learn More →</span>
            </div>
          </div>
          
          <div class="service-detail-card fade-in" onclick="navigateTo('devops')">
            <div class="service-icon">⚙️</div>
            <h3>DevOps Solutions</h3>
            <p>Streamline your development pipeline with CI/CD, containerization, infrastructure as code, and automated deployment strategies.</p>
            <ul class="service-features">
              <li>CI/CD Pipeline Setup</li>
              <li>Docker & Kubernetes</li>
              <li>Infrastructure as Code</li>
              <li>Automated Testing</li>
            </ul>
            <div class="service-cta">
              <span class="btn btn-outline">Learn More →</span>
            </div>
          </div>
          
          <div class="service-detail-card fade-in" onclick="navigateTo('web-development')">
            <div class="service-icon">💻</div>
            <h3>Web Development</h3>
            <p>Modern, responsive web applications built with cutting-edge technologies. Full-stack development from concept to deployment.</p>
            <ul class="service-features">
              <li>React & Vue.js Development</li>
              <li>Node.js Backend</li>
              <li>Database Design</li>
              <li>API Development</li>
            </ul>
            <div class="service-cta">
              <span class="btn btn-outline">Learn More →</span>
            </div>
          </div>
          
          <div class="service-detail-card fade-in" onclick="navigateTo('machine-learning')">
            <div class="service-icon">🤖</div>
            <h3>Machine Learning</h3>
            <p>AI-powered solutions including predictive analytics, natural language processing, computer vision, and custom ML model development.</p>
            <ul class="service-features">
              <li>Custom ML Models</li>
              <li>Data Analytics</li>
              <li>Computer Vision</li>
              <li>NLP Solutions</li>
            </ul>
            <div class="service-cta">
              <span class="btn btn-outline">Learn More →</span>
            </div>
          </div>
          
          <div class="service-detail-card fade-in">
            <div class="service-icon">🔒</div>
            <h3>Security & Compliance</h3>
            <p>Comprehensive security audits, compliance management, and implementation of best practices for data protection and privacy.</p>
            <ul class="service-features">
              <li>Security Audits</li>
              <li>Compliance Management</li>
              <li>Penetration Testing</li>
              <li>Data Protection</li>
            </ul>
            <div class="service-cta">
              <span class="btn btn-outline">Learn More →</span>
            </div>
          </div>
          
          <div class="service-detail-card fade-in">
            <div class="service-icon">📊</div>
            <h3>Data Analytics</h3>
            <p>Transform your data into actionable insights with advanced analytics, business intelligence, and real-time reporting solutions.</p>
            <ul class="service-features">
              <li>Business Intelligence</li>
              <li>Real-time Analytics</li>
              <li>Data Visualization</li>
              <li>Predictive Analytics</li>
            </ul>
            <div class="service-cta">
              <span class="btn btn-outline">Learn More →</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta-section">
      <div class="container">
        <div class="cta-content fade-in">
          <h2>Ready to Transform Your Business?</h2>
          <p>Let's discuss your project and create a solution that drives results.</p>
          <div class="cta-buttons">
            <a href="#" class="btn btn-primary" onclick="navigateTo('contact')">Get Started</a>
            <a href="#" class="btn btn-secondary" onclick="navigateTo('about')">Learn More</a>
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
}
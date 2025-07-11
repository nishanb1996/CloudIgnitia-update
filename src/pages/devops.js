export function renderDevOpsPage(container) {
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
              <li><a href="#" class="nav-link" onclick="navigateTo('contact')">Contact</a></li>
              <li><a href="#" class="btn btn-primary" onclick="navigateTo('contact')">Get Started</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <!-- Service Hero -->
    <section class="service-hero">
      <div class="container">
        <div class="hero-content fade-in">
          <div class="service-icon-large">⚙️</div>
          <h1>DevOps Solutions</h1>
          <p>Streamline your development pipeline with CI/CD, containerization, infrastructure as code, and automated deployment strategies</p>
          <div class="hero-buttons">
            <a href="#" class="btn btn-primary" onclick="navigateTo('contact')">Get Started</a>
            <a href="#features" class="btn btn-secondary">Learn More</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section id="features" class="section">
      <div class="container">
        <div class="section-header fade-in">
          <h2 class="section-title">DevOps Capabilities</h2>
          <p class="section-subtitle">Accelerate development and improve deployment reliability</p>
        </div>
        
        <div class="grid grid-2">
          <div class="feature-card fade-in">
            <div class="feature-icon">🔄</div>
            <h4>CI/CD Pipelines</h4>
            <p>Automated continuous integration and deployment pipelines to accelerate software delivery and reduce errors.</p>
          </div>
          
          <div class="feature-card fade-in">
            <div class="feature-icon">🐳</div>
            <h4>Containerization</h4>
            <p>Docker and Kubernetes implementation for scalable, portable, and efficient application deployment.</p>
          </div>
          
          <div class="feature-card fade-in">
            <div class="feature-icon">📜</div>
            <h4>Infrastructure as Code</h4>
            <p>Terraform and CloudFormation templates for consistent, version-controlled infrastructure management.</p>
          </div>
          
          <div class="feature-card fade-in">
            <div class="feature-icon">📊</div>
            <h4>Monitoring & Logging</h4>
            <p>Comprehensive monitoring solutions with Prometheus, Grafana, and ELK stack for full observability.</p>
          </div>
          
          <div class="feature-card fade-in">
            <div class="feature-icon">🔒</div>
            <h4>Security Integration</h4>
            <p>DevSecOps practices with automated security testing and vulnerability scanning in the pipeline.</p>
          </div>
          
          <div class="feature-card fade-in">
            <div class="feature-icon">⚡</div>
            <h4>Automated Testing</h4>
            <p>Comprehensive test automation including unit, integration, and end-to-end testing frameworks.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tools & Technologies -->
    <section class="section bg-secondary">
      <div class="container">
        <div class="section-header fade-in">
          <h2 class="section-title">DevOps Tools & Technologies</h2>
          <p class="section-subtitle">Industry-leading tools for modern DevOps practices</p>
        </div>
        
        <div class="tools-grid">
          <div class="tool-category fade-in">
            <h4>CI/CD</h4>
            <div class="tool-list">
              <span class="tool-tag">Jenkins</span>
              <span class="tool-tag">GitLab CI</span>
              <span class="tool-tag">GitHub Actions</span>
              <span class="tool-tag">Azure DevOps</span>
            </div>
          </div>
          
          <div class="tool-category fade-in">
            <h4>Containerization</h4>
            <div class="tool-list">
              <span class="tool-tag">Docker</span>
              <span class="tool-tag">Kubernetes</span>
              <span class="tool-tag">Helm</span>
              <span class="tool-tag">OpenShift</span>
            </div>
          </div>
          
          <div class="tool-category fade-in">
            <h4>Infrastructure</h4>
            <div class="tool-list">
              <span class="tool-tag">Terraform</span>
              <span class="tool-tag">Ansible</span>
              <span class="tool-tag">CloudFormation</span>
              <span class="tool-tag">Pulumi</span>
            </div>
          </div>
          
          <div class="tool-category fade-in">
            <h4>Monitoring</h4>
            <div class="tool-list">
              <span class="tool-tag">Prometheus</span>
              <span class="tool-tag">Grafana</span>
              <span class="tool-tag">ELK Stack</span>
              <span class="tool-tag">Datadog</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits -->
    <section class="section">
      <div class="container">
        <div class="section-header fade-in">
          <h2 class="section-title">DevOps Benefits</h2>
          <p class="section-subtitle">Transform your development and operations with proven results</p>
        </div>
        
        <div class="benefits-grid">
          <div class="benefit-card fade-in">
            <div class="benefit-stat">10x</div>
            <h4>Faster Deployments</h4>
            <p>Automated pipelines reduce deployment time from hours to minutes</p>
          </div>
          
          <div class="benefit-card fade-in">
            <div class="benefit-stat">50%</div>
            <h4>Fewer Failures</h4>
            <p>Automated testing and monitoring significantly reduce production issues</p>
          </div>
          
          <div class="benefit-card fade-in">
            <div class="benefit-stat">3x</div>
            <h4>Faster Recovery</h4>
            <p>Automated rollback and monitoring enable rapid issue resolution</p>
          </div>
          
          <div class="benefit-card fade-in">
            <div class="benefit-stat">40%</div>
            <h4>Cost Reduction</h4>
            <p>Efficient resource utilization and automation reduce operational costs</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta-section">
      <div class="container">
        <div class="cta-content fade-in">
          <h2>Ready to Transform Your DevOps?</h2>
          <p>Let's implement modern DevOps practices that accelerate your development and improve reliability.</p>
          <div class="cta-buttons">
            <a href="#" class="btn btn-primary" onclick="navigateTo('contact')">Start Your DevOps Journey</a>
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
export function renderCloudComputingPage(container) {
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
          <div class="service-icon-large">☁️</div>
          <h1>Cloud Computing Services</h1>
          <p>Complete cloud infrastructure setup, migration, and management with AWS, Azure, and Google Cloud expertise</p>
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
          <h2 class="section-title">Cloud Computing Features</h2>
          <p class="section-subtitle">Comprehensive cloud solutions tailored to your business needs</p>
        </div>
        
        <div class="grid grid-2">
          <div class="feature-card fade-in">
            <div class="feature-icon">🚀</div>
            <h4>Cloud Migration</h4>
            <p>Seamless migration of your existing infrastructure to the cloud with minimal downtime and maximum efficiency.</p>
          </div>
          
          <div class="feature-card fade-in">
            <div class="feature-icon">⚡</div>
            <h4>Auto Scaling</h4>
            <p>Automatically scale your resources up or down based on demand to optimize performance and costs.</p>
          </div>
          
          <div class="feature-card fade-in">
            <div class="feature-icon">🔒</div>
            <h4>Security First</h4>
            <p>Enterprise-grade security with encryption, access controls, and compliance with industry standards.</p>
          </div>
          
          <div class="feature-card fade-in">
            <div class="feature-icon">💰</div>
            <h4>Cost Optimization</h4>
            <p>Continuous monitoring and optimization to reduce cloud costs while maintaining performance.</p>
          </div>
          
          <div class="feature-card fade-in">
            <div class="feature-icon">📊</div>
            <h4>Monitoring & Analytics</h4>
            <p>Real-time monitoring, logging, and analytics to ensure optimal performance and quick issue resolution.</p>
          </div>
          
          <div class="feature-card fade-in">
            <div class="feature-icon">🔄</div>
            <h4>Backup & Recovery</h4>
            <p>Automated backup solutions and disaster recovery planning to protect your critical data.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Cloud Platforms -->
    <section class="section bg-secondary">
      <div class="container">
        <div class="section-header fade-in">
          <h2 class="section-title">Supported Cloud Platforms</h2>
          <p class="section-subtitle">We work with all major cloud providers</p>
        </div>
        
        <div class="grid grid-3">
          <div class="platform-card fade-in">
            <div class="platform-logo">AWS</div>
            <h4>Amazon Web Services</h4>
            <p>Complete AWS solutions including EC2, S3, RDS, Lambda, and more. Our team holds AWS certifications.</p>
            <ul class="platform-features">
              <li>EC2 & Auto Scaling</li>
              <li>S3 & CloudFront</li>
              <li>RDS & DynamoDB</li>
              <li>Lambda & API Gateway</li>
            </ul>
          </div>
          
          <div class="platform-card fade-in">
            <div class="platform-logo">Azure</div>
            <h4>Microsoft Azure</h4>
            <p>Full Azure implementation including Virtual Machines, App Services, SQL Database, and Azure Functions.</p>
            <ul class="platform-features">
              <li>Virtual Machines</li>
              <li>App Services</li>
              <li>SQL Database</li>
              <li>Azure Functions</li>
            </ul>
          </div>
          
          <div class="platform-card fade-in">
            <div class="platform-logo">GCP</div>
            <h4>Google Cloud Platform</h4>
            <p>Google Cloud solutions including Compute Engine, Cloud Storage, BigQuery, and Cloud Functions.</p>
            <ul class="platform-features">
              <li>Compute Engine</li>
              <li>Cloud Storage</li>
              <li>BigQuery</li>
              <li>Cloud Functions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="section">
      <div class="container">
        <div class="section-header fade-in">
          <h2 class="section-title">Our Cloud Migration Process</h2>
          <p class="section-subtitle">A proven methodology for successful cloud adoption</p>
        </div>
        
        <div class="process-timeline">
          <div class="process-step fade-in">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>Assessment & Planning</h4>
              <p>Comprehensive analysis of your current infrastructure and requirements to create a detailed migration plan.</p>
            </div>
          </div>
          
          <div class="process-step fade-in">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>Architecture Design</h4>
              <p>Design optimal cloud architecture considering scalability, security, and cost-effectiveness.</p>
            </div>
          </div>
          
          <div class="process-step fade-in">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>Migration Execution</h4>
              <p>Careful migration of applications and data with minimal downtime and thorough testing.</p>
            </div>
          </div>
          
          <div class="process-step fade-in">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4>Optimization & Support</h4>
              <p>Continuous monitoring, optimization, and 24/7 support to ensure peak performance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta-section">
      <div class="container">
        <div class="cta-content fade-in">
          <h2>Ready to Move to the Cloud?</h2>
          <p>Let's discuss your cloud migration strategy and create a solution that drives results.</p>
          <div class="cta-buttons">
            <a href="#" class="btn btn-primary" onclick="navigateTo('contact')">Start Your Migration</a>
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
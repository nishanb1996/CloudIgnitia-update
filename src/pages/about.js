export function renderAboutPage(container) {
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
              <li><a href="#" class="nav-link active" onclick="navigateTo('about')">About</a></li>
              <li><a href="#" class="nav-link" onclick="navigateTo('contact')">Contact</a></li>
              <li><a href="#" class="btn btn-primary" onclick="navigateTo('contact')">Get Started</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <!-- About Hero -->
    <section class="page-hero">
      <div class="container">
        <div class="hero-content fade-in">
          <h1>About Nishan IT</h1>
          <p>Leading the future of cloud computing and DevOps with innovative solutions and expert guidance</p>
        </div>
      </div>
    </section>

    <!-- Company Story -->
    <section class="section">
      <div class="container">
        <div class="about-content">
          <div class="about-text slide-in-left">
            <h2>Our Story</h2>
            <p>Founded in 2020, CloudOps Solutions emerged from a vision to help businesses harness the full potential of cloud computing and modern DevOps practices. Our team of experienced engineers and consultants recognized the growing need for reliable, scalable, and secure cloud solutions.</p>
            <p>Founded in 2020, Nishan IT emerged from a vision to help businesses harness the full potential of cloud computing and modern DevOps practices. Our team of experienced engineers and consultants recognized the growing need for reliable, scalable, and secure cloud solutions.</p>
            <p>Today, we serve over 150 clients worldwide, from innovative startups to established enterprises, helping them transform their technology infrastructure and accelerate their digital transformation journey.</p>
          </div>
          
          <div class="about-image slide-in-right">
            <img src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Team working on cloud solutions" />
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="section bg-secondary">
      <div class="container">
        <div class="grid grid-2">
          <div class="mission-card fade-in">
            <div class="mission-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>To empower businesses with cutting-edge cloud computing and DevOps solutions that drive innovation, improve efficiency, and accelerate growth in the digital age.</p>
          </div>
          
          <div class="mission-card fade-in">
            <div class="mission-icon">👁️</div>
            <h3>Our Vision</h3>
            <p>To be the global leader in cloud transformation services, setting new standards for excellence in cloud computing, DevOps, and emerging technologies.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="section">
      <div class="container">
        <div class="section-header fade-in">
          <h2 class="section-title">Meet Our Team</h2>
          <p class="section-subtitle">Expert professionals dedicated to your success</p>
        </div>
        
        <div class="grid grid-3">
          <div class="team-card fade-in">
            <div class="team-image">
              <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" alt="John Smith" />
            </div>
            <h4>John Smith</h4>
            <p class="team-role">CEO & Cloud Architect</p>
            <p>15+ years in cloud computing and enterprise architecture. AWS Certified Solutions Architect Professional.</p>
          </div>
          
          <div class="team-card fade-in">
            <div class="team-image">
              <img src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Sarah Johnson" />
            </div>
            <h4>Sarah Johnson</h4>
            <p class="team-role">CTO & DevOps Lead</p>
            <p>Expert in Kubernetes, Docker, and CI/CD pipelines. Certified Kubernetes Administrator and DevOps Engineer.</p>
          </div>
          
          <div class="team-card fade-in">
            <div class="team-image">
              <img src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Mike Chen" />
            </div>
            <h4>Mike Chen</h4>
            <p class="team-role">ML Engineer & Data Scientist</p>
            <p>PhD in Machine Learning with expertise in TensorFlow, PyTorch, and big data analytics platforms.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="section bg-secondary">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-card fade-in">
            <span class="stat-number">500+</span>
            <span class="stat-label">Projects Completed</span>
          </div>
          <div class="stat-card fade-in">
            <span class="stat-number">99.9%</span>
            <span class="stat-label">Uptime Guarantee</span>
          </div>
          <div class="stat-card fade-in">
            <span class="stat-number">24/7</span>
            <span class="stat-label">Support Available</span>
          </div>
          <div class="stat-card fade-in">
            <span class="stat-number">150+</span>
            <span class="stat-label">Happy Clients</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="section">
      <div class="container">
        <div class="section-header fade-in">
          <h2 class="section-title">Our Values</h2>
          <p class="section-subtitle">The principles that guide everything we do</p>
        </div>
        
        <div class="grid grid-3">
          <div class="value-card fade-in">
            <div class="value-icon">⚡</div>
            <h4>Innovation</h4>
            <p>We stay at the forefront of technology, constantly exploring new solutions and methodologies to deliver cutting-edge results.</p>
          </div>
          
          <div class="value-card fade-in">
            <div class="value-icon">🤝</div>
            <h4>Partnership</h4>
            <p>We work closely with our clients as trusted partners, understanding their unique needs and challenges to deliver tailored solutions.</p>
          </div>
          
          <div class="value-card fade-in">
            <div class="value-icon">🎯</div>
            <h4>Excellence</h4>
            <p>We maintain the highest standards in everything we do, from code quality to customer service, ensuring exceptional outcomes.</p>
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
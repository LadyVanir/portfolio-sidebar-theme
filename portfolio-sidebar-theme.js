/**
 * Copyright 2025 Olivia Sarsfield
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import './portfolio-sidebar.js';
import './portfolio-page-wrapper.js';

class PortfolioSidebarTheme extends LitElement {
  static properties = {
    activePageId: { type: String, reflect: true }
  };

  constructor() {
    super();
    this.activePageId = null;
  }

  static styles = css`
    :host {
      display: flex;
      height: 100vh;
      overflow: hidden;
      font-family: Georgia, 'Times New Roman', Times, serif sans-serif;
    }
    
    .main-container {
      display: flex;
      width: 100%;
      height: 100%;
    }
    
    @media (max-width: 768px) {
      :host, .main-container {
        flex-direction: column;
      }
    }
  `;

  firstUpdated() {
    this.addEventListener('active-page-changed', (e) => {
      this.activePageId = e.detail.id;
      this._updateActiveNavItem();
    });
  }

  _updateActiveNavItem() {
    const navItems = this.renderRoot.querySelectorAll('portfolio-sidebar a, portfolio-sidebar button');
    navItems.forEach(item => {
      const href = item.getAttribute('href');
      if (href && href.replace('#', '') === this.activePageId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  _handleNavClick(e) {
    const navItems = this.renderRoot.querySelectorAll('portfolio-sidebar a, portfolio-sidebar button');
    navItems.forEach(item => item.classList.remove('active'));
    e.currentTarget.classList.add('active');
  }

  render() {
    return html`
      <div class="main-container">
        <portfolio-sidebar>
          <a href="#home" @click="${this._handleNavClick}" class="${this.activePageId === 'home' ? 'active' : ''}">HOME</a>
          <a href="#resume" @click="${this._handleNavClick}" class="${this.activePageId === 'resume' ? 'active' : ''}">RESUME</a>
          <a href="#activities" @click="${this._handleNavClick}" class="${this.activePageId === 'activities' ? 'active' : ''}">ACTIVITIES</a>
          <a href="#about" @click="${this._handleNavClick}" class="${this.activePageId === 'about' ? 'active' : ''}">ABOUT ME</a>
          <a href="#contact" @click="${this._handleNavClick}" class="${this.activePageId === 'contact' ? 'active' : ''}">CONTACT</a>
        </portfolio-sidebar>
        
        <portfolio-page-wrapper>
          <portfolio-page id="home" title="Home">
            <img class="profile-pic" src="head%20shot%202.JPG" alt="Olivia Sarsfield" style="width: 200px; height: 200px; object-fit: cover; border-radius: 50%; margin-bottom: 1em;" />
            <h2 style="font-size: 2.5rem; margin-bottom: 0.5rem;">Olivia Sarsfield</h2>
            <p style="font-size: 1.2rem; color: #666;">Enterprise Technology Integration and German | The Pennsylvania State University</p>
          </portfolio-page>

          <portfolio-page id="resume" title="Resume">
            <h3>Olivia Sarsfield</h3>
            <p>York, PA | 717-318-7468</p>
            <p>Email: ocs5196@psu.edu</p>
            
            <h4 style="margin-top: 2rem;">Experience</h4>
            <p><strong>Marketing Intern</strong> Project Management</p>
            <p><strong>Verder Scientific-Haan, Germany</strong></p>

            <h4 style="margin-top: 2rem;">Education</h4>
            <p>The Pennsylvania State University | B.S. Enterprise Technology Integration</p>
            <p>The Pennsylvania State University | B.S. German</p>

            <h4 style="margin-top: 2rem;">Skills</h4>
            <p>MS Office | SQL | Photoshop | English, Spanish, German</p>
          </portfolio-page>

          <portfolio-page id="activities" title="Activities">
            <p><strong>Organizations and Clubs:</strong></p>
            <p><strong>Penn State Thespians</strong> Web Chair 2025-Present, Member 2024-Present</p>
            <p><strong>No Refund Theatre</strong> Treasurer 2025-Present, THON Chair 2023-2024, Member 2023-Present</p>
          </portfolio-page>

          <portfolio-page id="about" title="About Me">
            <div style="max-width: 700px; font-size: 1.2rem; line-height: 1.8;">
              Hi! My name is Olivia, and I am a second-year student pursuing a major in
              Enterprise Technology Integration and German with a concentration in business.
              I have an appreciation for emerging technologies and believe that it is vital
              to grow and adapt with new innovations. I have an interest in combining my love
              of languages and linguistics with technology.
            </div>
          </portfolio-page>

          <portfolio-page id="contact" title="Contact">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScJLa3oywpBHL6R1h0xdoibl-QOlBQYgz6LXKECjXnmRDceEA/viewform?usp=header"
              title="Contact Form"
              style="border: none; width: 100%; max-width: 700px; height: 600px;">
              Loading…
            </iframe>

            <div style="margin-top:2rem;">
              <p>Email: ocs5196@psu.edu</p>
              <p>Phone: 717-318-7468</p>
              <p><a href="https://www.linkedin.com/in/olivia-sarsfield/" target="_blank" style="color: #222;">LinkedIn</a> |
                <a href="https://github.com/LadyVanir" target="_blank" style="color: #222;">GitHub</a></p>
            </div>
          </portfolio-page>
        </portfolio-page-wrapper>
      </div>
    `;
  }
}

customElements.define('portfolio-sidebar-theme', PortfolioSidebarTheme);
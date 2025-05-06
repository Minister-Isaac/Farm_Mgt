import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="logo-container">
          <div className="logo">
            <span className="logo-icon">🟢</span>
            <span className="logo-text">FarmTrack</span>
          </div>
        </div>

        <h3>Subscribe to our newsletter</h3>
        <div className="newsletter">
          <input type="email" placeholder="Input your email" />
          <button>Subscribe</button>
        </div>
      </div>

      <div className="footer-links">
        <div>
          <h4>Product</h4>
          <p>Features</p>
          <p>Pricing</p>
        </div>
        <div>
          <h4>Resources</h4>
          <p>Blog</p>
          <p>User guides</p>
          <p>Webinars</p>
        </div>
        <div>
          <h4>Company</h4>
          <p>About us</p>
          <p>Contact us</p>
        </div>
        <div>
          <h4>Plans & Pricing</h4>
          <p>Personal</p>
          <p>Start up</p>
          <p>Organization</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="language-select">
          <select>
            <option>English</option>
            <option>Spanish</option>
          </select>
        </div>
        <div className="footer-meta">
          <p>© 2024 Brand, Inc.</p>
          <p>• Privacy • Terms • Sitemap</p>
        </div>
        <div className="social-icons">
          <span>🐦</span>
          <span>📘</span>
          <span>💼</span>
          <span>▶️</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

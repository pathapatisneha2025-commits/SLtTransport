import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <style>
        {`
        .footer-container {
          background-color: #f8f9fa;
          padding: 60px 8%;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          color: #333;
          border-top: 1px solid #e5e7eb;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr;
          gap: 40px;
          margin-bottom: 35px;
        }

        .footer-section h3 {
          font-size: 1.2rem;
          margin-bottom: 18px;
          color: #0f172a;
          font-weight: 600;
        }

        /* Brand & Logo Fix */
        .footer-logo-section .logo-wrapper {
          background: #001f3f; /* Matches your navbar color for consistency */
          display: inline-block;
          padding: 5px 15px;
          border-radius: 4px;
          margin-bottom: 15px;
        }

        .footer-logo-section img {
          max-width: 150px;
          height: auto;
          display: block;
          /* Blending logic for the JPEG box */
          mix-blend-mode: screen; 
          filter: brightness(1.2) contrast(1.2);
        }

        .footer-logo-section p {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #64748b;
        }

        /* Links */
        .footer-links ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 12px;
        }

        .footer-links a {
          text-decoration: none;
          color: #475569;
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }

        .footer-links a:hover {
          color: #f5c518; /* Matches your brand gold */
        }

        /* Contact */
        .contact-item {
          display: flex;
          gap: 12px;
          margin-bottom: 14px;
          font-size: 0.95rem;
          color: #475569;
          align-items: flex-start;
        }

        .contact-icon {
          font-size: 1.2rem;
        }

        /* Footer Bottom */
        .footer-bottom {
          text-align: center;
          padding-top: 20px;
          border-top: 1px solid #e5e7eb;
          font-size: 0.85rem;
          color: #64748b;
        }

        @media (max-width: 992px) {
          .footer-content { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 576px) {
          .footer-container { padding: 50px 6%; }
          .footer-content { grid-template-columns: 1fr; gap: 30px; }
        }
        `}
      </style>

      <footer className="footer-container">
        <div className="footer-content">
          {/* Brand */}
          <div className="footer-section footer-logo-section">
            <div className="logo-wrapper">
              <img src="/companylogo.jpeg" alt="SLT Logo" />
            </div>
            <p>
              <strong>Swift Liger Transport And General Contracting</strong> delivers reliable
              logistics, heavy equipment rentals, manpower supply, and
              industrial solutions with quality and commitment.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/oilandgas">Oil & Gas</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h3>Contact Us</h3>
            <div className="contact-item">
              <span className="contact-icon">☎️</span>
              <span>Landline: +97126271510</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <span>contact@sltservices.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>MUSSAFAH-45 , ABU DHABI, UAE</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 <strong>Swift Liger Transport And General Contracting</strong>. All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
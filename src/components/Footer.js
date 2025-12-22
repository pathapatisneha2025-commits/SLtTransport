import React from "react";

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
          grid-template-columns: 1.6fr 1fr 1fr 1.6fr;
          gap: 40px;
          margin-bottom: 35px;
        }

        .footer-section h3 {
          font-size: 1.1rem;
          margin-bottom: 18px;
          color: #0f172a;
        }

        /* Brand */
        .footer-logo-section img {
          max-width: 140px;
          margin-bottom: 12px;
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
          margin-bottom: 10px;
        }

        .footer-links a {
          text-decoration: none;
          color: #475569;
          font-size: 0.95rem;
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: #2563eb;
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
          font-size: 1.1rem;
          color: #2563eb;
        }

        /* Footer Bottom */
        .footer-bottom {
          text-align: center;
          padding-top: 18px;
          border-top: 1px solid #e5e7eb;
          font-size: 0.85rem;
          color: #64748b;
        }

        /* Tablet */
        @media (max-width: 992px) {
          .footer-content {
            grid-template-columns: 1fr 1fr;
          }
        }

        /* Mobile */
        @media (max-width: 576px) {
          .footer-container {
            padding: 50px 6%;
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .footer-section h3 {
            margin-bottom: 12px;
          }

          .footer-bottom {
            font-size: 0.8rem;
          }
        }
        `}
      </style>

      <footer className="footer-container">
        <div className="footer-content">
          {/* Brand */}
          <div className="footer-section footer-logo-section">
            <img src="/companylogo.jpeg" alt="SLT Logo" />
            <p>
              <strong> Swift Liger Transport And General Contracting</strong> delivers reliable
              logistics, heavy equipment rentals, manpower supply, and
              industrial solutions with quality and commitment.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section footer-links">
            <h3>Our Services</h3>
            <ul>
              <li><a href="/services/transport">Transport Services</a></li>
              <li><a href="/services/heavy-equipment">Heavy Equipment Rental</a></li>
              <li><a href="/services/manpower">Manpower Supply</a></li>
              <li><a href="/services/logistics">Logistics Solutions</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h3>Contact Us</h3>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <span>+91 98765 43210</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <span>contact@sltservices.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>
                Industrial Area, Anantapur, Andhra Pradesh, India
              </span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} <strong>SLT Swift Liger Transport</strong>.
          All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;

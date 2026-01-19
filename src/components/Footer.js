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

        /* Brand */
        .footer-logo-section img {
          max-width: 150px;
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
          margin-bottom: 12px;
        }

        .footer-links a {
          text-decoration: none;
          color: #475569;
          font-size: 0.95rem;
          transition: all 0.3s ease;
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
          font-size: 1.2rem;
          color: #2563eb;
        }

        /* Social Icons */
        .social-icons {
          display: flex;
          gap: 15px;
          margin-top: 15px;
        }

        .social-icons a {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 36px;
          height: 36px;
          background-color: #e2e8f0;
          border-radius: 50%;
          color: #2563eb;
          font-size: 1.1rem;
          transition: all 0.3s ease;
        }

        .social-icons a:hover {
          background-color: #2563eb;
          color: #fff;
        }

        /* Footer Bottom */
        .footer-bottom {
          text-align: center;
          padding-top: 20px;
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
              <strong>Swift Liger Transport And General Contracting</strong> delivers reliable
              logistics, heavy equipment rentals, manpower supply, and
              industrial solutions with quality and commitment.
            </p>
           
          </div>

          {/* Quick Links */}
          <div className="footer-section footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/oilandgas">OilandGas</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h3>Contact Us</h3>
           {/* Mobile Number */}
  <div className="contact-item">
    <span className="contact-icon">📱</span>
    <span>Mobile: +971569569555</span>
  </div>

  {/* Landline Number */}
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
              <span>Industrial Area, Anantapur, Andhra Pradesh, India</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} <strong>Swift Liger Transport And General Contracting</strong>. All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;

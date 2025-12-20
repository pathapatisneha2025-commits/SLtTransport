import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Arial, sans-serif;
        }

        .navbar {
          background: #0f0f0f;
          color: #fff;
          height: 64px; /* Fixed height */
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 24px;
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          height: 100%;
        }

        .logo-img {
          height: 100%; /* Fit inside navbar */
          width: auto;
          object-fit: contain;
        }

        .logo-text {
          font-size: 22px;
          font-weight: bold;
          color: #f5c518;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .nav-links a {
          color: #fff;
          text-decoration: none;
          font-size: 15px;
        }

        .nav-links a:hover {
          color: #f5c518;
        }

        .rent-btn {
          background: #f5c518;
          color: #000;
          padding: 10px 18px;
          border-radius: 6px;
          font-weight: bold;
        }

        .hamburger {
          display: none;
          font-size: 26px;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .logo-img {
            height: 48px; /* Fit smaller navbar */
          }

          .logo-text {
            font-size: 18px;
          }

          .hamburger {
            display: block;
          }

          .nav-links {
            position: absolute;
            top: 64px;
            left: 0;
            width: 100%;
            background: #0f0f0f;
            flex-direction: column;
            align-items: flex-start;
            padding: 20px;
            gap: 18px;
            display: none;
          }

          .nav-links.open {
            display: flex;
          }
        }
      `}</style>

      <nav className="navbar">
        <div className="logo-container">
          <img src="/companylogo.jpeg" alt="Logo" className="logo-img" />
        </div>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
          <a href="/rent" className="rent-btn">Rent Now</a>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </nav>
    </>
  );
}

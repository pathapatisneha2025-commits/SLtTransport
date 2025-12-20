import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <style jsx="true">{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Arial, sans-serif;
        }

        .navbar {
          background: #0f0f0f;
          color: #fff;
          height: 64px;
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
          height: 100%;
          width: auto;
          object-fit: contain;
        }

        .logo-text {
          font-size: 22px;
          font-weight: bold;
          color: #f5c518;
        }

       .nav-links {
  position: fixed;        /* fixed instead of absolute */
  top: 0;                 /* start from top */
  left: 0;
  width: 100%;
  height: 100vh;          /* full viewport height */
  background: #0f0f0f;
  flex-direction: column;
  align-items: center;    /* center items */
  justify-content: center;/* center vertically */
  gap: 18px;
  overflow-y: auto;
  max-height: none;       /* remove max-height */
  transform: translateX(${mobileOpen ? '0' : '-100%'});
  transition: transform 0.3s ease;
  z-index: 2000;
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

        .mobile-menu-icon {
          display: none;
          font-size: 26px;
          cursor: pointer;
          color: #fff;
        }

        @media (max-width: 768px) {
          .logo-img {
            height: 48px;
          }

          .logo-text {
            font-size: 18px;
          }

          .mobile-menu-icon {
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
            overflow: hidden;
            max-height: 0;
            transition: max-height 0.4s ease;
          }

          .nav-links.open {
            max-height: 500px; /* adjust as needed */
          }

          .nav-links a {
            width: 100%;
            display: block;
            padding: 12px 0;
          }
        }
      `}</style>

      <nav className="navbar">
        <div className="logo-container">
          <Link to="/">
            <img src="/companylogo.jpeg" alt="Logo" className="logo-img" />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div
          className="mobile-menu-icon"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </div>

        <div className={`nav-links ${mobileOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link to="/services" onClick={() => setMobileOpen(false)}>Services</Link>
          <Link to="/blog" onClick={() => setMobileOpen(false)}>Blog</Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
          <Link
            to="/rent"
            className="rent-btn"
            onClick={() => setMobileOpen(false)}
          >
            Rent Now
          </Link>
        </div>
      </nav>
    </>
  );
}

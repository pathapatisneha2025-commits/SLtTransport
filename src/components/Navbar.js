import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to close menu on link click
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

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
  height: 100px;                 /* increased */
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
  height: 100%;
}

.logo-img {
  height: 100px;                /* fits inside navbar */
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
            height: 48px;
          }
@media (max-width: 768px) {
  .navbar {
    height: 72px;
  }

  .logo-img {
    height: 52px;
  }

  .hamburger {
    display: block;
  }

  .nav-links {
    position: absolute;
    top: 72px;
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
          <Link to="/" onClick={handleLinkClick}>Home</Link>
          <Link to="/services" onClick={handleLinkClick}>Services</Link>
          <Link to="/blog" onClick={handleLinkClick}>Blog</Link>
           <Link to="/oilandgas" onClick={handleLinkClick}>Oil&Gas</Link>

          <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
          <Link to="/rent" className="rent-btn" onClick={handleLinkClick}>Rent Now</Link>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </nav>
    </>
  );
}

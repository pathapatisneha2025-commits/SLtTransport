import React, { useEffect } from "react";

export default function CtaSection() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .cta-section {
        width: 100%;
        padding: 100px 6%;
        background: linear-gradient(
          90deg,
          #f3f9ff 0%,
          #ffffff 50%,
          #fff6e8 100%
        );
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
      }

      .cta-container {
        max-width: 900px;
      }

      .cta-title {
        font-size: 2.8rem;
        font-weight: 700;
        color: #0f172a;
        margin-bottom: 18px;
      }

      .cta-text {
        font-size: 1.15rem;
        color: #475569;
        line-height: 1.7;
        margin-bottom: 40px;
      }

      .cta-buttons {
        display: flex;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
      }

      .cta-button {
        background: #4fb3f6;
        color: #ffffff;
        border: none;
        padding: 16px 40px;
        font-size: 1.1rem;
        font-weight: 600;
        border-radius: 14px;
        cursor: pointer;
        box-shadow: 0 12px 30px rgba(79, 179, 246, 0.35);
        transition: all 0.3s ease;
      }

      .cta-button:hover {
        transform: translateY(-3px);
        box-shadow: 0 18px 40px rgba(79, 179, 246, 0.45);
      }

      .whatsapp-btn {
        background: #25d366;
        color: #ffffff;
        padding: 16px 36px;
        font-size: 1.1rem;
        font-weight: 600;
        border-radius: 14px;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 12px;
        box-shadow: 0 12px 30px rgba(37, 211, 102, 0.35);
        transition: all 0.3s ease;
      }

      .whatsapp-btn i {
        font-size: 1.4rem;
      }

      .whatsapp-btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 18px 40px rgba(37, 211, 102, 0.45);
      }

      @media (max-width: 768px) {
        .cta-title {
          font-size: 2.2rem;
        }

        .cta-text {
          font-size: 1.05rem;
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-title">
          Need a Reliable Transport or Equipment Partner?
        </h2>

        <p className="cta-text">
          Get fast, professional support for logistics, heavy machinery rentals,
          manpower supply, and full-service project solutions. We’re ready to assist you.
        </p>

        <div className="cta-buttons">
          <button className="cta-button">
            Request a Quote
          </button>

          <a
            href="https://wa.me/919999999999?text=Hello%20I%20need%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            <i className="fa-brands fa-whatsapp"></i>
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

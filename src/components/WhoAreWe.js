import React, { useEffect } from "react";

export default function WhoWeAre() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .who-wrapper {
        padding: 80px 6%;
        background: #f7f9fc;
      }

      .who-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 50px;
        max-width: 1200px;
        margin: auto;
      }

      /* LEFT CARD */
      .who-card {
        flex: 1;
        background: #fff;
        padding: 40px;
        border-radius: 16px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.08);
      }

      .who-card h2 {
        font-size: 2.2rem;
        margin-bottom: 20px;
        color: #0f172a;
      }

      .who-card p {
        color: #475569;
        line-height: 1.7;
        margin-bottom: 16px;
      }

      .who-btn {
        margin-top: 20px;
        padding: 12px 26px;
        border: none;
        background: #38bdf8;
        color: #fff;
        font-size: 1rem;
        border-radius: 8px;
        cursor: pointer;
      }

      .who-btn:hover {
        background: #0ea5e9;
      }

      /* RIGHT IMAGE */
      .who-image-box {
        flex: 1;
        position: relative;
        display: flex;
        justify-content: center;
      }

      .who-image-box img {
        width: 100%;
        max-width: 460px;
        border-radius: 20px;
        box-shadow: 0 15px 40px rgba(0,0,0,0.15);
      }

      .who-badge {
        position: absolute;
        bottom: 20px;
        left: 20px;
        background: #ffffff;
        padding: 12px 20px;
        border-radius: 12px;
        font-weight: 600;
        color: #0f172a;
        box-shadow: 0 8px 20px rgba(0,0,0,0.15);
      }

      /* RESPONSIVE */
      @media (max-width: 900px) {
        .who-container {
          flex-direction: column;
        }

        .who-card {
          text-align: center;
        }

        .who-badge {
          left: 50%;
          transform: translateX(-50%);
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <section className="who-wrapper">
      <div className="who-container">
        
        {/* LEFT CONTENT */}
        <div className="who-card">
          <h2>Who We Are</h2>
          <p>
            SLT (Swift Liger Transport) is a leading provider of logistics,
            transport, heavy equipment rentals, and industrial support services.
            With a commitment to reliability, safety, and world-class standards,
            we deliver powerful solutions that move industries forward.
          </p>
          <p>
            From JCB machinery and heavy vehicles to manpower supply and
            specialized logistics, SLT is built on excellence, precision, and
            trust. Our mission is simple — fast delivery, smarter movement, and
            real results for our clients.
          </p>

          <button className="who-btn">Learn More</button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="who-image-box">
          <img
          src="/companylogo.jpeg"
            alt="SLT Logo"
          />
          <div className="who-badge">10+ Years of Excellence</div>
        </div>

      </div>
    </section>
  );
}

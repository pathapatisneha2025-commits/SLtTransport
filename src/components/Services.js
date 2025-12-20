import React, { useEffect } from "react";
import { FaTruck, FaHardHat, FaUsersCog, FaShippingFast } from "react-icons/fa";

export default function Services() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .services-section {
        padding: 90px 6%;
        background: #ffffff;
        text-align: center;
      }

      .services-subtitle {
        font-size: 1.1rem;
        color: #64748b;
        margin-bottom: 60px;
      }

      .services-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 30px;
        max-width: 1300px;
        margin: auto;
      }

      .service-card {
        background: #ffffff;
        padding: 40px 30px;
        border-radius: 18px;
        box-shadow: 0 15px 40px rgba(0,0,0,0.08);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      .service-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 50px rgba(0,0,0,0.12);
      }

      .service-icon {
        font-size: 42px;
        color: #38bdf8;
        margin-bottom: 20px;
      }

      .service-card h4 {
        font-size: 1.25rem;
        font-weight: 600;
        color: #0f172a;
        margin-bottom: 14px;
      }

      .service-card.active h4 {
        color: #38bdf8;
      }

      .service-card p {
        font-size: 1rem;
        color: #64748b;
        line-height: 1.6;
      }

      /* RESPONSIVE */
      @media (max-width: 1100px) {
        .services-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      @media (max-width: 600px) {
        .services-grid {
          grid-template-columns: 1fr;
        }

        .services-section {
          padding: 70px 5%;
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const services = [
    {
      title: "Transport Services",
      desc:
        "Reliable and efficient transport solutions for all types of industrial and commercial needs.",
      icon: <FaTruck />,
    },
    {
      title: "Heavy Equipment Rental",
      desc:
        "Rent top-quality JCBs, excavators, loaders, cranes, and other heavy machinery at affordable rates.",
      icon: <FaHardHat />,
      active: true,
    },
    {
      title: "Manpower Supply",
      desc:
        "Skilled and semi-skilled workforce for construction, logistics, and industrial projects.",
      icon: <FaUsersCog />,
    },
    {
      title: "Logistics Solutions",
      desc:
        "Smart logistics management with smooth operations, safe delivery, and real-time coordination.",
      icon: <FaShippingFast />,
    },
  ];

  return (
    <section className="services-section">
      <p className="services-subtitle">
        Professional and reliable solutions to take your business forward.
      </p>

      <div className="services-grid">
        {services.map((item, index) => (
          <div
            key={index}
            className={`service-card ${item.active ? "active" : ""}`}
          >
            <div className="service-icon">{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

import React, { useEffect } from "react";
import { FaShieldAlt, FaClock, FaTools, FaUserTie } from "react-icons/fa";

export default function WhyChooseUs() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .why-section {
        padding: 90px 6%;
        background: #ffffff;
        text-align: center;
      }

      .why-title {
        font-size: 2.5rem;
        font-weight: 700;
        color: #0f172a;
        margin-bottom: 10px;
      }

      .why-subtitle {
        font-size: 1.1rem;
        color: #64748b;
        max-width: 700px;
        margin: 0 auto 60px;
      }

      .why-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 30px;
        max-width: 1300px;
        margin: auto;
      }

      .why-card {
        background: #ffffff;
        border-radius: 18px;
        padding: 45px 30px;
        box-shadow: 0 18px 45px rgba(0,0,0,0.08);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      .why-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 25px 60px rgba(0,0,0,0.12);
      }

      .why-icon {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: #e0f2fe;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 25px;
        font-size: 26px;
        color: #38bdf8;
      }

      .why-card h4 {
        font-size: 1.3rem;
        font-weight: 600;
        margin-bottom: 15px;
        color: #0f172a;
      }

      .why-card.active h4 {
        color: #38bdf8;
      }

      .why-card p {
        font-size: 1rem;
        color: #64748b;
        line-height: 1.6;
      }

      /* Responsive */
      @media (max-width: 1100px) {
        .why-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      @media (max-width: 600px) {
        .why-grid {
          grid-template-columns: 1fr;
        }

        .why-title {
          font-size: 2rem;
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const data = [
    {
      title: "Trusted & Reliable Service",
      desc:
        "We deliver safe, consistent, and transparent service for every project, big or small.",
      icon: <FaShieldAlt />,
    },
    {
      title: "On-Time Delivery",
      desc:
        "Our experienced logistics and transport team ensures fast and timely operations.",
      icon: <FaClock />,
    },
    {
      title: "Modern Machinery",
      desc:
        "From JCBs to cranes, we provide high-quality, well-maintained heavy equipment.",
      icon: <FaTools />,
      active: true,
    },
    {
      title: "Professional Team",
      desc:
        "Our skilled workforce ensures precision, safety, and satisfaction every time.",
      icon: <FaUserTie />,
    },
  ];

  return (
    <section className="why-section">
      <h2 className="why-title">Why Choose Us</h2>
      <p className="why-subtitle">
        Delivering excellence through commitment, quality, and reliability.
      </p>

      <div className="why-grid">
        {data.map((item, index) => (
          <div
            key={index}
            className={`why-card ${item.active ? "active" : ""}`}
          >
            <div className="why-icon">{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

import React, { useEffect } from "react";

export default function EquipmentCategories() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .equipment-section {
        padding: 90px 6%;
        background: linear-gradient(180deg, #f8fafc, #eef2f7);
        text-align: center;
      }

      .equipment-section h2 {
        font-size: 2.6rem;
        font-weight: 800;
        color: #0f172a;
      }

      .equipment-section p {
        margin-top: 12px;
        color: #64748b;
        font-size: 1.1rem;
      }

      /* ✅ Perfect layout for 2 cards */
      .equipment-grid {
        margin-top: 60px;
        display: grid;
        grid-template-columns: repeat(2, minmax(280px, 420px));
        justify-content: center;
        gap: 40px;
      }

      /* 🔥 Premium card */
      .equipment-card {
        background: #ffffff;
        border-radius: 22px;
        padding: 30px 25px 35px;
        box-shadow: 0 15px 40px rgba(0,0,0,0.08);
        transition: all 0.35s ease;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        border: 2px solid transparent;
      }

      /* ✨ Glow effect */
      .equipment-card::before {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(
          120deg,
          transparent,
          rgba(247, 183, 49, 0.25),
          transparent
        );
        opacity: 0;
        transition: opacity 0.35s ease;
      }

      .equipment-card:hover::before {
        opacity: 1;
      }

      .equipment-card:hover {
        transform: translateY(-12px) scale(1.03);
        box-shadow: 0 30px 70px rgba(0,0,0,0.15);
        border-color: #f7b731;
      }

      .equipment-card img {
        width: 100%;
        height: 240px;
        object-fit: contain;
        margin-bottom: 22px;
        transition: transform 0.35s ease;
      }

      .equipment-card:hover img {
        transform: scale(1.08);
      }

      .equipment-card h4 {
        font-size: 1.35rem;
        font-weight: 700;
        color: #0f172a;
        margin-top: 10px;
      }

      /* ⭐ Active state */
      .equipment-card.active {
        border-color: #f7b731;
      }

      .equipment-card.active h4 {
        color: #f7b731;
      }

      /* 📱 Mobile responsive */
      @media (max-width: 900px) {
        .equipment-grid {
          grid-template-columns: 1fr;
        }

        .equipment-section h2 {
          font-size: 2.1rem;
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const categories = [
    {
      title: "Cranes",
      img: "/cranes.jpeg",
    },
    {
      title: "Earthmoving Equipment",
      img: "/earthmoving.jpg",
      active: true,
    },
  ];

  return (
    <section className="equipment-section">
      <h2>Equipment Categories</h2>
      <p>Explore our wide range of industrial and construction equipment.</p>

      <div className="equipment-grid">
        {categories.map((item, index) => (
          <div
            key={index}
            className={`equipment-card ${item.active ? "active" : ""}`}
          >
            <img src={item.img} alt={item.title} />
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

import React, { useEffect } from "react";

export default function EquipmentCategories() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .equipment-section {
        padding: 90px 6%;
        background: #f8fafc;
        text-align: center;
      }

      .equipment-section h2 {
        font-size: 2.6rem;
        font-weight: 700;
        color: #0f172a;
      }

      .equipment-section p {
        margin-top: 10px;
        color: #64748b;
        font-size: 1.1rem;
      }

      .equipment-grid {
        margin-top: 60px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 30px;
        max-width: 1300px;
        margin: 0 auto;
      }

      .equipment-card {
        background: #ffffff;
        border-radius: 18px;
        padding: 30px 20px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.05);
        transition: all 0.3s ease;
        cursor: pointer;
        border: 2px solid transparent;
      }

      .equipment-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 50px rgba(0,0,0,0.1);
        border-color: #f7b731;
      }

      .equipment-card img {
        width: 100%;
        height: 200px;
        object-fit: contain;
        margin-bottom: 20px;
      }

      .equipment-card h4 {
        font-size: 1.2rem;
        font-weight: 600;
        color: #0f172a;
      }

      /* Updated active state to match SLT branding */
      .equipment-card.active h4 {
        color: #f7b731;
      }
      
      .equipment-card.active {
        border-color: #f7b731;
      }

      @media (max-width: 1100px) {
        .equipment-grid { grid-template-columns: repeat(2, 1fr); }
      }

      @media (max-width: 600px) {
        .equipment-grid { grid-template-columns: 1fr; }
        .equipment-section h2 { font-size: 2rem; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const categories = [
    {
      title: "Cranes",
      img: "https://images.unsplash.com/photo-1545465005-95193f7734f1?w=500&auto=format",
    },
    {
      title: "Earthmoving Equipment",
      img: "https://images.unsplash.com/photo-1579407141842-12e03223018e?w=500&auto=format",
      active: true,
    },
    {
      title: "Material Handling",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&auto=format",
    },
    {
      title: "Portable Cabins",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format",
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
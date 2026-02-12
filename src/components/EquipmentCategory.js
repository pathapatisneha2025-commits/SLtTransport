import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function EquipmentCategories() {
  const navigate = useNavigate();

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

      .equipment-grid {
        margin-top: 60px;
        display: grid;
        grid-template-columns: repeat(2, minmax(280px, 420px));
        justify-content: center;
        gap: 40px;
      }

      .equipment-card {
        background: #ffffff;
        border-radius: 22px;
        padding: 25px 15px 20px;
        box-shadow: 0 15px 40px rgba(0,0,0,0.08);
        transition: all 0.35s ease;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        border: 2px solid transparent;
        min-height: 250px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
      }
.equipment-card img {
  width: 100%;
  height: auto;        /* let height adjust automatically */
  max-height: 250px;   /* optional: limits extremely tall images */
  object-fit: contain;  /* prevents cropping */
  border-radius: 18px;
}


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

      .equipment-card h4 {
        font-size: 1.35rem;
        font-weight: 700;
        color: #0f172a;
        margin-top: 12px;
        text-align: center;
      }

      .equipment-card p {
        margin-top: 6px;
        color: #64748b;
        font-size: 1rem;
        text-align: center;
      }

      .equipment-card.active {
        border-color: #f7b731;
      }

      .equipment-card.active h4 {
        color: #f7b731;
      }

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
    title: "Earth moving Equipment",
    slug: "moving-equipment",
    image: "/earthmovingequipment.png",
    description: `

    `,
    gallery: [
  { src: "/Forklift.png", name: "FORKLIFT" },
  { src: "/Backhoeloader.png", name: "BACKHOE LOADER" },
  { src: "/miniexcavator.png", name: "MINI EXCAVATOR" },
    { src: "/skid.png", name: "SKID STEER LOADER" },

      { src: "/TELEHANDLER.png", name: "TELEHANDLER" },

        { src: "/wheeler.png", name: "WHEEL EXCAVATOR" },

          { src: "/shoel.png", name: "SHOVEL 966/950" },

            { src: "/roller.png", name: "ROLLER COMPACTOR" },

              { src: "/singledrum.png", name: "SINGLE DRUM ROLLER" },

                { src: "/lowbed.png", name: "LOW BED TRAILERS" },

                  { src: "/flatbed.png", name: "FLAT BED TRAILER" },

                    { src: "/cranes.png", name: "CRANES" },

                      

  
    ],
  },

   {
    title: "Earth moving Transport",
    slug: "moving-vehicles",
    image: "/recovery.jpeg",
    description: ``,
    gallery: [
  // { src: "/seaterbus.png", name: "66 SEATER A/C BUS" },
  { src: "/nonac.jpeg", name: "66 SEATER NON-A/C BUS" },
  { src: "/54seater.png", name: "54,66 SEATER A/C BUS" },  
  { src: "/34seater.png", name:"34 SEATER BUS COSTER" },
  { src: "/14seater.png", name: "14 Seater Mini Bus" },
{ src: "/haice.png", name: "14 seater High Roof Bus" },
{ src: "/9seater.png", name: "9 Seater Bus" },
{ src: "/picups1ton.png", name: "PICKUPS 1, 3 TON " },
{ src: "/pickups20.jpeg", name: "PICKUPS 7,10, 20 TON" },

{ src: "/haiboomtruck.jpeg", name: "Hiab Boom Truck 7,10,15 Ton." },
{ src: "/dumptruck.jpeg", name: "Dump Truck 35,45 Cbm" },

 { src: "/recovery.jpeg", name: "RECOVERY 7, 10, 15 TON" },
{ src: "/watertanker.jpeg", name: "Water Tankers 1000,5000,10000 gallons" },
// { src: "/wantertankers.jpeg", name: "Water Tankers 5000 gallons" },
// { src: "/wantertankers.jpeg", name: "Water Tankers 10000 gallons " },

{ src: "/seweagetankers.jpeg", name: "Sewage Tankers 3000,5000,10000 gallons" },
// { src: "/sewagetanker.jpeg", name: "Sewage Tankers 5000 gallons" },

// { src: "/sewagetanker.jpeg", name: "Sewage Tankers 10000 gallons" },






    ],
  },
];


  return (
    <section className="equipment-section">
      <h2>Equipment Categories</h2>
      <p>Explore our wide range of industrial and transportation services.</p>

      <div className="equipment-grid">
        {categories.map((item, index) => (
          <div
            key={index}
            className={`equipment-card ${item.active ? "active" : ""}`}
            onClick={() =>
              navigate(`/category/${item.slug}`, { state: { item } })
            }
          >
            {/* Display image */}
{item.image && <img src={item.image} alt={item.title} style={{ width: "100%", height: "auto", objectFit: "contain", borderRadius: "18px" }} />}
            <h4>{item.title}</h4>
            <p>Click to explore</p>
          </div>
        ))}
      </div>
    </section>
  );
}

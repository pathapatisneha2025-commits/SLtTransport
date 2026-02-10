import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function CategoryDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const { item } = location.state || {};
  const galleryRefs = useRef([]);
  const [loadedImages, setLoadedImages] = useState({});

  const getImageName = (img) => {
    if (typeof img === "string") {
      const name = img.split("/").pop().split(".")[0];
      return name.replace(/-/g, ' ').replace(/_/g, ' ').toUpperCase();
    } else if (typeof img === "object" && img.name) {
      return img.name.toUpperCase();
    }
    return "EQUIPMENT";
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("highlight");
          }
        });
      },
      { threshold: 0.2 }
    );
    galleryRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => galleryRefs.current.forEach((el) => { if (el) observer.unobserve(el); });
  }, [item]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const style = document.createElement("style");
    style.innerHTML = `
      .category-section {
        padding: 60px 8%;
        background: #ffffff; 
        text-align: center;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }

      .category-section h2 {
        font-size: 2.2rem;
        font-weight: 800;
        color: #1a1a1a;
        margin-bottom: 40px;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      .gallery-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 40px;
        margin-top: 20px;
      }

      .gallery-item-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: transform 0.3s ease;
      }

      /* Title BELOW the image */
      .item-title {
        font-size: 1.2rem;
        font-weight: 700;
        color: #003366; /* Dark Navy */
        margin-top: 12px; /* space above the title */
        text-align: center;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .gallery-card {
        width: 100%;
        aspect-ratio: 1 / 1;
        background: #f8f9fa;
        border-radius: 8px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 4px solid transparent;
        transition: all 0.3s ease;
      }

      .gallery-card img {
        width: 85%;
        height: 85%;
        object-fit: contain;
        opacity: 0;
        transition: opacity 0.5s ease;
      }

      .gallery-card img.loaded {
        opacity: 1;
      }

      /* Hover & Highlight Effect */
      .gallery-item-container.highlight .gallery-card {
        border-bottom: 4px solid #f7b731; /* Yellow line */
        box-shadow: 0 10px 25px rgba(0,0,0,0.05);
      }

      .back-button {
        margin-top: 60px;
        display: inline-block;
        padding: 12px 30px;
        background: #000;
        color: #fff;
        text-transform: uppercase;
        font-size: 0.9rem;
        font-weight: 600;
        cursor: pointer;
        border-radius: 4px;
      }

      @media (max-width: 1024px) {
        .category-section {
          padding: 50px 6%;
        }
        .gallery-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }
        .item-title {
          font-size: 1.1rem;
        }
      }

      @media (max-width: 600px) {
        .category-section {
          padding: 40px 5%;
        }
        .category-section h2 {
          font-size: 1.7rem;
          margin-bottom: 30px;
        }
        .gallery-grid {
          grid-template-columns: 1fr;
          gap: 28px;
        }
        .item-title {
          font-size: 1.05rem;
          margin-top: 10px;
        }
        .gallery-card {
          aspect-ratio: 4 / 3;
        }
        .gallery-card img {
          width: 90%;
          height: 90%;
        }
        .back-button {
          width: 100%;
          max-width: 320px;
          text-align: center;
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  if (!item) return <div style={{padding: "100px", textAlign: "center"}}>Loading...</div>;

  return (
    <section className="category-section">
      <h2>{item.title}</h2>

      <div className="gallery-grid">
        {item.gallery.map((img, index) => (
          <div 
            key={index} 
            className="gallery-item-container"
            ref={(el) => (galleryRefs.current[index] = el)}
          >
            {/* Image first */}
            <div className="gallery-card">
              <img
                src={typeof img === "string" ? img : img.src}
                alt={item.title}
                className={loadedImages[index] ? "loaded" : ""}
                onLoad={() => setLoadedImages((prev) => ({ ...prev, [index]: true }))}
              />
            </div>
            {/* Title BELOW the image */}
            <div className="item-title">{getImageName(img)}</div>
          </div>
        ))}
      </div>

      <div className="back-button" onClick={() => navigate(-1)}>
        Back to Fleet
      </div>
    </section>
  );
}

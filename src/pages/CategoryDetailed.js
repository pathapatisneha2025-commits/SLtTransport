import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function CategoryDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const { item } = location.state || {};
  const galleryRefs = useRef([]);

  // Intersection Observer for gallery highlight
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("highlight");
          } else {
            entry.target.classList.remove("highlight");
          }
        });
      },
      { threshold: 0.5 }
    );

    galleryRefs.current.forEach((img) => {
      if (img) observer.observe(img);
    });

    return () => {
      galleryRefs.current.forEach((img) => {
        if (img) observer.unobserve(img);
      });
    };
  }, [item]);

  // Inject styles
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .category-section {
        padding: 60px 6%;
        background: linear-gradient(180deg, #f8fafc, #eef2f7);
        text-align: center;
      }

      .category-section h2 {
        font-size: 2.6rem;
        font-weight: 800;
        color: #0f172a;
      }

      .category-description {
        text-align: left;
        max-width: 900px;
        margin: 20px auto 50px;
        color: #334155;
        font-size: 1.1rem;
        line-height: 1.8;
      }

      .category-description h3 {
        font-size: 1.4rem;
        font-weight: 700;
        margin-top: 20px;
        color: #0f172a;
      }

      /* Side by side bullet columns */
      .bullet-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px 40px;
        margin: 20px 0 40px;
      }

      .bullet-grid ul {
        list-style: disc inside;
        padding-left: 0;
        margin: 0;
      }

      .bullet-grid li {
        margin-bottom: 10px;
      }

      /* Gallery styling */
      // ... rest of your imports and code remain the same

      .gallery-column {
        display: flex;
        flex-direction: column;
        gap: 30px;
        margin-top: 50px;
      }

      .gallery-card {
        background: #ffffff;
        border-radius: 20px;
        overflow: hidden; /* ensures image stays within card */
        box-shadow: 0 15px 40px rgba(0,0,0,0.08);
        transition: all 0.5s ease;
        opacity: 0.7;
        border: 4px solid transparent;
      }

      .gallery-card.highlight {
        transform: scale(1.05);
        box-shadow: 0 30px 70px rgba(0,0,0,0.15);
        opacity: 1;
        border-color: #f7b731; /* yellow highlight */
      }

      .gallery-card img {
        width: 100%;
        height: 100%; /* fill the card container */
        object-fit: cover; /* fills container without stretching */
        border-radius: 20px;
        transition: transform 0.5s ease;
      }

      /* Optional: make sure the card has a fixed aspect ratio */
      .gallery-card {
        aspect-ratio: 16/9; /* maintains 16:9 ratio */
      }

      @media (max-width: 1024px) {
        .gallery-card { aspect-ratio: 16/9; }
      }

      @media (max-width: 768px) {
        .gallery-card { aspect-ratio: 4/3; }
      }

      @media (max-width: 480px) {
        .gallery-card { aspect-ratio: 1/1; } /* square cards on small screens */
      }

      .back-button {
        display: inline-block;
        margin-top: 40px;
        padding: 10px 20px;
        background: #f7b731;
        color: #fff;
        border-radius: 12px;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.3s ease;
      }

      .back-button:hover {
        background: #f5a623;
      }

      /* Responsive */
      @media (max-width: 1024px) {
        .gallery-card img { max-height: 400px; }
      }
      @media (max-width: 768px) {
        .category-section h2 { font-size: 2.2rem; }
        .gallery-card img { max-height: 300px; }
      }
      @media (max-width: 480px) {
        .gallery-card img { max-height: 250px; }
        .bullet-grid { grid-template-columns: 1fr; gap: 15px 0; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  if (!item) {
    return (
      <p style={{ textAlign: "center", padding: "50px" }}>
        Category not found!
      </p>
    );
  }

  // Split description into paragraphs and bullets
  const descriptionLines = item.description.split("\n");
  const paragraphs = [];
  const bullets = [];
  descriptionLines.forEach((line) => {
    if (line.startsWith("- ")) {
      bullets.push(line.replace("- ", ""));
    } else {
      paragraphs.push(line);
    }
  });

  // Split bullets into two groups for side-by-side display
  const midIndex = Math.ceil(bullets.length / 2);
  const bulletsLeft = bullets.slice(0, midIndex);
  const bulletsRight = bullets.slice(midIndex);

  return (
    <section className="category-section">
      <h2>{item.title}</h2>

      <div className="category-description">
        {paragraphs.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}

        {bullets.length > 0 && (
          <div className="bullet-grid">
            <ul>
              {bulletsLeft.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
            <ul>
              {bulletsRight.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="gallery-column">
        {item.gallery.map((img, index) => (
          <div
            className="gallery-card"
            key={index}
            ref={(el) => (galleryRefs.current[index] = el)}
          >
            <img src={img} alt={`${item.title} ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="back-button" onClick={() => navigate(-1)}>
        ← Back to Categories
      </div>
    </section>
  );
}

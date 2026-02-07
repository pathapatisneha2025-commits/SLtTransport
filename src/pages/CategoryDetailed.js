import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function CategoryDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const { item } = location.state || {};
  const galleryRefs = useRef([]);
  const [loadedImages, setLoadedImages] = useState({}); // track loaded images

  // Helper: get readable name from image
  const getImageName = (img) => {
    if (typeof img === "string") {
      const name = img.split("/").pop().split(".")[0];
      return name.charAt(0).toUpperCase() + name.slice(1);
    } else if (typeof img === "object" && img.name) {
      return img.name;
    } else {
      return "Image";
    }
  };

  // Intersection Observer
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
      { threshold: 0.6 }
    );

    galleryRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      galleryRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, [item]);

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Styles
  useEffect(() => {
    const style = document.createElement("style");
   // Inside your useEffect for styles
style.innerHTML = `
.category-section {
  padding: 70px 6%;
  background: linear-gradient(180deg, #f8fafc, #eef2f7);
  text-align: center;
}

.category-section h2 {
  font-size: 2.6rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 10px;
}

.category-description {
  text-align: left;
  max-width: 900px;
  margin: 20px auto 40px;
  color: #334155;
  font-size: 1.1rem;
  line-height: 1.8;
}

.bullet-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px 40px;
  margin-top: 25px;
}

.bullet-grid ul { list-style: disc inside; padding: 0; margin: 0; }
.bullet-grid li { margin-bottom: 10px; }

.gallery-column {
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 50px;
}

.gallery-card {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3; /* stable height BEFORE image loads */
  background: #e5e7eb; /* skeleton placeholder */
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0,0,0,0.08);
  border: 3px solid transparent;
  opacity: 0.95;
  transition: transform 0.4s ease, box-shadow 0.4s ease, opacity 0.4s ease;
}

.gallery-card img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* desktop */
  display: block;
  opacity: 0;
  transition: opacity 0.4s ease;
}


.gallery-card img.loaded {
  opacity: 1;
}

.gallery-card p {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0,0,0,0.6);
  color: #fff;
  padding: 8px 14px;
  border-radius: 10px;
  font-size: 1.3rem; 
  font-weight: 600;
  text-align: center;
  margin: 0;
  max-width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.gallery-card.highlight {
  transform: scale(1.03);
  box-shadow: 0 30px 70px rgba(0,0,0,0.15);
  opacity: 1;
  border-color: #f7b731;
}

.back-button {
  margin-top: 45px;
  display: inline-block;
  padding: 12px 26px;
  background: #f7b731;
  color: #fff;
  border-radius: 14px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s ease;
}

.back-button:hover { background: #f5a623; }

/* Responsive */
@media (max-width: 1024px) {
  .category-section h2 { font-size: 2.3rem; }
}

@media (max-width: 768px) {
  .category-section { padding: 60px 5%; }
  .category-section h2 { font-size: 2rem; }
  .bullet-grid { grid-template-columns: 1fr; }
}

@media (max-width: 480px) {
  .gallery-card {
    aspect-ratio: unset;     /* remove fixed height */
    padding: 0;              /* no padding */
    overflow: hidden;
  }

  .gallery-card img {
    position: relative;      /* VERY IMPORTANT */
    width: 100%;
    height: auto;
    object-fit: contain;     /* full image, no crop */
  }
}



`;
;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  if (!item) return <p style={{ textAlign: "center", padding: "50px" }}>Category not found!</p>;

  const descriptionLines = item.description.split("\n");
  const paragraphs = [];
  const bullets = [];

  descriptionLines.forEach((line) => {
    if (line.startsWith("- ")) bullets.push(line.replace("- ", ""));
    else if (line.trim()) paragraphs.push(line);
  });

  const midIndex = Math.ceil(bullets.length / 2);
  const bulletsLeft = bullets.slice(0, midIndex);
  const bulletsRight = bullets.slice(midIndex);

  return (
    <section className="category-section">
      <h2>{item.title}</h2>

      <div className="category-description">
        {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        {bullets.length > 0 && (
          <div className="bullet-grid">
            <ul>{bulletsLeft.map((b, i) => <li key={i}>{b}</li>)}</ul>
            <ul>{bulletsRight.map((b, i) => <li key={i}>{b}</li>)}</ul>
          </div>
        )}
      </div>

      <div className="gallery-column">
        {item.gallery.map((img, index) => (
          <div
            key={index}
            className="gallery-card"
            ref={(el) => (galleryRefs.current[index] = el)}
          >
            <img
              src={typeof img === "string" ? img : img.src}
              alt={`${item.title} ${index + 1}`}
              loading="lazy"
              className={loadedImages[index] ? "loaded" : ""}
              onLoad={() => setLoadedImages((prev) => ({ ...prev, [index]: true }))}
            />
            <p>{getImageName(img)}</p>
          </div>
        ))}
      </div>

      <div className="back-button" onClick={() => navigate(-1)}>
        ← Back to Categories
      </div>
    </section>
  );
}

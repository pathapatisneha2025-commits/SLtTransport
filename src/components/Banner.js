import React, { useEffect, useState } from "react";

const API = "https://slttranportdatabse.onrender.com/api/banners/all";

const Banner = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        const activeBanners = data.filter((b) => b.is_active);
        setBanners(activeBanners.slice(0, 5));
      })
      .catch((err) => console.error("Banner fetch error:", err));
  }, []);

  return (
    <>
      <style>
        {`
          .banner {
  position: relative;
  width: 100%;
  min-height: 100vh; /* ✅ allow content to grow */
  overflow: hidden;
  background: #000;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.banner-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  opacity: 0.6;
}

.banner-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 1;
}

.banner-content {
  position: relative;
  z-index: 2;
  min-height: 100vh;
  width: 100%;
  padding: 120px 5% 120px; /* ✅ bottom padding added */
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: space-between; /* ✅ prevents overlap */
  align-items: center;
}

.banner-text {
  max-width: 880px;
}

.banner-text h1 {
  font-size: 3.2rem;
  font-weight: 800;
  color: #fff;
  text-transform: uppercase;
  line-height: 1.15;
  margin-bottom: 18px;
}

.banner-text p {
  color: #f1f1f1;
  font-size: 1.3rem;
  max-width: 650px;
  margin: 0 auto;
  opacity: 0.9;
}

/* ✅ Gallery fixed */
.banner-gallery {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 15px;
  margin-top: 40px;
  padding-bottom: 20px; /* ✅ safety space */
  perspective: 1000px;
  flex-wrap: wrap;
}

.gallery-card {
  width: 180px;
  height: 260px;
  object-fit: cover;
  border-radius: 20px;
  border: 4px solid #fff;
  background: #222;
  transition: transform 0.3s ease, z-index 0.3s, border-color 0.3s;
}

/* 🔧 reduced translateY to avoid overflow */
.card-1 { transform: rotate(-10deg) translateY(20px); }
.card-2 { transform: rotate(-5deg) translateY(10px); }
.card-3 { transform: rotate(0deg); }
.card-4 { transform: rotate(5deg) translateY(10px); }
.card-5 { transform: rotate(10deg) translateY(20px); }

.gallery-card:hover {
  transform: scale(1.1) translateY(-15px) rotate(0deg);
  z-index: 10;
  border-color: #f7b731;
}

/* 📱 Responsive */
@media (max-width: 992px) {
  .banner-content {
    padding: 100px 5% 100px;
  }

  .banner-text h1 {
    font-size: 2.2rem;
  }

  .banner-text p {
    font-size: 1.05rem;
  }

  .gallery-card {
    width: 120px;
    height: 180px;
  }

  .banner-gallery {
    gap: 8px;
  }
}

@media (max-width: 576px) {
  .banner-content {
    padding: 90px 5% 80px;
  }

  .banner-text h1 {
    font-size: 1.6rem;
    line-height: 1.3;
  }

  .banner-text p {
    font-size: 0.95rem;
  }
}

        `}
      </style>

      <section className="banner">
        <video className="banner-video" autoPlay loop muted playsInline>
          <source src="/banner.mp4" type="video/mp4" />
        </video>

        <div className="banner-overlay" />

        <div className="banner-content">
          <div className="banner-text">
            <h1>
              Swift Liger Transport <br />
              & General Contracting Solutions
            </h1>
            <p>
              Fast, reliable, and powerful transport solutions for every
              industry.
            </p>
          </div>

          <div className="banner-gallery">
            {banners.map((banner, index) => (
              <img
                key={banner.id}
                src={banner.image_url}
                alt={`Banner ${index + 1}`}
                className={`gallery-card card-${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;

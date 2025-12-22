import React, { useEffect, useState } from "react";

const API = "https://slttranportdatabse.onrender.com/api/banners/all";

const Banner = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        const activeBanners = data.filter((b) => b.is_active);
        setBanners(activeBanners.slice(0, 5)); // max 5 images
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
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            background: #000;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }

          .banner-video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: 0;
            opacity: 0.6;
          }

          .banner-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.4);
            z-index: 1;
          }

          .banner-content {
            position: relative;
            z-index: 2;
            text-align: center;
            width: 100%;
            padding: 0 5%;
          }

          .banner-text {
            max-width: 900px;
            margin: 0 auto;
          }

          .banner-text h1 {
            font-size: 3rem;
            font-weight: 800;
            color: #fff;
            text-transform: uppercase;
            line-height: 1.2;
            margin-bottom: 20px;
          }

          .banner-text p {
            color: #fff;
            font-size: 1.25rem;
            margin-bottom: 40px;
            opacity: 0.9;
          }

          .banner-gallery {
            display: flex;
            justify-content: center;
            align-items: flex-end;
            gap: 15px;
            margin-top: 50px;
            perspective: 1000px;
            flex-wrap: wrap;
          }

          .gallery-card {
            width: 180px;
            height: 260px;
            object-fit: cover;
            border-radius: 20px;
            border: 4px solid #fff;
            transition: transform 0.3s ease, z-index 0.3s, border-color 0.3s;
            background: #222;
          }

          .card-1 { transform: rotate(-10deg) translateY(30px); }
          .card-2 { transform: rotate(-5deg) translateY(10px); }
          .card-3 { transform: rotate(0deg); }
          .card-4 { transform: rotate(5deg) translateY(10px); }
          .card-5 { transform: rotate(10deg) translateY(30px); }

          .gallery-card:hover {
            transform: scale(1.1) translateY(-20px) rotate(0deg);
            z-index: 10;
            border-color: #f7b731;
          }

          @media (max-width: 992px) {
            .banner-text h1 { font-size: 2rem; }
            .banner-text p { font-size: 1rem; }
            .gallery-card { width: 120px; height: 180px; }
            .banner-gallery { gap: 8px; }
          }

          @media (max-width: 576px) {
            .banner-text h1 { font-size: 1.5rem; }
            .banner-text p { font-size: 0.9rem; }
          }
        `}
      </style>

      <section className="banner">
        <video className="banner-video" autoPlay loop muted playsInline>
          <source src="/banner.mp4" type="video/mp4" />
        </video>

        <div className="banner-overlay"></div>

        <div className="banner-content">
          <div className="banner-text">
            <h1>Swift Liger Transport & General Contracting Solutions</h1>
            <p>Fast, reliable, and powerful transport solutions for every industry.</p>
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

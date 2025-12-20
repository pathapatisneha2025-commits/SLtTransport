import React from "react";

const Banner = () => {
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

          .banner-text h1 {
            font-size: 3.5rem;
            font-weight: 800;
            color: #fff;
            text-transform: uppercase;
            margin-bottom: 10px;
          }

          .banner-text p {
            color: #fff;
            font-size: 1.2rem;
            margin-bottom: 40px;
            opacity: 0.9;
          }

          /* Fan-style Banner Gallery */
          .banner-gallery {
            display: flex;
            justify-content: center;
            align-items: flex-end;
            gap: 15px;
            margin-top: 50px;
            perspective: 1000px;
          }

          .gallery-card {
            width: 180px;
            height: 260px;
            object-fit: cover;
            border-radius: 20px;
            border: 4px solid #fff;
            transition: transform 0.3s ease, z-index 0.3s;
            background: #222;
          }

          /* Individual Rotation for the "Fan" effect */
          .card-1 { transform: rotate(-10deg) translateY(30px); }
          .card-2 { transform: rotate(-5deg) translateY(10px); }
          .card-3 { transform: rotate(0deg) translateY(0px); }
          .card-4 { transform: rotate(5deg) translateY(10px); }
          .card-5 { transform: rotate(10deg) translateY(30px); }

          .gallery-card:hover {
            transform: scale(1.1) translateY(-20px) rotate(0deg);
            z-index: 10;
            border-color: #f7b731;
          }

          @media (max-width: 992px) {
            .banner-text h1 { font-size: 2.2rem; }
            .gallery-card { width: 120px; height: 180px; }
            .banner-gallery { gap: 8px; flex-wrap: wrap; }
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
            <h1>Swift Logistics for Modern Businesses</h1>
            <p>Fast, reliable and powerful transport solutions for every industry</p>
          </div>

          <div className="banner-gallery">
            <img src="/images/truck1.jpg" className="gallery-card card-1" alt="Truck" />
            <img src="/images/jcb1.jpg" className="gallery-card card-2" alt="JCB" />
            <img src="/images/jcb2.jpg" className="gallery-card card-3" alt="Loader" />
            <img src="/images/jcb3.jpg" className="gallery-card card-4" alt="Excavator" />
            <img src="/images/truck2.jpg" className="gallery-card card-5" alt="Truck" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
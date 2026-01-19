import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API = "https://slttranportdatabse.onrender.com/api/services/all";

const ServicesPage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Service fetch error:", err));
  }, []);

  return (
    <>
      <style>
        {`
          .services-page {
            padding: 80px 10%;
            font-family: "Segoe UI", Roboto, sans-serif;
            background: #f9fbff;
          }

          .services-header {
            text-align: center;
            margin-bottom: 80px;
          }

          .services-header h1 {
            font-size: 3rem;
            color: #002147;
            margin-bottom: 15px;
            position: relative;
            display: inline-block;
          }

          .services-header h1::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
            height: 4px;
            background: #f7b731;
          }

          .services-header p {
            font-size: 1.1rem;
            color: #555;
            max-width: 600px;
            margin: 20px auto 0;
          }

          .service-block {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 80px;
            margin-bottom: 120px;
          }

          .service-block.reverse {
            flex-direction: row-reverse;
          }

          .service-image {
            flex: 1;
          }

          .service-image img {
            width: 100%;
            height: 450px;
            object-fit: cover;
            border-radius: 15px;
            box-shadow: 20px 20px 0px rgba(0, 33, 71, 0.05);
            border: 1px solid #eee;
          }

          .service-content {
            flex: 1;
          }

          .service-content h2 {
            font-size: 2.4rem;
            color: #002147;
            margin-bottom: 20px;
          }

          .service-content p {
            font-size: 1.05rem;
            color: #444;
            line-height: 1.8;
            margin-bottom: 25px;
          }

          .service-points {
            list-style: none;
            padding: 0;
            margin-bottom: 35px;
          }

          .service-points li {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            font-size: 1rem;
            color: #333;
          }

          .check-icon {
            color: #f7b731;
            margin-right: 12px;
            font-size: 1.2rem;
          }

          .quote-btn {
            background: #f7b731;
            color: #002147;
            padding: 16px 35px;
            border-radius: 8px;
            border: none;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(247, 183, 49, 0.3);
          }

          .quote-btn:hover {
            background: #002147;
            color: #fff;
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(0, 33, 71, 0.2);
          }

          @media (max-width: 992px) {
            .service-block,
            .service-block.reverse {
              flex-direction: column;
              text-align: center;
              gap: 40px;
            }

            .service-points li {
              justify-content: center;
            }

            .service-image img {
              height: 300px;
            }
          }
        `}
      </style>

      <section className="services-page">
        <div className="services-header">
          <h1>Industrial Solutions</h1>
          <p>
            We provide end-to-end support for infrastructure and logistics with a
            focus on safety and efficiency.
          </p>
        </div>

        {services.map((service, index) => (
          <div
            key={service.id}
            className={`service-block ${index % 2 !== 0 ? "reverse" : ""}`}
          >
            <div className="service-image">
              <img src={service.image_url} alt={service.title} />
            </div>

            <div className="service-content">
              <h2>{service.title}</h2>
              <p>{service.description}</p>

              <ul className="service-points">
                {service.points.map((point, i) => (
                  <li key={i}>
                    <span className="check-icon">★</span> {point}
                  </li>
                ))}
              </ul>

<Link to="/contact">
  <button className="quote-btn">
    Book This Service
  </button>
</Link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default ServicesPage;

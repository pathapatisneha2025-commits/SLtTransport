import React from "react";

const services = [
  {
    title: "Transport Services",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80",
    desc: "Reliable transport solutions for industrial, construction, and commercial needs.",
    points: [
      "Safe and timely delivery",
      "Heavy machinery & cargo movement",
      "Long-distance and regional logistics",
      "GPS-enabled tracking",
      "Experienced drivers and crew",
    ],
  },
  {
    title: "Heavy Equipment Rental",
    image: "https://images.unsplash.com/photo-1581091215367-59ab6c6b9b19?auto=format&fit=crop&w=800&q=80",
    desc: "High-quality and well-maintained heavy machinery available for short and long-term projects.",
    points: [
      "JCBs, excavators, loaders & cranes",
      "Well-maintained modern machinery",
      "Flexible rental plans",
      "On-site delivery & support",
      "Certified operators available",
    ],
  },
  {
    title: "Manpower Supply",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    desc: "Skilled and semi-skilled workforce to support your construction and industrial operations.",
    points: [
      "Skilled & semi-skilled labor",
      "Construction & industrial manpower",
      "Safety-trained professionals",
      "Short-term & long-term deployment",
      "Reliable workforce management",
    ],
  },
  {
    title: "Logistics Solutions",
    image: "https://images.unsplash.com/photo-1586521995568-39abaa0c2311?auto=format&fit=crop&w=800&q=80",
    desc: "End-to-end logistics solutions ensuring smooth coordination and efficient operations.",
    points: [
      "Smart logistics planning",
      "Material handling & warehousing",
      "Real-time coordination",
      "Cost-effective solutions",
      "Industry-compliant processes",
    ],
  },
];

const ServicesPage = () => {
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
            .service-block, .service-block.reverse {
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
          <p>We provide end-to-end support for infrastructure and logistics with a focus on safety and efficiency.</p>
        </div>

        {services.map((service, index) => (
          <div
            key={index}
            className={`service-block ${index % 2 !== 0 ? "reverse" : ""}`}
          >
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>

            <div className="service-content">
              <h2>{service.title}</h2>
              <p>{service.desc}</p>

              <ul className="service-points">
                {service.points.map((point, i) => (
                  <li key={i}>
                    <span className="check-icon">★</span> {point}
                  </li>
                ))}
              </ul>

              <button className="quote-btn">Book This Service</button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default ServicesPage;
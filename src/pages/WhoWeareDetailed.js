import React, { useEffect } from "react";

export default function WhoWeAreDetailed() {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      {/* HERO */}
      <section className="hero-section">
        <img src="/about.png" alt="Construction Equipment" />
        <div className="hero-overlay">
          <h1 className="hero-title">Who We Are</h1>
          <p className="hero-text">
            Swift Liger Transport & General Contracting provides heavy equipment rental,
            transport solutions, and manpower services for construction, oil & gas,
            logistics, and infrastructure projects.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section section-blue">
        <div className="grid-two-cols">
          <div>
            <h2 className="heading-large">About Swift Liger</h2>
            <p className="text-large">
              We deliver safe, efficient, and cost-effective solutions for projects of all sizes.
              Our modern fleet and skilled operators ensure smooth operations and high productivity.
            </p>
            <p className="text-large">
              With a strong focus on safety, reliability, and customer satisfaction,
              Swift Liger is a dependable partner across the UAE.
            </p>
          </div>

          <div className="card">
            <h3 className="heading-medium">Why Choose Us</h3>
            <ul className="list">
              <li>✔ Well-maintained & inspected fleet</li>
              <li>✔ Licensed & certified operators</li>
              <li>✔ 24/7 support & rapid mobilization</li>
              <li>✔ Competitive & flexible pricing</li>
              <li>✔ Strong safety & compliance record</li>
            </ul>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="section section-white">
        <div className="grid-two-cols">
          <div className="card-small">
            <h3 className="heading-medium">Our Vision</h3>
            <p className="text-large">
              To be the most trusted partner for heavy equipment rental and transport solutions.
            </p>
          </div>
          <div className="card-small">
            <h3 className="heading-medium">Our Mission</h3>
            <p className="text-large">
              Delivering quality equipment, reliable operators, and safe services to ensure project success.
            </p>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="section section-blue">
        <h2 className="heading-large text-center">Our Core Values</h2>
        <div className="grid-four-cols">
          {["Safety First", "Reliability", "Excellence", "Customer Focus"].map((value) => (
            <div key={value} className="card-core-value">
              <h4>{value}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="section section-white">
        <h2 className="heading-large text-center">Our Services</h2>
        <div className="grid-two-cols">
          {[
            { title: "Heavy Equipment Rental", items: ["Forklifts (3–25 Ton)", "Cranes", "Excavators & Loaders", "Bobcats & Rollers"] },
            { title: "Transport Solutions", items: ["Low Bed & Flatbed Trailers", "Machinery Relocation", "Container Transport", "Pickup & Recovery"] },
            { title: "Passenger Transport", items: ["9–84 Seater Buses", "AC & Non-AC Options"] },
            { title: "Manpower Supply", items: ["Certified Operators & Drivers", "Site Supervisors & Riggers"] },
          ].map(service => (
            <div key={service.title} className="card-small">
              <h3 className="heading-medium">{service.title}</h3>
              <ul className="list">
                {service.items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section">
        <h2 className="contact-heading">Contact Us</h2>
        <div className="contact-text">
          <p>📍 Office No: 39, Musaffah Industrial 45, F Block, PO Box: 13232, Abu Dhabi, UAE</p>
          <p>📞 +971 2 627 1510 | +971 54 247 9555 | +971 56 956 9555</p>
          <p>📧 info.swiftligerllc@gmail.com | sales.swiftligerllc@gmail.com</p>
          <p>🌐 www.swiftligerllc.com</p>
        </div>
      </section>

      {/* CSS */}
      <style>{`
        .container {
          min-height: 100vh;
          font-family: sans-serif;
          color: #333;
          background-color: #f8f9fa;
        }

        /* HERO */
        .hero-section {
          position: relative;
          height: 500px;
          width: 100%;
          overflow: hidden;
        }

        .hero-section img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(75%);
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(2, 17, 71, 0.7), rgba(2, 17, 71, 0.5));
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 20px;
          color: #fff;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }

        .hero-text {
          font-size: 1.25rem;
          max-width: 600px;
          line-height: 1.6;
        }

        /* SECTIONS */
        .section {
          padding: 5rem 1.5rem;
        }

        .section-blue {
          background-color: #e6f0ff;
        }

        .section-white {
          background-color: #fff;
        }

        .heading-large {
          font-size: 2.5rem;
          font-weight: bold;
          color: #002147;
          margin-bottom: 1.5rem;
        }

        .heading-medium {
          font-size: 1.75rem;
          font-weight: 600;
          color: #002147;
          margin-bottom: 1rem;
        }

        .text-large {
          font-size: 1.125rem;
          line-height: 1.7;
          margin-bottom: 1rem;
          color: #555;
        }

        .card {
          background: #fff;
          padding: 2.5rem;
          border-left: 6px solid #002147;
          border-radius: 1.5rem;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        .card-small {
          background: #fff;
          padding: 2rem;
          border-left: 6px solid #002147;
          border-radius: 1rem;
          box-shadow: 0 3px 10px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
        }

        .card-small:hover {
          transform: translateY(-3px);
          box-shadow: 0 7px 20px rgba(0,0,0,0.15);
        }

        .card-core-value {
          background: #fff;
          padding: 1.5rem;
          border-radius: 1rem;
          text-align: center;
          box-shadow: 0 3px 10px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
        }

        .card-core-value:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }

        .list {
          margin: 0;
          padding-left: 1.5rem;
        }

        .list li {
          margin-bottom: 0.5rem;
          font-size: 1.125rem;
        }

        .grid-two-cols {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .grid-four-cols {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .contact-section {
          background-color: #002147;
          color: #fff;
          padding: 5rem 1.5rem;
          text-align: center;
        }

        .contact-heading {
          font-size: 2.5rem;
          font-weight: 600;
          margin-bottom: 2rem;
        }

        .contact-text p {
          margin-bottom: 1rem;
          font-size: 1.125rem;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .grid-two-cols, .grid-four-cols {
            grid-template-columns: 1fr;
          }

          .hero-title {
            font-size: 2.25rem;
          }

          .hero-text {
            font-size: 1rem;
          }

          .heading-large {
            font-size: 2rem;
          }

          .heading-medium {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}

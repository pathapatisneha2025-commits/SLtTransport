import React, { useState, useEffect } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! Your message has been sent.");
  };
 useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <style>
        {`
          .contact-page {
            font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            color: #333;
            background-color: #fcfcfc;
            padding-bottom: 80px;
          }

          /* Header Section */
          .contact-header {
            background: linear-gradient(rgba(0, 33, 71, 0.8), rgba(0, 33, 71, 0.8)), 
                        url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80');
            background-size: cover;
            background-position: center;
            color: white;
            padding: 100px 10%;
            text-align: center;
          }

          .contact-header h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
          }

          /* Main Layout */
       .contact-container {
            max-width: 1200px;
            margin: 60px auto 0; /* Changed from -50px to 60px for clear separation */
            display: grid;
            grid-template-columns: 1.5fr 1fr;
            gap: 40px;
            padding: 0 20px;
          }
          /* Form Styles */
          .contact-form-card {
            background: white;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          }

          .form-group {
            margin-bottom: 20px;
          }

          .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: #002147;
          }

          .form-group input, .form-group textarea {
            width: 100%;
            padding: 12px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 1rem;
            box-sizing: border-box;
          }

          .submit-btn {
            background-color: #f7b731; /* Matching the yellow from "Rent Now" */
            color: #002147;
            padding: 15px 30px;
            border: none;
            border-radius: 4px;
            font-weight: bold;
            font-size: 1rem;
            cursor: pointer;
            transition: background 0.3s;
            width: 100%;
          }

          .submit-btn:hover {
            background-color: #eb9e05;
          }

          /* Info Sidebar */
          .contact-info-column {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .info-card {
            background: white;
            padding: 25px;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            border-left: 5px solid #00a8ff;
          }

          .info-card h4 {
            margin: 0 0 10px 0;
            color: #002147;
            font-size: 1.1rem;
          }

          .info-card p {
            margin: 0;
            color: #666;
            line-height: 1.5;
          }

          /* Map Placeholder */
          .map-placeholder {
            width: 100%;
            height: 250px;
            background-color: #eee;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #999;
            margin-top: 20px;
          }

          @media (max-width: 900px) {
            .contact-container {
              grid-template-columns: 1fr;
              margin-top: 20px;
            }
          }
        `}
      </style>

      <div className="contact-page">
        {/* Banner Section */}
        <section className="contact-header">
          <h1>Contact Us</h1>
          <p>Have questions about our services? Reach out to our team today.</p>
        </section>

        {/* Form and Info Section */}
        <div className="contact-container">
          
          {/* Left: Contact Form */}
          <div className="contact-form-card">
            <h2 style={{ marginBottom: '25px', color: '#002147' }}>Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input 
                  type="text" name="name" placeholder="Enter your name" 
                  value={formData.name} onChange={handleChange} required 
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input 
                  type="email" name="email" placeholder="example@gmail.com" 
                  value={formData.email} onChange={handleChange} required 
                />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input 
                  type="text" name="subject" placeholder="How can we help?" 
                  value={formData.subject} onChange={handleChange} 
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea 
                  name="message" rows="5" placeholder="Write your message here..."
                  value={formData.message} onChange={handleChange} required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>

          {/* Right: Info Cards */}
          <div className="contact-info-column">
            <div className="info-card">
              <h4>LandLine Number</h4>
              <p>+97126271510</p>
            </div>
            
            <div className="info-card">
              <h4>Email Support</h4>
              <p>contact@sltservices.com</p>
              <p>support@sltservices.com</p>
            </div>

            <div className="info-card">
              <h4>Head Office</h4>
              <p>MUSSAFAH-45 , ABU DHABI, UAE</p>
            </div>
{/* 
            <div className="map-placeholder">
              <p>📍 Google Maps Viewport</p>
            </div> */}
          </div>

        </div>
      </div>
    </>
  );
};

export default ContactPage;
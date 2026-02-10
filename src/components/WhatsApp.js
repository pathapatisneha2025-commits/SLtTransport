import React, { useState } from "react";
import { FaWhatsapp, FaTimes, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function WhatsAppSupport() {
  const [open, setOpen] = useState(false);

  const whatsappNumbers = [
    "+971542479555",
    "+97156 956 9555",
  ];

  const openWhatsApp = (num) => {
    window.open(`https://wa.me/${num.replace(/\+/g, "")}`, "_blank");
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div style={fabStyle} onClick={() => setOpen(true)}>
        <FaWhatsapp size={30} />
      </div>

      {/* Support Panel */}
      {open && (
        <div style={panelStyle}>
          {/* Header */}
          <div style={headerStyle}>
            <span>How can we help?</span>
            <button style={closeBtn} onClick={() => setOpen(false)}>
              <FaTimes />
            </button>
          </div>

          {/* Body */}
          <div style={bodyStyle}>
            {/* Main WhatsApp Card */}
            <div
              style={cardStyle}
              onClick={() => openWhatsApp(whatsappNumbers[0])}
            >
              <FaWhatsapp size={24} color="#25D366" />
              <div>
                <strong>Chat with us</strong>
                <p>Instant WhatsApp support</p>
              </div>
            </div>

            {/* Number List */}
            {whatsappNumbers.map((num) => (
              <div
                key={num}
                style={numberCard}
                onClick={() => openWhatsApp(num)}
              >
                <FaWhatsapp /> {num}
              </div>
            ))}

            {/* Call
            <div style={cardStyle}>
              <FaPhoneAlt />
              <div>
                <strong>Talk to us</strong>
                <p>Call customer care</p>
              </div>
            </div> */}

            {/* Email */}
            <div style={cardStyle}>
              <FaEnvelope />
              <div>
                <strong>Write to us</strong>
                <p>Email support</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ================== STYLES ================== */

const fabStyle = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  background: "#25D366",
  color: "#fff",
  fontSize: "28px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  zIndex: 1000,
  boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
};

const panelStyle = {
  position: "fixed",
  bottom: "90px",
  right: "20px",
  width: "320px",
  background: "#fff",
  borderRadius: "18px",
  boxShadow: "0 10px 40px rgba(0,0,0,0.25)",
  zIndex: 1001,
  overflow: "hidden",
};

const headerStyle = {
  background: "#0f172a",
  color: "#fff",
  padding: "14px 16px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontWeight: "600",
};

const closeBtn = {
  background: "transparent",
  border: "none",
  color: "#fff",
  fontSize: "18px",
  cursor: "pointer",
};

const bodyStyle = {
  padding: "14px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const cardStyle = {
  display: "flex",
  gap: "10px",
  alignItems: "center",
  padding: "12px",
  borderRadius: "12px",
  background: "#f8fafc",
  cursor: "pointer",
};

const numberCard = {
  padding: "10px",
  borderRadius: "10px",
  background: "#ecfdf5",
  color: "#16a34a",
  fontWeight: "600",
  cursor: "pointer",
  textAlign: "center",
};

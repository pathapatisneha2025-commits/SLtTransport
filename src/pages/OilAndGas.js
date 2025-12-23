import React from "react";

export default function OilAndGasPage() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Oil & Gas</h1>
        <p style={styles.comingSoon}>🚧 Coming Soon 🚧</p>
        <p style={styles.description}>
          We are working hard to bring you the latest updates and services in the oil & gas industry. Stay tuned!
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
    color: "#fff",
    textAlign: "center",
    padding: "20px",
  },
  content: {
    maxWidth: "600px",
    border: "2px dashed #fff",
    borderRadius: "15px",
    padding: "40px 20px",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "20px",
  },
  comingSoon: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#ffcc00",
    marginBottom: "15px",
  },
  description: {
    fontSize: "1.2rem",
    lineHeight: "1.5",
  },
};

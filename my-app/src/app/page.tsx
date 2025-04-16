'use client';
import { useState } from "react";

export default function Home() {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundImage: "url('https://source.unsplash.com/1600x900/?romantic')",
        backgroundSize: "cover",
        color: "#fff",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
        Hey Love ❤️
      </h1>
      <p style={{ fontSize: "1.5rem", marginBottom: "30px" }}>
        You make my world brighter every single day!
      </p>
      <button
        onClick={handleClick}
        style={{
          padding: "10px 20px",
          fontSize: "1rem",
          backgroundColor: "#ff69b4",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Click for a Surprise!
      </button>
      {showMessage && (
        <p style={{ marginTop: "20px", fontSize: "1.5rem" }}>
          🌹 You are the most amazing person in my life! 🌟
        </p>
      )}
    </div>
  );
}
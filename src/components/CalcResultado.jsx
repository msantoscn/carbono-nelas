import { useState } from "react";

export default function CalcResultado({ resultado, onReiniciar }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        padding: "40px 20px",
        fontFamily: "sans-serif",
        textAlign: "center",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h2 style={{ color: "#2E8B57", fontSize: "2rem", marginBottom: "20px" }}>
        Seu Diagnóstico
      </h2>

      <div
        style={{
          margin: "20px 0",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <p style={{ fontSize: "1.1rem", marginBottom: "10px" }}>
          <strong>Índice de Impacto Climático (IIC):</strong>{" "}
          {resultado.notaIIC} pontos
        </p>
        <p style={{ fontSize: "1.1rem" }}>
          <strong>Índice de Conservação (ICB):</strong> {resultado.notaICB}{" "}
          pontos
        </p>
      </div>

      <h3 style={{ marginTop: "30px", color: "#333" }}>
        Seu Perfil Carbono Delas:
      </h3>
      <h1 style={{ color: "#2E8B57", fontSize: "2.2rem", margin: "15px 0" }}>
        {resultado.perfil}
      </h1>

      <p
        style={{
          marginTop: "20px",
          fontSize: "0.95rem",
          color: "gray",
          fontStyle: "italic",
        }}
      ></p>

      {/* Botão Refazer com o mesmo efeito hover padrão */}
      <div style={{ marginTop: "35px" }}>
        <button
          onClick={onReiniciar}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            padding: "14px 28px",
            fontSize: "1rem",
            letterSpacing: "1px",
            cursor: "pointer",
            backgroundColor: isHovered ? "#2E8B57" : "transparent",
            color: isHovered ? "#ffffff" : "#2E8B57",
            border: "2px solid #2E8B57",
            borderRadius: "6px",
            fontWeight: "600",
            textTransform: "uppercase",
            transition: "all 0.3s ease",
          }}
        >
          Refazer Avaliação
        </button>
      </div>
    </div>
  );
}

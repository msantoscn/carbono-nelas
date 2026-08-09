import { useState } from "react";

export default function Home({ onIniciar }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      {/* SEÇÃO DO BANNER (HERO IMAGE) */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "400px",
          // O gradiente escurece a imagem para destacar o texto branco
          // Aqui usamos a imagem local que está na pasta public: '/babacu.jpg'
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/babacu.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "3rem",
            letterSpacing: "2px",
            textAlign: "center",
            margin: 0,
            textTransform: "uppercase",
            textShadow: "2px 2px 4px rgba(0,0,0,0.8)", // Sombra para garantir leitura perfeita
          }}
        >
          Carbono Delas
        </h1>
      </div>

      {/* SEÇÃO DE CONTEÚDO */}
      <div
        style={{
          textAlign: "center",
          padding: "40px",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{ color: "#2E8B57", fontSize: "2rem", marginBottom: "20px" }}
        >
          O que é o projeto?
        </h2>

        <p style={{ fontSize: "1.2rem", lineHeight: "1.6", color: "#333" }}>
          Uma plataforma digital para avaliação do impacto climático e
          reconhecimento das quebradeiras de coco babaçu como guardiãs dos
          ecossistemas maranhenses.
        </p>

        <button
          onClick={onIniciar}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            padding: "15px 30px",
            fontSize: "18px",
            letterSpacing: "1px",
            cursor: "pointer",
            marginTop: "30px",
            backgroundColor: isHovered ? "#2E8B57" : "transparent",
            color: isHovered ? "#ffffff" : "#2E8B57",
            border: "2px solid #2E8B57",
            borderRadius: "5px",
            fontWeight: "bold",
            textTransform: "uppercase",
            transition: "all 0.3s ease",
          }}
        >
          Iniciar Avaliação
        </button>
      </div>
    </div>
  );
}

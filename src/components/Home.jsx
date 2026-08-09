import { useState } from "react";

export default function Home({ onIniciar }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  return (
    <div style={estilos.container}>
      <div style={estilos.containerh1}>
        <h1 style={estilos.h1}>Carbono Delas</h1>
      </div>

      <div style={estilos.containerh2}>
        <h2 style={estilos.h2}>O que é o projeto?</h2>

        <p style={estilos.p}>
          Uma plataforma digital para avaliação do impacto climático e
          reconhecimento das quebradeiras de coco babaçu como guardiãs dos
          ecossistemas maranhenses.
        </p>

        <button
          onClick={onIniciar}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => setIsPressed(false)}
          style={botaoPrincipal(isHovered, isPressed)}
        >
          Iniciar Avaliação
        </button>
      </div>
    </div>
  );
}
const estilos = {
  container: {
    fontFamily: "sans-serif",
  },
  containerh1: {
    position: "relative",
    width: "100%",
    height: "300px",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/babacu.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  h1: {
    color: "white",
    fontSize: "48px",
    letterSpacing: "2px",
    textAlign: "center",
    margin: 0,
    textTransform: "uppercase",
    textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
    lineHeight: "1.3",
  },
  containerh2: {
    textAlign: "center",
    padding: "40px",
    maxWidth: "800px",
    margin: "0 auto",
  },
  h2: {
    color: "#2E8B57",
    fontSize: "2rem",
    marginBottom: "20px",
  },
  p: {
    fontSize: "1.2rem",
    lineHeight: "1.6",
    color: "#333",
  },
};

const botaoPrincipal = (isHovered, isPressed) => ({
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
  opacity: isPressed ? 0.8 : 1,
});

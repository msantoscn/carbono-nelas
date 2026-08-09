import { useState } from "react";

export default function CalcResultado({ resultado, onReiniciar }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  return (
    <div style={estilos.containerResultado}>
      <h2 style={estilos.diag}>Seu Diagnóstico</h2>

      <div style={estilos.containerIndice}>
        <p style={estilos.iClimatico}>
          <strong>Índice de Impacto Climático (IIC):</strong>{" "}
          {resultado.notaIIC} pontos
        </p>
        <p style={estilos.iConservacao}>
          <strong>Índice de Conservação (ICB):</strong> {resultado.notaICB}{" "}
          pontos
        </p>
      </div>

      <h3 style={estilos.seuPerfil}>Seu Perfil Carbono Delas:</h3>
      <h1 style={estilos.perfilResultado}>{resultado.perfil}</h1>

      <div style={{ marginTop: "35px" }}>
        <button
          onClick={onReiniciar}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => setIsPressed(false)}
          style={refazer(isHovered, isPressed)}
        >
          Refazer Avaliação
        </button>
      </div>
    </div>
  );
}

const estilos = {
  containerResultado: {
    padding: "40px 20px",
    fontFamily: "sans-serif",
    textAlign: "center",
    maxWidth: "800px",
    margin: "0 auto",
  },
  diag: {
    color: "#2E8B57",
    fontSize: "2rem",
    marginBottom: "20px",
  },
  containerIndice: {
    margin: "20px 0",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
  iClimatico: {
    fontSize: "1.1rem",
    marginBottom: "10px",
  },
  iConservacao: {
    fontSize: "1.1rem",
  },

  seuPerfil: {
    marginTop: "30px",
    color: "#333",
  },

  perfilResultado: {
    color: "#2E8B57",
    fontSize: "2.2rem",
    margin: "15px 0",
    lineHeight: "1.3",
  },
};

const refazer = (isHovered, isPressed) => ({
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
  opacity: isPressed ? 0.8 : 1,
});

import { useState } from "react";
import { questionario } from "../questionario";

export default function Formulario({ onFinalizar }) {
  // Junta todas as perguntas do IIC e ICB em uma lista única
  const todasAsPerguntas = [...questionario.iic, ...questionario.icb];

  const [passoAtual, setPassoAtual] = useState(0);
  const [respostasTemporarias, setRespostasTemporarias] = useState({});
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const perguntaAtual = todasAsPerguntas[passoAtual];

  // Quando clica na opção, apenas marca qual foi escolhida (não avança ainda)
  const selecionarOpcao = (index, peso, tipo) => {
    setOpcaoSelecionada(index);
    setRespostasTemporarias({
      ...respostasTemporarias,
      [perguntaAtual.id]: { peso, tipo },
    });
  };

  // Botão "Próxima Pergunta" ou "Finalizar"
  const avancarProxima = () => {
    if (opcaoSelecionada === null) return; // Segurança caso clique sem selecionar

    const proximoPasso = passoAtual + 1;

    if (proximoPasso < todasAsPerguntas.length) {
      setPassoAtual(proximoPasso);
      setOpcaoSelecionada(null); // Reseta a seleção para a próxima pergunta
    } else {
      // Se chegou ao fim de todas as perguntas, envia o acumulado para calcular o resultado
      onFinalizar(respostasTemporarias);
    }
  };

  return (
    <div
      style={{
        padding: "40px 20px",
        fontFamily: "sans-serif",
        maxWidth: "700px",
        margin: "0 auto",
      }}
    >
      <p
        style={{
          color: "#666",
          fontSize: "0.9rem",
          marginBottom: "10px",
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        Pergunta {passoAtual + 1} de {todasAsPerguntas.length}
        {" — " +
          (perguntaAtual.tipo === "IIC"
            ? "Bloco A: Impacto Climático"
            : "Bloco B: Conservação e Saberes")}
      </p>

      <h3
        style={{
          color: "#2E8B57",
          fontSize: "1.4rem",
          marginBottom: "25px",
          lineHeight: "1.4",
        }}
      >
        {perguntaAtual.pergunta}
      </h3>

      {/* Lista de Opções */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          marginBottom: "30px",
        }}
      >
        {perguntaAtual.opcoes.map((opcao, index) => {
          const selecionada = opcaoSelecionada === index;
          return (
            <button
              key={index}
              onClick={() =>
                selecionarOpcao(index, opcao.peso, perguntaAtual.tipo)
              }
              style={{
                padding: "15px 20px",
                fontSize: "1rem",
                textAlign: "left",
                cursor: "pointer",
                backgroundColor: selecionada ? "#e8f5e9" : "#ffffff",
                color: "#333",
                border: selecionada ? "2px solid #2E8B57" : "1px solid #ccc",
                borderRadius: "6px",
                transition: "all 0.2s ease",
              }}
            >
              {opcao.texto}
            </button>
          );
        })}
      </div>

      {/* Botão Próxima Pergunta com o mesmo efeito visual da Home */}
      <div style={{ textAlign: "right" }}>
        <button
          onClick={avancarProxima}
          disabled={opcaoSelecionada === null}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            padding: "14px 28px",
            fontSize: "1rem",
            letterSpacing: "1px",
            cursor: opcaoSelecionada === null ? "not-allowed" : "pointer",
            backgroundColor:
              opcaoSelecionada === null
                ? "#cccccc"
                : isHovered
                  ? "#2E8B57"
                  : "transparent",
            color:
              opcaoSelecionada === null
                ? "#666666"
                : isHovered
                  ? "#ffffff"
                  : "#2E8B57",
            border:
              opcaoSelecionada === null
                ? "2px solid #cccccc"
                : "2px solid #2E8B57",
            borderRadius: "6px",
            fontWeight: "600",
            textTransform: "uppercase",
            transition: "all 0.3s ease",
            opacity: opcaoSelecionada === null ? 0.6 : 1,
          }}
        >
          {passoAtual + 1 === todasAsPerguntas.length
            ? "Finalizar Avaliação"
            : "Próxima Pergunta"}
        </button>
      </div>
    </div>
  );
}

import { useState } from "react";
import Home from "./components/Home";
import Formulario from "./components/Formulario";
import CalcResultado from "./components/CalcResultado";

export default function App() {
  const [telaAtual, setTelaAtual] = useState("home");
  const [resultadoFinal, setResultadoFinal] = useState(null);

  const calcularResultado = (respostas) => {
    let notaIIC = 0;
    let notaICB = 0;

    Object.values(respostas).forEach((resposta) => {
      if (resposta.tipo === "IIC") notaIIC += resposta.peso;
      else if (resposta.tipo === "ICB") notaICB += resposta.peso;
    });

    let grupoIIC =
      notaIIC <= 20 ? "Baixo" : notaIIC <= 40 ? "Moderado" : "Elevado/Alto";
    let grupoICB = notaICB <= 21 ? "Baixo" : "Alto";

    let perfil = "";
    if (grupoIIC === "Baixo" && grupoICB === "Alto")
      perfil = "🌱 Guardião(ã) do Babaçu";
    else if (grupoIIC === "Baixo" && grupoICB === "Baixo")
      perfil = "🌿 Consumidor(a) Consciente em Construção";
    else if (grupoIIC === "Moderado" && grupoICB === "Alto")
      perfil = "🌎 Aliado(a) do Clima";
    else if (grupoIIC === "Moderado" && grupoICB === "Baixo")
      perfil = "📚 Em Processo de Conscientização";
    else if (grupoIIC === "Elevado/Alto" && grupoICB === "Alto")
      perfil = "🌳 Agente de Transformação Sustentável";
    else perfil = "🔎 Necessita ampliar conhecimentos ambientais";

    setResultadoFinal({ notaIIC, notaICB, perfil });
    setTelaAtual("resultado");
  };

  return (
    <div>
      {telaAtual === "home" && <Home onIniciar={() => setTelaAtual("quiz")} />}

      {telaAtual === "quiz" && <Formulario onFinalizar={calcularResultado} />}

      {telaAtual === "resultado" && (
        <CalcResultado
          resultado={resultadoFinal}
          onReiniciar={() => {
            setResultadoFinal(null);
            setTelaAtual("home");
          }}
        />
      )}
    </div>
  );
}

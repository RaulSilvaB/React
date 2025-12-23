import { useState } from "react";

const ConditionalRender = () => {
  const [condicao, setCondicao] = useState(true);

  return (
    <div className="pai">
      <h1>Renderizador</h1>
      <button onClick={() => setCondicao((prevState) => !prevState)}>
        Exibir / ocultar
      </button>
      {condicao && <div>Jesus é o caminho e a verdade</div>}
    </div>
  );
};

export default ConditionalRender;

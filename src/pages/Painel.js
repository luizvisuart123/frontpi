import React, { useState } from 'react';
import '../estilos/Painel.css';

const PainelExpansivel = ({ titulo, conteudo }) => {
  const [expandido, setExpandido] = useState(false);

  const handleExpandir = () => {
    setExpandido(!expandido);
  };

  return (
    <div className={`painel-expansivel ${expandido ? 'expandido' : ''}`}>
      <div className="cabecalho" onClick={handleExpandir}>
        <h2>{titulo}</h2>
      </div>
      <div className="conteudo" style={{ display: expandido ? 'block' : 'none' }}>
        {conteudo}
      </div>
    </div>
  );
};

export default PainelExpansivel;

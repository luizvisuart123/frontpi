import React, { useState } from 'react';
import axios from 'axios';

function FormImc() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [sexo, setSexo] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularIMC = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/imc?peso=${peso}&altura=${altura}&sexo=${sexo}`);
      setResultado(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error.message);
    }
  };

  return (
    <div>
      <h1>Calculadora de IMC</h1>
      <input type="number" placeholder="Peso (kg)" value={peso} onChange={(e) => setPeso(e.target.value)} />
      <input type="number" placeholder="Altura (m)" value={altura} onChange={(e) => setAltura(e.target.value)} />
      <input type="text" placeholder="Sexo (M/F)" value={sexo} onChange={(e) => setSexo(e.target.value)} />
      <button onClick={calcularIMC}>Calcular</button>
      {resultado && <p>Resultado: {resultado}</p>}
    </div>
  );
}

export default FormImc;

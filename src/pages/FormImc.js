import React, { useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2'; // Importe o componente de gráfico de barras

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

  // Dados do gráfico
  const data = {
    labels: ['IMC'],
    datasets: [
      {
        label: 'IMC',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.8)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [resultado], // Use o valor do IMC calculado aqui
      },
    ],
  };

  return (
    <div>
      <h1>Calculadora de IMC</h1>
      <input type="number" placeholder="Peso (kg)" value={peso} onChange={(e) => setPeso(e.target.value)} />
      <input type="number" placeholder="Altura (m)" value={altura} onChange={(e) => setAltura(e.target.value)} />
      <input type="text" placeholder="Sexo (M/F)" value={sexo} onChange={(e) => setSexo(e.target.value)} />
      <button onClick={calcularIMC}>Calcular</button>
      {resultado && (
        <div>
          <p>Resultado: {resultado}</p>
          <Bar data={data} /> {/* Renderize o gráfico aqui */}
        </div>
      )}
    </div>
  );
}

export default FormImc;

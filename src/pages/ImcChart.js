import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2'; // Exemplo de biblioteca de gráficos

const IMCChart = ({ historicoData }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'IMC',
        data: [],
        fill: false,
        backgroundColor: 'blue',
        borderColor: 'blue',
      },
    ],
  });

  useEffect(() => {
    if (historicoData) {
      const formattedData = formatHistoricoData(historicoData);
      setChartData({
        labels: formattedData.labels,
        datasets: [
          {
            label: 'IMC',
            data: formattedData.data,
            fill: false,
            backgroundColor: 'blue',
            borderColor: 'blue',
          },
        ],
      });
    }
  }, [historicoData]);

  return (
    <div>
      <Line
        data={chartData}
        options={{
          title: {
            text: 'Evolução do IMC',
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

const formatHistoricoData = (historico) => {
  const data = historico.data || []; // Acesse o array de dados dentro do objeto historico (se existir)

  const labels = [];
  const dataPoints = []; // Use dataPoints para evitar conflito com a variável data

  data.forEach((registro) => {
    labels.push(registro.dataCalculo);
    dataPoints.push(registro.imc);
  });

  return { labels, data: dataPoints }; // Retorne com o nome correto da propriedade
};



export default IMCChart;

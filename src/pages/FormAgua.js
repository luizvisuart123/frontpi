import React, { useState, useContext, useEffect } from 'react';
import '../estilos/FormAgua.css';
import { TokenContext } from '../configuracao/TokenContext'; // Importar o TokenContext
import TabelaAgua from './TabelaFormAgua';

const FormAgua = () => {
  const [quantidadeIdealAgua, setQuantidadeIdealAgua] = useState(3); // Estado para quantidade ideal de água
  const [clima, setClima] = useState(false);
  const [horasExercicioFisico, setHorasExercicioFisico] = useState(0);
  const [peso, setPeso] = useState(0);
  const [nivelAtividadeFisicaDiaria, setNivelAtividadeFisicaDiaria] = useState('LEVE');
  const [dataCalculo, setDataCalculo] = useState(() => new Date().toISOString().slice(0, 10)); // Data atual
  const { getToken } = useContext(TokenContext); // Obter token do contexto
  const [renderTabela, setRenderTabela] = useState(false);

  // Atualizar dataCalculo no useEffect
  useEffect(() => {
    setDataCalculo(() => new Date().toISOString().slice(0, 10));
  }, []);

  const calcularQuantidadeAgua = async () => {
    const token = getToken(); // Obter token do contexto
    if (token) {
      try {
        const response = await fetch('http://localhost:8080/calculo_agua', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            
          },
          body: JSON.stringify({
            usuario: {
              username: 'user_admin',
            },
            dataCalculo: dataCalculo,
            clima: clima,
            horasExercicioFisico: horasExercicioFisico,
            peso: peso,
            nivelAtividadeFisica: nivelAtividadeFisicaDiaria,
            quantidadeIdealAgua: quantidadeIdealAgua, // Incluir quantidadeIdealAgua no corpo da requisição
          }),
        });

        const responseData = await response.json();
        setQuantidadeIdealAgua(responseData.quantidadeIdealAgua); // Atualizar quantidade ideal de água
        console.log('Resposta do backend:', responseData);
        setRenderTabela(!renderTabela);
      } catch (error) {
        console.error('Erro ao enviar dados para o backend:', error);
      }
    } else {
      console.error('Token não encontrado no contexto.');
    }
  };

  return (
    <div>
      <h2>Cálculo da Quantidade de Água Diária</h2>

      <div>
        <label>Clima:</label>
        <input type="checkbox" checked={clima} onChange={() => setClima(!clima)} />
      </div>

      <div>
        <label>Horas de Exercício Físico:</label>
        <input type="number" value={horasExercicioFisico} onChange={(e) => setHorasExercicioFisico(parseFloat(e.target.value))} />
      </div>

      <div>
        <label>Peso (kg):</label>
        <input type="number" value={peso} onChange={(e) => setPeso(parseFloat(e.target.value))} />
      </div>

      <div>
        <label>Nível de Atividade Física Diária:</label>
        <select value={nivelAtividadeFisicaDiaria} onChange={(e) => setNivelAtividadeFisicaDiaria(e.target.value)}>
          <option value="LEVE">Leve</option>
          <option value="MODERADO">Moderado</option>
          <option value="INTENSO">Intenso</option>
        </select>
      </div>

      <div>
        <label>Data do Cálculo:</label>
        <input type="date" value={dataCalculo} onChange={(e) => setDataCalculo(e.target.value)} />
      </div>

      <button onClick={calcularQuantidadeAgua}>Calcular</button>

      {renderTabela && <TabelaAgua />}
      {!renderTabela && <TabelaAgua />}
    </div>
  );
};

export default FormAgua;

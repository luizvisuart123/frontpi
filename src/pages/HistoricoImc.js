import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { TokenContext } from '../configuracao/TokenContext';
import ImcChart from './ImcChart';

const HistoricoImc = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { getToken } = useContext(TokenContext);
  const [historico, setHistorico] = useState([]);
  const formatHistoricoData = (historico) => {
    const labels = [];
    const data = [];

    historico.forEach((registro) => {
      labels.push(registro.dataCalculo); // Exemplo de formatação da data
      data.push(registro.imc);
    });

    return { labels, data };
  };
  const formattedHistoricoData = formatHistoricoData(historico);

  // Fetch historical data on component mount
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const token = getToken();

      if (token) {
        try {
          const response = await fetch('http://localhost:8080/calculo_imc', {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
              'Origin': 'http://localhost:3000' // Substitua pela origem do seu front-end
            },
          });

          if (response.ok) {
            const data = await response.json();
            setHistorico(data);
          } else {
            console.error('Erro ao buscar histórico:', response.status);
          }
        } catch (error) {
          console.error('Erro ao buscar histórico:', error);
        } finally {
          setIsLoading(false);
        }
      } else {
        console.error('Token não encontrado no contexto.');
      }
    };

    fetchData();
  }, [getToken]); // Re-fetch data when token changes

  const handleDelete = async (id) => {
    setIsLoading(true); // Set loading state before deletion
    const token = getToken();
  
    if (token) {
      try {
        const response = await fetch(`http://localhost:8080/calculo_imc/${id}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Origin': 'http://localhost:3000' // Substitua pela origem do seu front-end
          },
        });
  
        if (response.ok) {
          // Update historical data after successful deletion
          const updatedHistorico = historico.filter((registro) => registro.id !== id);
          setHistorico(updatedHistorico);
          console.log('Registro excluído com sucesso.');
        } else {
          console.error('Erro ao excluir registro:', response.status);
        }
      } catch (error) {
        console.error('Erro ao excluir registro:', error);
      } finally {
        setIsLoading(false); // Reset loading state after deletion
      }
    } else {
      console.error('Token não encontrado no contexto.');
    }
  };
  

  return (
    <div className="historico-imc">
      <h2>Histórico de Cálculo de IMC</h2>
      <table>
        <thead>
          <tr>
            <th>Nome do Usuário</th>
            <th>Peso</th>
            <th>Altura</th>
            <th>IMC</th>
            <th>Data do Cálculo</th>
            <th>Classificação IMC</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan="7">Carregando histórico...</td>
            </tr>
          ) : historico.length === 0 ? (
            <tr>
              <td colSpan="7">Não há dados disponíveis.</td>
            </tr>
          ) : (
            historico.map((registro) => (
              <tr key={registro.id}>
                <td>{registro.usuario.nome}</td>
                <td>{registro.peso}</td>
                <td>{registro.altura}</td>
                <td>{registro.imc.toFixed(2)}</td>
                <td>{registro.dataCalculo}</td>
                <td>{registro.classificacaoIMC}</td>
                <td>
                  {/* Implement delete button or functionality here */}
                  <button onClick={() => handleDelete(registro.id)}>
                    Excluir
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <ImcChart historicoData={formattedHistoricoData} />
    </div>
  );
};

export default HistoricoImc;

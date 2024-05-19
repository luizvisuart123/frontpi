import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { TokenContext } from '../configuracao/TokenContext';

const HistoricoImc = () => {
  const [isLoading, setIsLoading] = useState(false); // Added loading state for deletion
  const { getToken } = useContext(TokenContext);
  const [historico, setHistorico] = useState([]);
  console.log(historico);

  const handleDelete = async (id) => {
    setIsLoading(true); // Set loading state before deletion
    const token = getToken();

    if (token) {
      try {
        const response = await fetch(`http://localhost:8080/calculo_imc/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          // Update historical data after successful deletion
          const updatedHistorico = historico.filter((registro) => registro.id !== id);
          setHistorico(updatedHistorico);
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
            {historico.map((registro) => (
              <tr key={registro.id}>
                <td>{registro.usuario.nome}</td>
                <td>{registro.peso}</td>
                <td>{registro.altura}</td>
                <td>{registro.imc}</td>
                <td>{registro.dataCalculo}</td>
                <td>{registro.classificacaoIMC}</td>
                <td>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      {historico.length === 0 && !isLoading && <p>Não há dados disponíveis.</p>}
    </div>
  );
};

export default HistoricoImc;

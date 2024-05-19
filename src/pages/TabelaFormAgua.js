import React, { useState, useEffect, useContext } from 'react';
import '../estilos/TabelaAgua.css'; // Importe o arquivo CSS para estilizar a tabela
import { TokenContext } from '../configuracao/TokenContext';

const TabelaAgua = () => {
  const [dadosCalculos, setDadosCalculos] = useState([]); // Estado para armazenar os dados dos cálculos
  const [dadosParaExcluir, setDadosParaExcluir] = useState({}); // Estado para armazenar os dados do cálculo a ser excluído
  const { getToken } = useContext(TokenContext);// Obter token do contexto

  // Buscar dados dos cálculos na inicialização
  useEffect(() => {
    const API_URL = 'http://localhost:8080'; // Substitua por sua URL real

    async function fetchData() {
      const token = getToken();
      if (token) {
        try {
          const response = await fetch(`${API_URL}/calculo_agua`, {
            headers: {
              'Authorization': `Bearer ${token}`, // Incluir token no cabeçalho
              'Content-Type': 'application/json',
            },
          });

          if (response.ok) {
            const responseData = await response.json();
            setDadosCalculos(responseData);
          } else {
            console.error('Erro ao buscar dados da API:', response.status);
            // Exibir mensagem de erro para o usuário
          }
        } catch (error) {
          console.error('Erro ao buscar dados da API:', error);
          // Exibir mensagem de erro para o usuário
        }
      } else {
        console.error('Token não encontrado no contexto.');
      }
    }

    fetchData();
  }, []);

  // Função para excluir um cálculo

  
  // Confirmar exclusão do cálculo
  const confirmarExclusao = async (dadosCalculo) => {
    const idCalculo = dadosCalculo.id; // Obter o ID do cálculo a ser excluído
    const token = getToken();
    
    try {
      const response = await fetch(`http://localhost:8080/calculo_agua/${idCalculo}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Incluir token no cabeçalho
          'Origin': 'http://localhost:3000' // Substitua pela origem do seu front-end
        },
      });

      if (response.ok) {
        // Atualizar a lista de cálculos após a exclusão bem-sucedida
        setDadosCalculos(dadosCalculos.filter((calculo) => calculo.id !== idCalculo));
        alert('Cálculo excluído com sucesso!');
      } else {
        console.error('Erro ao excluir cálculo:', response.status);
        alert('Falha ao excluir cálculo.');
      }
    } catch (error) {
      console.error('Erro ao excluir cálculo:', error);
      alert('Falha ao excluir cálculo.');
    }

    setDadosParaExcluir({}); // Limpar o estado após a exclusão
  };

  return (
    <div className="tabela-agua">
      <h2>Histórico de Cálculos de Água</h2>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Peso (kg)</th>
            <th>Altura (cm)</th>
            <th>Quantidade Ideal de Água (ml)</th>
            <th>Data do Cálculo</th>
            <th>Nível de Atividade Física</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {dadosCalculos.map((dadosCalculo) => (
            <tr key={dadosCalculo.id}>
              <td>{dadosCalculo.usuario.nome}</td>
              <td>{dadosCalculo.peso}</td>
              <td>{dadosCalculo.usuario.altura}</td>
              <td>{dadosCalculo.quantidadeIdealAgua}</td>
              <td>{dadosCalculo.dataCalculo}</td>
              <td>{dadosCalculo.nivelAtividadeFisica}</td>
              

              <td>
                <button onClick={() => confirmarExclusao(dadosCalculo)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal de confirmação de exclusão (opcional)
      <div className="modal" id="modalExclusao">
        <div className="modal-content">
          <span className="close">&times;</span>
          <h2>Confirmar Exclusão</h2>
          <p>Deseja realmente excluir este cálculo?</p>
          <div>
            <button onClick={confirmarExclusao}>Confirmar</button>
            <button onClick={() => setDadosParaExcluir({})}>Cancelar</button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default TabelaAgua;

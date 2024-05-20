import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { TokenContext } from '../configuracao/TokenContext';

const HistoricoImc = () => {
  const [historico, setHistorico] = useState([]);
  const { getToken } = useContext(TokenContext);

  useEffect(() => {
    const fetchHistorico = async () => {
      const token = getToken();
      const response = await fetch('http://localhost:8080/calculo_imc', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setHistorico(data);
    };

    fetchHistorico();
  }, [getToken]);

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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoricoImc;

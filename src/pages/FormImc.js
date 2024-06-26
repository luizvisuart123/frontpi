import React, { useState, useContext } from 'react';
import { TokenContext } from '../configuracao/TokenContext';
import HistoricoImc from './HistoricoImc';

const FormImc = () => {
  const [peso, setPeso] = useState(0); // Estado para o peso do paciente
  const [altura, setAltura] = useState(0); // Estado para a altura do paciente
  const [imc, setImc] = useState(0); // Estado para o valor do IMC calculado
  const [classificacao, setClassificacao] = useState(''); // Estado para a classificação do IMC
  const { getToken } = useContext(TokenContext);
  const [novoUsuarioAdicionado, setNovoUsuarioAdicionado] = useState(false);

  

  const calcularImc = async () => {
    const token = getToken() || '';
    const alturaMetro = altura /100;
    if (alturaMetro > 0 && alturaMetro > 0) {
      const imcCalculado = peso / (alturaMetro * alturaMetro);
      setImc(imcCalculado.toFixed(2)); // Arredondar para duas casas decimais

      const classificacaoImc = determinarClassificacao(imcCalculado);
      setClassificacao(classificacaoImc);

      if (token) {
        try {
          const response = await fetch('http://localhost:8080/calculo_imc', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
              'Origin': 'http://localhost:3000' // Substitua pela origem do seu front-end
            },
            body: JSON.stringify({
              usuario: {
                username: 'user_admin', // username fixo
              },
              dataCalculo: new Date().toISOString().slice(0, 10), // Data atual
              imc: imcCalculado,
              classificacaoIMC: classificacaoImc,
            }),
          });

          //const responseData = await response.json();
          setNovoUsuarioAdicionado(!novoUsuarioAdicionado);
        } catch (error) {
          console.error('Erro ao enviar dados para o backend:', error);
        }
      } else {
        console.error('Token não encontrado no contexto.');
      }
    }
  };

  const determinarClassificacao = (imc) => {
    if (imc < 18.5) {
      return 'MAGREZA';
    } else if (imc >= 18.5 && imc <= 24.9) {
      return 'NORMAL';
    } else if (imc >= 25 && imc <= 29.9) {
      return 'SOBREPESO';
    } else if (imc >= 30 && imc <= 34.9) {
      return 'OBESIDADE1';
    } else if (imc >= 35 && imc <= 39.9) {
      return 'OBESIDADE1';
    } else {
      return 'OBESIDADE3';
    }
  };

  return (
    <div>
      <h2>Calculadora de IMC</h2>

      <div>
        <label>Peso (kg):</label>
        <input
          min="0"
          value={peso}
          onChange={(e) => {
            const pesoValor = parseFloat(e.target.value) || 0; // Set to 0 if empty
            setPeso(pesoValor);
          }}
        />
      </div>

      <div>
        <div>
          <label>Altura (cm):</label>
          <input
            min="0" 
            value={altura}
            onChange={(e) => {
              const alturaValor = parseFloat(e.target.value) || 0;
              setAltura(alturaValor);
            }}
          />
        </div>

      </div>

      <button onClick={calcularImc}>Calcular</button>

      {!novoUsuarioAdicionado && <HistoricoImc />}
      {novoUsuarioAdicionado && <HistoricoImc />}
    </div>
  );
};

export default FormImc;
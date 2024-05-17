import React, { useContext, useEffect, useState } from 'react';
import '../styles/estilomenu.css';
import { TokenContext } from '../configuracao/TokenContext';

const Menu = () => {
  const { getToken } = useContext(TokenContext);
  const currentToken = getToken('token');

  // Use o estado local para armazenar o token
  const [token, setToken] = useState(currentToken);

  useEffect(() => {
    // Atualize o estado local apenas quando o token mudar
    setToken(currentToken);
    console.log('Componente re-renderizado!');
  }, [currentToken]);

  return (
    <header>
      <nav>
        <ul className="menu">
          <li>
            {token !== null ? (
              <a href="/home">Início</a>
            ) : (
              <span>Início</span>
            )}
          </li>
          <li>
            {token !== null ? (
              <a href="/agua">Calcula Consumo Água</a>
            ) : (
              <span>Calcula Consumo Água</span>
            )}
          </li>
          <li>
            {token !== null ? (
              <a href="/imc">Calcula IMC</a>
            ) : (
              <span>Calcula IMC</span>
            )}
          </li>
          <li>
            {token !== null ? (
              <a href="/integrantes">Integrantes</a>
            ) : (
              <span>Integrantes</span>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;

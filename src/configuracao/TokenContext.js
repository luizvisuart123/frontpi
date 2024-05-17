import React, { createContext, useState, useEffect } from 'react';
import { setLocalStorageItem, getLocalStorageItem } from '../configuracao/localStorage';

const TokenContext = createContext(null);

const TokenProvider = ({ children }) => {
    const [initialToken, setInitialToken] = useState('');
    const [token] = useState(null);

  // Funções para atualizar o token (substitua pela lógica de autenticação)
  const setToken = (newToken) => {
    //setInitialToken(newToken);
    console.log("Entrou em setToken: " + newToken);
    setLocalStorageItem("token", newToken);
  };


  const getToken = () => {
    return getLocalStorageItem('token');
  }

  return (
    <TokenContext.Provider value={{ initialToken, setToken, getToken  }}>
      {children}
    </TokenContext.Provider>
  );
};

export { TokenContext, TokenProvider };

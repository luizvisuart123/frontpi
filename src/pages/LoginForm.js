import React, { useState, useContext } from 'react';
import '../styles/LoginForm.css';
import axios from 'axios';
import { TokenContext } from '../configuracao/TokenContext';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null); // Adiciona estado para erro de login
  const [showPopup, setShowPopup] = useState(true);

  const { setToken, getToken } = useContext(TokenContext);
  const handleClose = () => setShowPopup(false); // Fecha o popup

  const handleLogin = async () => {

    try {
      const config = {
        headers: {
          'Origin': 'http://localhost:3000' // Substitua pela origem do seu front-end
        }
      };
      const response = await axios.post('http://localhost:8080/login', {
        username,
        password,
      }, config);
      if (response.status === 200) {
        const token = response.data;
        console.log(token);
        setLoginError(null); // Limpa o erro de login
        setToken(token); // Atualiza o token no contexto
      } else {
        setLoginError('Login inválido'); // Define a mensagem de erro
        console.error('Não entrou no IF');
      }
    } catch (error) {
      console.error('Error fetching data from API:', error.message);
      setLoginError('Erro ao efetuar login'); // Define a mensagem de erro genérico
    }
    setShowPopup(false); // Fecha o popup após o login
  };

  const currentToken = getToken('token'); // Verifica se há token existente

  return (
    <>
      { // Ocultar popup se houver token
        !currentToken && (
          <button onClick={handleLogin}>Login</button>
        )
      }
      {
        !currentToken && (
          <div className="login-popup">
            <div className="login-popup-content">
              <h2>Login</h2>
              <form>
                <label>Username:</label>
                <input type="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label>Senha:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                {loginError && <p className="error-message">{loginError}</p>}
                <button type="button" onClick={handleLogin}>Entrar</button>
              </form>
              <button type="button" onClick={handleClose}>Fechar</button>
            </div>
          </div>
        )
      }
    </>
  );
};

export default LoginForm;

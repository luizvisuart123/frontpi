import React, { useState } from 'react';
import '../styles/LoginForm.css'; // Importe o arquivo CSS
import axios from 'axios';

const LoginForm = () => {

  const [username, setUsername] = useState('');
  const [showPopup, setShowPopup] = useState(true); // Gerencia a visibilidade do popup
  const [password, setPassword] = useState(''); // Armazena a senha do usuário
  const [resultado, setResultado] = useState('');

  const handleClose = () => setShowPopup(resultado !== null); // Fecha o popup
  const handleLogin = async () => {
    try {
        const config = {
          headers: {
            'Origin': 'http://localhost:3000' // Replace with your front-end origin
          }
        };
        const response = await axios.post('http://localhost:8080/login', {
          username,
          password,
        }, config);
        setResultado(response.data);
        console.log(resultado);
        console.log('Authentication successful:', response.data);
      } catch (error) {
        console.error('Error fetching data from API:', error.message);
      }
    
    setShowPopup(resultado === null); // Fecha o popup após o login
  };

  return (
    <>
      <button onClick={() => setShowPopup(true)}>Login</button>

      {showPopup && (
        <div className="login-popup">
          <div className="login-popup-content">
            <h2>Login</h2>
            <form>
              <label>Username:</label>
              <input
                type="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label>Senha:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="button" onClick={handleLogin}>Entrar</button>
            </form>
            <button type="button" onClick={handleClose}>Fechar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginForm;

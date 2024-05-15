import React, { useState } from 'react';
import '../styles/LoginForm.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [showPopup, setShowPopup] = useState(true);
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleClose = () => setShowPopup(false); // Fecha o popup

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
      if (response.status === 200) {
        const token = response.data;
        console.log(token);
        // Se quiser armazenar o token no Redux, use o reducer
        dispatch({ type: 'LOGIN_SUCCESS', payload: token });
      } else {
        console.error('Não entrou no IF');
      }
    } catch (error) {
      console.error('Error fetching data from API:', error.message);
    }
    setShowPopup(false); // Fecha o popup após o login
  };

  return (
    <>
      <button onClick={handleLogin}>Login</button>
      {
        showPopup && (
          <div className="login-popup">
            <div className="login-popup-content">
              <h2>Login</h2>
              <form>
                <label>Username:</label>
                <input type="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label>Senha:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
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

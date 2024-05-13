import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [resultado, setResultado] = useState('');

  const loginUser = async () => {
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
      console.log('Authentication successful:', response.data);
      console.log(resultado);
    } catch (error) {
      console.error('Error fetching data from API:', error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={loginUser}>Login</button>
    </div>
  );
};

export default Login;

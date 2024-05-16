import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const token = useSelector(state => state.auth.token);

  const handleGetUser = async () => {
    try {
      const response = await axios.get('http://localhost:8080/usuarios', {
        headers: {
          Authorization: `Bearer ${token}`, // Utilize o token no cabeçalho da requisição
        },
      });

      console.log(response.data); // Dados do usuário
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={handleGetUser}>Obter dados do usuário</button>
    </div>
  );
};

export default Profile;

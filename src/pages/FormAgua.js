import React, { useContext } from 'react';
import { TokenContext } from '../configuracao/TokenContext';


const FormAgua = () => {
  //const { token } = useContext(TokenContext);
  const { getToken } = useContext(TokenContext);


  return (
    <main>
      <p>.</p>
      <p>.</p>
      <h1>Conteúdo</h1>
      <p>Formulário Agua </p>


      <div>
        {getToken('token')}
      </div>
    </main>
  );
};


export default FormAgua;
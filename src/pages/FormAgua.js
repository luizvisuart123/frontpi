import React from 'react';
import { useSelector } from 'react-redux';


const FormAgua = () => {
    const tokenGlobal = useSelector((state) => state.token.value);
    
    return (
        <main>
            {/* Conteúdo central */}
            <p>.</p>
            <p>.</p>
            <h1>Conteúdo</h1>
            <p>Formulário Agua </p>
            <p>Formulário Agua </p>
            <p>Formulário Agua </p>
            <p>Formulário Agua </p>
            <p>Formulário Agua </p>
            <p>Formulário Agua </p>
            <h1>Token Global: {tokenGlobal}</h1>
        </main>
    );
};

export default FormAgua;
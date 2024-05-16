import React, { useState, useEffect } from 'react';
import api from '../services/api'; // Caminho para o seu arquivo api.js


const FormImc = () => {
    //const token = useSelector((state) => state.token.token);
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await api.get('/integrantes'); // Rota da sua API
                setData(response.data);
                
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            {/* Renderize os nomes da API aqui */}
            <p>.</p>
            <p>.</p>
            {data.map((name) => (
                <div key={name}>
                    <p>{name}</p>
                </div>
            ))}
        </div>
    );
};

export default FormImc;
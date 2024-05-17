// routes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importe os componentes do React Router
import FormAgua from '../pages/FormAgua';
import FormImc from '../pages/FormImc';
import Integrantes from '../pages/Integrantes';
import LoginForm from '../pages/LoginForm';  
import Home from "../pages/Home";



const AppRoutes = () => {
  return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginForm />} /> {/* Rota para a página inicial */}
                <Route path="/agua" element={<FormAgua />} /> {/* Rota para o cálculo de água */}
                <Route path="/imc" element={<FormImc />} /> {/* Rota para o cálculo de IMC */}
                <Route path="/integrantes" element={<Integrantes />} /> {/* Rota para o Integrantes */}
                <Route path="/home" element={<Home />} />
                {/* Adicione outras rotas conforme necessário */}
            </Routes>
        </Router>
  );
};

export default AppRoutes;

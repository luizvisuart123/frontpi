// routes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importe os componentes do React Router
import FormAgua from '../pages/FormAgua';
import FormImc from '../pages/FormImc';
import Home from '../pages/Home';
import Integrantes from '../pages/Integrantes';



const AppRoutes = () => {
  return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} /> {/* Rota para a página inicial */}
                <Route path="/agua" element={<FormAgua />} /> {/* Rota para o cálculo de água */}
                <Route path="/imc" element={<FormImc />} /> {/* Rota para o cálculo de IMC */}
                <Route path="/integrantes" element={<Integrantes />} /> {/* Rota para o Integrantes */}
                {/* Adicione outras rotas conforme necessário */}
            </Routes>
        </Router>
  );
};

export default AppRoutes;

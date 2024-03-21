// Menu.js

import React from 'react';
import '../styles/estilomenu.css'; // Importe o arquivo CSS

const Menu = () => {
  return (
    <header>
      <nav>
        <ul className="menu">
          <li><a href="/">Início</a></li>
          <li><a href="/agua">Calcula Consumo Água</a></li>
          <li><a href="/imc">Calcula IMC</a></li>
          <li><a href="/integrantes">Integrantes</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;


import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './configuracao/store'; // Importe a função configureStore
import App from './App';

const storeGlobal = store; // Chame a função configureStore para criar o store

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={storeGlobal}>
    <App />
  </Provider>
);

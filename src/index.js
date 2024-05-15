import React from 'react';
import { createRoot } from 'react-dom/client'; // Import from react-dom/client
import { Provider } from 'react-redux';
import configureStore  from './configuracao/store';
import App from './components/App'; // Import your main application component

const store = configureStore; // Create the store

const root = createRoot(document.getElementById('root')); // Create a root element

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

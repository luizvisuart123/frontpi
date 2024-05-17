import React from 'react';
import { createRoot } from 'react-dom/client';
import store from './configuracao/store';
import { TokenProvider } from './configuracao/TokenContext'; 
import { Provider } from 'react-redux';
import App from './App';

// ... outras importações

const storeGlobal = store; // Se você usa Redux, armazene o store aqui
const root = createRoot(document.getElementById('root'));

root.render(
    <TokenProvider> {/* Envolve a aplicação com o TokenProvider */}
        {storeGlobal ? (
            <Provider store={storeGlobal}>
                <App />
            </Provider>
        ) : (
            <App />
        )}
    </TokenProvider>
);

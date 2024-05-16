
import { configureStore } from '@reduxjs/toolkit';

// Reducer para o estado do token
const tokenReducer = (state = { value: '' }, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      console.log('Novo token:', action.payload);
      return { value: action.payload };
    case 'LOGOUT':
      return { value: '' };
    default:
      console.log('token guardado:', action.payload);
      return state;
  }
};

const store = configureStore({
  reducer: {
    token: tokenReducer, // Adicione o seu reducer aqui
  },
});

export default store;


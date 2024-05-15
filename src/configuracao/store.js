
import { configureStore } from '@reduxjs/toolkit';

// Reducer para o estado do token
const tokenReducer = (state = { value: '' }, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { value: action.payload };
    case 'LOGOUT':
      return { value: '' };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: {
    token: tokenReducer, // Adicione o seu reducer aqui
  },
});

export default store;


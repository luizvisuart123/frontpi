import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null, // Valor inicial do token (null)
};

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload; // Atualiza o token com o payload da action
    },
    clearToken(state) {
      state.token = null; // Limpa o token
    },
  },
});

export const { setToken, clearToken } = tokenSlice.actions;
export default tokenSlice.reducer;

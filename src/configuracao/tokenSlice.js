// tokenSlice.js

import { createSlice } from '@reduxjs/toolkit';

const tokenSlice = createSlice({
  name: 'token',
  initialState: { value: '' },
  reducers: {
    setTokenValue: (state, action) => {
      state.value = action.payload;
    },
    // outras ações do seu slice
  },
});

export const { setTokenValue } = tokenSlice.actions;

export default tokenSlice.reducer;

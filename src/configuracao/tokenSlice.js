import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: null, // Inicialmente o token está como null
};

const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.value = action.payload;
        },
        removeToken: (state) => {
            state.value = null;
        },
    },
});

export const { setToken, removeToken } = tokenSlice.actions;
export default tokenSlice.reducer;

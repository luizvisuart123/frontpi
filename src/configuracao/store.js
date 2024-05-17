import tokenReducer from '../configuracao/tokenSlice';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';


const rootReducer = combineReducers({
    token: tokenReducer,
    // Outros reducers da sua aplicação
});

export default configureStore({
    reducer: rootReducer,
});

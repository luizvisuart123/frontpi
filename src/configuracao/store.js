import { createStore } from 'redux';
import rootReducer from './reducers'; // Importe o reducer principal

const store = createStore(rootReducer);

export default store;

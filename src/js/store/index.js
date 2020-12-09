import { createStore } from 'redux';
import rootReducer from '../reducers/index';

// store is the result of calling createStore and it takes reducer as first argument
// you may also pass initial state to createStore

//  STATE IN REDUX COMES FROM REDUCERS // REDUCERS PRODUCE THE STATE OF YOUR APPLICATION
const store = createStore(rootReducer); 

export default store;
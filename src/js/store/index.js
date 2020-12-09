import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import { forbiddenWordsMiddleware } from "../middleware";

// store is the result of calling createStore and it takes reducer as first argument
// you may also pass initial state to createStore

//  STATE IN REDUX COMES FROM REDUCERS // REDUCERS PRODUCE THE STATE OF YOUR APPLICATION
const store = createStore(
    rootReducer,
    applyMiddleware(forbiddenWordsMiddleware)); 

export default store;
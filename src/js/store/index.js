import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';
import { forbiddenWordsMiddleware } from "../middleware";
import thunk from 'redux-thunk';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// store is the result of calling createStore and it takes reducer as first argument
// you may also pass initial state to createStore

//  STATE IN REDUX COMES FROM REDUCERS // REDUCERS PRODUCE THE STATE OF YOUR APPLICATION
const store = createStore(
    rootReducer,
    storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, thunk))
    ); 

export default store;
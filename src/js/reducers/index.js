// what is a reducer? 
// reducer is just a javascript function that takes two arguments: current State and action

import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
    articles: []
};

// This is wrong because our reducer breaks the Redux principle: IMMUTABILITY
// Arrays.prototype.push is impure function. It modifies the original Array.
// function rootReducer(state = initialState, action){
//     if(action.type == ADD_ARTICLE){
//         state.articles.push(action.payload);  
//     }
//     return state;
// };



function rootReducer(state = initialState, action){
    if(action.type == ADD_ARTICLE){
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }
    return state;
};


export default rootReducer;
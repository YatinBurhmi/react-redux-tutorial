// what is a reducer? 
// reducer is just a javascript function that takes two arguments: current State and action

const initialState = {
    articles: []
};

function rootReducer(state = initialState, action){
    return state;
};

export default rootReducer;
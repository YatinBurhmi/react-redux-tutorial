// the only way to change the state is by sending a signal to the store. This signal is action.
// So, dispatching an action means sending out a signal to the store

import { ADD_ARTICLE } from '../constants/action-types';

export function addArticle(payload){
    return {
        type: ADD_ARTICLE,  // type property drives how a state should change and its always required by redux
        payload // payload prop describes what should change and can be omitted     
    }
}

export function getData(){
    return function(dispatch){
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
            dispatch({ type: "DATA_LOADED", payload: json});
        });
    }
}
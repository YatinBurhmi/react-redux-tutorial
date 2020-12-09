function forbiddenWordsMiddleware({ dispatch }){
    return function(next){
        return function(actiom){
            // do your stuff
            return next(action);
        }
    }
}
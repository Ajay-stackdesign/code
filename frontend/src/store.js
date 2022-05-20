import { createStore, combineReducers, applyMiddleware } from "redux"

import thunk from "redux-thunk"


import { composeWithDevTools } from "redux-devtools-extension"
import { movieCreateReducer, movieGetreducer } from "./reducer/movieReducer"



const reducer = combineReducers({
    movie: movieGetreducer,
    movieCreate: movieCreateReducer
})

let initialStage = {}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialStage,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store
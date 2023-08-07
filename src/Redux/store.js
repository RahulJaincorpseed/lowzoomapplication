import { combineReducers, createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { counterReducer } from "./Reducer/CounterReducer"
import { authReducer } from "./Reducer/AuthReducer"

const rootReducer = combineReducers({
  counterReducer,
  authReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

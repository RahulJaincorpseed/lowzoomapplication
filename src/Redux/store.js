import { combineReducers, createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { counterReducer } from "./Reducer/CounterReducer"
import { authReducer } from "./Reducer/AuthReducer"
import { SignUpReducer } from "./Reducer/SIgnUpReducer"
import { companyDataReducer } from "./Reducer/CompanyReducer"

const rootReducer = combineReducers({
  counterReducer,
  authReducer,
  SignUpReducer,
  companyDataReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { companySlice } from "./Slices/CompanySlice";



const reducers = combineReducers({
    company: companySlice

});

export const store = configureStore({
    reducer: reducers
}) 






















// import { configureStore } from "@reduxjs/toolkit"
// import { combineReducers } from "redux"
// import AuthSlice from "./Slices/AuthSlice"
// import UsersSlice from "./Slices/UsersSlice"
// import persistReducer from "redux-persist/es/persistReducer"
// import storage from "redux-persist/lib/storage"
// import persistStore from "redux-persist/es/persistStore"
// import LeadSlice from "./Slices/LeadSlice"
// import NotificationSlice from "./Slices/NotificationSlice"
// import { getDefaultMiddleware } from '@reduxjs/toolkit';
// import TicketSlice from "./Slices/TicketSlice"
// import ForgetPasswordSlice from "./Slices/ForgetPasswordSlice"
// import SignUpSlice from "./Slices/SignUpSlice"

// const reducers = combineReducers({
//   auth: AuthSlice,
//   user: UsersSlice,
//   leads: LeadSlice,
//   notify: NotificationSlice,
//   tickets: TicketSlice,
//   password: ForgetPasswordSlice,
//   signup: SignUpSlice
// })

// const persistConfig = {
//   key: "root",
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, reducers)

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
// })

// export const persistor = persistStore(store)

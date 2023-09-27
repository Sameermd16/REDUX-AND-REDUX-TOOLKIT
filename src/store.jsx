import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./features/cake/cakeSlice";
import icecreamReducer from './features/icecream/icecreamSlice'
import userReducer from './features/users/userSlice'
import { logger } from 'redux-logger'

export const store = configureStore({
    reducer: {
        cakeReducer,
        icecreamReducer,
        userReducer
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(logger)
})

console.log(store)
// console.log(store.reducer.cakeReducer)
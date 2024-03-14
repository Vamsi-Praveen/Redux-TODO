import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "./counterSlice"
import shoppingSlice from "./shoppingSlice"
import todoSlice from "./todoSlice"


export const store = configureStore({
    reducer: {
        counter: counterSlice,
        cart: shoppingSlice,
        todo: todoSlice
    }
})
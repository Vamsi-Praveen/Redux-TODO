import { createSlice } from "@reduxjs/toolkit";

const shoppingSlice = createSlice({
    name: 'shoppingcart',
    initialState: {
        cart:[],
        totalPrice: 0
    },
    reducers: {
        addToCart: ((state, actions) => {
            state.cart.push(actions.payload.name);
            state.totalPrice+= actions.payload.price
        })
    }
})


export const { addToCart } = shoppingSlice.actions;

export default shoppingSlice.reducer
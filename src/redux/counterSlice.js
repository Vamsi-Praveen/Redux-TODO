import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: { count: 0 },
    reducers: {
        increment: (state) => {
            if(state.count!=10)
                state.count += 1;
        },
        decrement: (state) => {
            if(state.count>0)
                state.count -= 1;
        }
    }
})


export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer
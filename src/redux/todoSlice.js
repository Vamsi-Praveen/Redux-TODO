import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todo: []
};

const todoSlice = createSlice({
    initialState: initialState,
    name: 'todo',
    reducers: {
        addTodo: ((state, action) => {
            state.todo.push({
                id: nanoid(),
                task: action.payload
            })
        }),
        removeTodo: ((state, action) => {
            state.todo = state.todo.filter((el) => el.id != action.payload)
        }),
        editTodo: ((state, action) => {
            const index = state.todo.findIndex((task) => task.id === action.payload.id)
            if (index != -1) {
                state.todo[index] = {
                    task: action.payload.task,
                    id: action.payload.id
                };
            }
        })
    }
})


export const { addTodo, removeTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
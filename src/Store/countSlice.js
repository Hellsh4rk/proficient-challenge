import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
    name: "count",
    initialState: 0,
    reducers: {
        increment: state => {
            return state + 1;
        },
        decrement: state => {
            return state - 1;
        },
        reset: state => {
            return state = 0;
        }
    },
});

export const { increment, decrement, reset } = countSlice.actions;

export default countSlice.reducer;
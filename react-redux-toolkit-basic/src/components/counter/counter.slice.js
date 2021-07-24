import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 5, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, { payload }) {
      state.value += payload;
    },
    decrement(state, { payload }) {
      state.value -= payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const { increment, decrement, toggle } = counterSlice.actions;
export const selectCount = (state) => state.counter.value;
export const selectShow = (state) => state.counter.showCounter;

export default counterSlice.reducer;

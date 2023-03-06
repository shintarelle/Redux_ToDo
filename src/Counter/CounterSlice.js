import { createSlice } from "@reduxjs/toolkit";

//create reducer
export const CounterSlice =  createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
})

console.log('CounterSlice', CounterSlice)

export const { increment, decrement, incrementByAmount } = CounterSlice.actions
export default CounterSlice.reducer;

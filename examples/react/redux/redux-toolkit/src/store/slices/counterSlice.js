import { createSlice } from '@reduxjs/toolkit';


const initialState = { count: 0 }

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incremenent: (state) => {
      state.count += 1
    },
    decremenent: (state) => {
      state.count -= 1
    },
    incremenentByAmount: (state, { payload }) => {
      state.count += payload
    }
  }
})

export const { incremenent, decremenent, incremenentByAmount } = counterSlice.actions

export const selectCount = state => state.counter.count

export default counterSlice.reducer

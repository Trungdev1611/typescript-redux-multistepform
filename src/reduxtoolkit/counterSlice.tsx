import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: number = 0
const counterSlice = createSlice({
    name: 'counterTypescript',
    initialState,
    reducers: {
        increment: (state, action) => {
            state = state + 1
            return state
        },
        decrement: (state, action) => {
            state = state - 1
            return state

        },
        amount: (state, action) => {
            state = state + action.payload
            return state
        },
        reset: (state, action) => {
            return 0
        }

    }
})
export const { increment, decrement, amount, reset } = counterSlice.actions
export default counterSlice.reducer
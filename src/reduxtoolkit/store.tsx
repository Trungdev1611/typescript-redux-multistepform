import { configureStore } from "@reduxjs/toolkit";
import countReducers from "./counterSlice";

const store = configureStore({
    reducer: {
        count: countReducers
    }
})

export default store

//khai bao type cua state khi lay selector
export type RootState = ReturnType<typeof store.getState>

//type cua useDispatch
export type AppDispatch = typeof store.dispatch
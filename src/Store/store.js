import { configureStore } from "@reduxjs/toolkit";
import feedReducer from '../features/feedSlice.js'


export const store = configureStore({
    reducer:{
        Feed:feedReducer,
    }
})
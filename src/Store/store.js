import { configureStore } from "@reduxjs/toolkit";
import feedReducer from '../features/feedSlice.js'
import hamburgurStatusReducer from "../features/hamburgurStatusSlice.js";

export const store = configureStore({
    reducer:{
        Feed:feedReducer,
        hamburgurStatus:hamburgurStatusReducer
    }
})
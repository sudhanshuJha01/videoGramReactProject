import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    feed:'Home'
}


export const feedSlice = createSlice({
    name:"Feed",
    initialState,
    reducers:{
        changeFeed:(state , action)=>{
            state.feed=action.payload
        }
    }
})

export const {changeFeed} = feedSlice.actions;
export default feedSlice.reducer;
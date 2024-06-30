import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    status:false
}


export const hamburgurStatusSlice = createSlice({
    name:"hamburgurStatus",
    initialState,
    reducers:{
        changeHamStatus:(state , action)=>{
            state.status = !(action.payload.status)
        }
    }

})

export const {changeHamStatus} = hamburgurStatusSlice.actions;
export default hamburgurStatusSlice.reducer;

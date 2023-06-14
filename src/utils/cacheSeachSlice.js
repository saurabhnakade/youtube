import { createSlice } from "@reduxjs/toolkit";

const cacheSearchSlice=createSlice({
    name:"cache",
    initialState:{},
    reducers:{
        cacheAdd:(state,action)=>{
            state=Object.assign(state,action.payload)
        }
    }
})

export const {cacheAdd}=cacheSearchSlice.actions;
export default cacheSearchSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
let mySlice=createSlice({
    name:'biswo',
    initialState:{input:{}},
    reducers:{
       submitFun:(state,action)=>{
         state.input=action.payload

       } 
    }
})
export const {submitFun}=mySlice.actions
export default mySlice.reducer
import { configureStore } from "@reduxjs/toolkit";
import myreducer from '../createSlice/createSlice'
let myStore=configureStore({
    reducer:{
        myinput:myreducer
    }
})
export default myStore
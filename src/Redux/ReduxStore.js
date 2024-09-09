import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./CounterSlice";

const store=configureStore({
   reducer:{
    counterReducer:counterSlice
   }

})



export default store
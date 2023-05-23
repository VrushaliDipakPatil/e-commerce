import { configureStore } from "../../node_modules/@reduxjs/toolkit/dist/index";
import reduxReducer from "./ReduxSlice"



export const store = configureStore({
    reducer:{
        slice : reduxReducer,
    },
})
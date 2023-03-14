import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./admin";


export const store = configureStore({
    reducer : {
        admin : useReducer
    }
})
import {configureStore} from "@reduxjs/toolkit";
import librosReducer from "../slice/librosSlice.js";
export default configureStore({
    reducer: {
        libros: librosReducer,
    }
    });
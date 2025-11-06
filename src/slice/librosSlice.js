import {createSlice} from "@reduxjs/toolkit";
import {get} from "../api_libros/api-libro.js";
import * as url from "../constants/url-helper.jsx";
export const LibrosSlice = createSlice({
    name: 'libros',
    initialState: {
        respuesta: {},
        error: "",
    },
    reducers:{
        setRespuesta: (state, action) => {
            state.respuesta = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const {setRespuesta, setError} = LibrosSlice.actions;
export const visualizarLibros = () => async (dispatch) => {
try{
    const respuesta = await get(url.URL_LISTA_LIBROS);
    dispatch(setRespuesta(respuesta));
}catch (error){
    dispatch(setError(error));
}
};

export default LibrosSlice.reducer;
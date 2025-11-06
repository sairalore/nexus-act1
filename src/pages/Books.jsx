import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {visualizarLibros} from "../slice/librosSlice.js";

export default function Books(){
    const listaLibros =useSelector((state) => state.libros.respuesta);
    const dispatch = useDispatch();
    const [libros, setLibros] = useState([]);

    useEffect(() => {
        dispatch(visualizarLibros());
    },[]);

    useEffect(() => {
        setLibros(listaLibros);
    },[listaLibros]);

    return(
        <div>
            Página 2
        </div>
    );
}
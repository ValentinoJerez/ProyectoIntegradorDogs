import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import { getByName, getInfoDogs } from "../../Redux/Actions/actions";

import style from "../SearchBar/SearchBar.module.css"

function SearchBar({setCurrentPage}){
    const dispatch = useDispatch()
    const [searchRaza, setSearchRaza] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    
    function changeHandler(event){
        //No resetea la pagina
        event.preventDefault()
        //Setea 
        setSearchRaza(event.target.value.toLowerCase())
    }
    
    //Search filtro BackEnd
    async function submitHandler(event){
        event.preventDefault()
        
        try {
            const response = await dispatch(getByName(searchRaza));
            if(response.payload.length === 0){
                setErrorMessage(`No hay raza con el nombre "${searchRaza}"`);
            } else {
                setErrorMessage("");
            }
        } catch (error) {
            console.error("Error al buscar por nombre:", error);
        }
        //Limpia estado
        setSearchRaza("")
        setCurrentPage(0);
    }

    function clearHandler(){
        dispatch(getInfoDogs())
        setErrorMessage("")
    }
    
    return(
        <div>
            <input type="Search" placeholder="Search" value={searchRaza} onChange={(event) => changeHandler(event)}/>
            <button type="Submit" onClick={submitHandler} >Search</button>
            <button onClick={clearHandler}>Clear</button>
            {errorMessage && <h2>{errorMessage}</h2>}
        </div>
    )
}

export default SearchBar;
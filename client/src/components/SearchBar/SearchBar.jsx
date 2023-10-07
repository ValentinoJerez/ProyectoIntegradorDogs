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
        setCurrentPage(0)
        setErrorMessage("")
    }
    
    return(
        <div className={style.group}>
            <svg className={style.icon} aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
            <input placeholder="Search" type="search" value={searchRaza} onChange={(event) => changeHandler(event)} className={style.input}/>

            <button type="Submit" onClick={submitHandler} className={style.button}><span className={style.span}>🔎</span></button>
            
            <button onClick={clearHandler}>Clear</button>
            {errorMessage && <h2>{errorMessage}</h2>}
        </div>
    )
}

export default SearchBar;
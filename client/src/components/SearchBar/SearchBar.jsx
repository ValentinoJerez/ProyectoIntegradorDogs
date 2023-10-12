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
            const response = await dispatch(getByName(searchRaza));
            //Verifica que contenga algo
            if(response.payload.length === 0){
                setErrorMessage(`No hay raza con el nombre "${searchRaza}"`);
            } else {
                setErrorMessage("");
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
            
            <button type="Submit" onClick={submitHandler} className={style.button}>🔎</button>
            
            <button type="" onClick={clearHandler} className={style.button}>🗑️</button>
            {errorMessage &&
            <div className={style.errorContainer}>
            <div className={style.error}><div class="error__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none"><path fill="#393a37" d="m13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z"></path></svg></div>
            <div className={style.title}>{errorMessage}</div></div>
            </div>}
        </div>
    )
}

export default SearchBar;
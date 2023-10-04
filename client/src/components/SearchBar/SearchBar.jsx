import { useDispatch } from "react-redux";
import { useState } from "react";

import { getByName, getInfoDogs } from "../../Redux/Actions/actions";

import style from "../SearchBar/SearchBar.module.css"

function SearchBar({setCurrentPage}){
    const dispatch = useDispatch()
    const [searchRaza, setSearchRaza] = useState("");

    
    function changeHandler(event){
        //No resetea la pagina
        event.preventDefault()
        //Setea 
        setSearchRaza(event.target.value.toLowerCase())
    }
    
    //Search filtro BackEnd
    function submitHandler(event){
        event.preventDefault()
        dispatch(getByName(searchRaza))
        //Limpia estado
        setSearchRaza("")
        setCurrentPage(0);
    }
    
    function clearHandler(){
        dispatch(getInfoDogs())
    }
    
    return(
        <div>
            <input type="Search" placeholder="Search" value={searchRaza} onChange={(event) => changeHandler(event)}/>
            <button type="Submit" onClick={submitHandler}>Search</button>
            <button onClick={clearHandler}>Clear</button>
        </div>
    )
}

export default SearchBar;
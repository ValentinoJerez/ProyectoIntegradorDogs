import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"


import style from "../SearchBar/SearchBar.module.css"

function SearchBar(){
    //Cambia el estado 
    // const [name, setName] = useState("")
    // const dispatch = useDispatch()

    // const searchName = (name) => {
    //     dispatch(searchDog(name))
    //     setName("")
    // } 

    //Hago que el valor se guarde
//    function changeHandler(event){
//     //Previene bug 
//     // event.preventDefault();

//     const {value} = event.target;
//     setName(value);
//     }

    return(
        <div>
            <input type="Text" placeholder="Search"/>
            <button>Search</button>
        </div>
    )
}

export default SearchBar;
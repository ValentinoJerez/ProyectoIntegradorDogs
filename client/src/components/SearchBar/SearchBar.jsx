import { useState } from "react";
import style from "../SearchBar/SearchBar.module.css"

function SearchBar(props){
    //Traigo la fn search
    const {search} = props
    //Estado local
    const [name, setName] = useState("")
  
    //Hago que el valor se guarde
   function changeHandler(event){
    //Previene bug 
    event.preventDefault();
    let input= event.target.value;
    setName(input);
 }

    return(
        <div>
            <input type="Search" placeholder="Search" onChange={changeHandler}/>
            <button onClick={search}>Search</button>
        </div>
    )
}

export default SearchBar;
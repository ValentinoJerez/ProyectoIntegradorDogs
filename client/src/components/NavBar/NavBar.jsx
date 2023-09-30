import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

import style from "../NavBar/NavBar.module.css"

function NavBar({changeHandler, submitHandler}){
    return(
        <div>
            <NavLink to="/Home">Home</NavLink>
            <NavLink to="/About">About</NavLink>
            <NavLink to="/">Exit</NavLink>
            {/* <SearchBar changeHandler={changeHandler} submitHandler={submitHandler}/> */}
        </div>
    )
}

export default NavBar;
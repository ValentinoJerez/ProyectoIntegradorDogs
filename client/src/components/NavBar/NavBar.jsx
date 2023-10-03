import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

import style from "../NavBar/NavBar.module.css"

function NavBar(){
    return(
        <div>
            <NavLink to="/Home">Home</NavLink>
            <NavLink to="/Create">Create your Dog</NavLink>
            <NavLink to="/About">About</NavLink>
            <NavLink to="/">Exit</NavLink>
        </div>
    )
}

export default NavBar;
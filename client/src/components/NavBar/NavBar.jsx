import SearchBar from "../SearchBar/SearchBar";

import style from "../NavBar/NavBar.module.css"

function NavBar({changeHandler, submitHandler}){
    return(
        <div>
            <SearchBar changeHandler={changeHandler} submitHandler={submitHandler}/>
        </div>
    )
}

export default NavBar;
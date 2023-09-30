
import style from "../SearchBar/SearchBar.module.css"

function SearchBar({changeHandler, submitHandler}){
    return(
        <div>
            <input type="Search" placeholder="Search" onChange={(event) => changeHandler(event)}/>
            <button type="Submit" onClick={submitHandler}>Search</button>
        </div>
    )
}

export default SearchBar;
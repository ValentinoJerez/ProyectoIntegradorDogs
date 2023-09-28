import style from "../SearchBar/SearchBar.module.css"

function SearchBar(props){
    //Traigo la fn search
    const {search} = props
    
  
    //Hago que el valor se guarde
   function changeHandler(event){
    //Previene bug 
    event.preventDefault();
    let input= event.target.value;
    setId(input);
 }

    return(
        <div>
            <input type="Search" placeholder="Search" onChange={changeHandler}/>
            <button onClick={search}>Search</button>
        </div>
    )
}

export default SearchBar;
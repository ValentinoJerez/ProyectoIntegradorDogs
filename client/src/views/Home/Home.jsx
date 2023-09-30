import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getByName, getInfoDogs } from "../../Redux/Actions/actions";

import NavBar from "../../components/NavBar/NavBar";
import Cards from "../../components/Cards/Cards";

import style from "../Home/Home.module.css"

function Home(){
    const dispatch = useDispatch() //Envio action al store
    const allDogs = useSelector((state) => state.allDogs) //Estado global
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
    }

    //Search filtro sobre estado
    //Creo estado local 
    // const [filtrados, setFiltrados] = useState(allDogs);


    // function submitHandler(event){
    //     //Devuelve los perros que incluyan lo que se busca 
    //     const filtrados = allDogs.filter(dogs => dogs.name.toLowerCase().includes(searchRaza))
    //     setFiltrados(filtrados)
    // }

    //GetAll
    useEffect(()=>{
        dispatch(getInfoDogs())
        //Desmotar componente, limpiar estado 
        // return (()=>{
        //     clearDetail()
        // })
    }, [dispatch])

    return (
        <div>
            <NavBar changeHandler={changeHandler} submitHandler={submitHandler}/>
            <h1>Home</h1>
            <Cards allDogs={allDogs}/> 
        </div>
    )
}

export default Home;
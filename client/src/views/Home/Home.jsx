import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getInfoDogs } from "../../Redux/Actions/actions";

import Cards from "../../components/Cards/Cards";
import NavBar from "../../components/NavBar/NavBar";

import style from "../Home/Home.module.css"

function Home(){
    const dispatch = useDispatch() //Envio action al store
    const allDogs = useSelector((state) => state.allDogs) //Estado global

    useEffect(()=>{
        dispatch(getInfoDogs())
        //Desmotar componente, limpiar estado 
        // return (()=>{
        //     clearDetail()
        // })
    }, [dispatch])

    return (
        <div>
            <h1>Home</h1>
            <Cards allDogs={allDogs}/> 
        </div>
    )
}

export default Home;
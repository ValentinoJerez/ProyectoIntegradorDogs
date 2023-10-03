import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getInfoDogs } from "../../Redux/Actions/actions";

import SearchBar from "../../components/SearchBar/SearchBar";
import Cards from "../../components/Cards/Cards";
import Paginado from "../../components/Paginado/Paginado";

import style from "../Home/Home.module.css"

function Home(){
    const dispatch = useDispatch() //Envio action al store
    const allDogs = useSelector((state) => state.allDogs) //Estado global
    const cards_Per_Page = 8 
    const [currentPage, setCurrentPage] = useState(0);
    
    //Paginado
    const prevPage = () => {
        console.log("prev")
    }

    const nextPage = () => {
        console.log("next");
    }

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
            <h1>Home</h1>
            <SearchBar />
            {/* Paginado */}
            <Paginado currentPage={currentPage} nextPage={nextPage} prevPage={prevPage}/>
            <Cards allDogs={allDogs}/> 
            {/* Filtros */}
        </div>
    )
}

export default Home;
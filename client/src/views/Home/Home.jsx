import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getInfoDogs } from "../../Redux/Actions/actions";

import SearchBar from "../../components/SearchBar/SearchBar";
import Cards from "../../components/Cards/Cards";
import Paginado from "../../components/Paginado/Paginado";

import style from "../Home/Home.module.css"

function Home(){
    const dispatch = useDispatch() //Envio action al store
    const allDogs = useSelector((state) => state?.allDogs) //Estado global
    
    
    //Paginado
    const [currentPage, setCurrentPage] = useState(0);
    const totalCards = allDogs.length; 
    const cardsPerPage = 8;
    const startIndex = currentPage * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const cardDogs = allDogs.slice(startIndex, endIndex); //Cards que quiero mostrar por pagina
    const totalPages = Math.ceil(totalCards / cardsPerPage);

    const prevPage = () => {
        if(currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

    const nextPage = () => {
        if(currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
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
            <Cards allDogs={cardDogs}/>
            {/* Filtros */}
            <Paginado totalPages={totalPages} currentPage={currentPage} cardDogs={cardDogs} nextPage={nextPage} prevPage={prevPage} />
        </div>
    )
}

export default Home;
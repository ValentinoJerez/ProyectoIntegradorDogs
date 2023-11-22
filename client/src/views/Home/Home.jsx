import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getInfoDogs, getTemperaments } from "../../Redux/Actions/actions";

import SearchBar from "../../components/SearchBar/SearchBar";
import Cards from "../../components/Cards/Cards";
import Paginado from "../../components/Paginado/Paginado";
import Filters from "../../components/Filters/Filters";

import style from "../Home/Home.module.css"

function Home(){
    //Envia action al store
    const dispatch = useDispatch(); 
    const allDogs = useSelector((state) => state?.allDogsCopy) //Estado global copia
    
    //Paginado
    const [currentPage, setCurrentPage] = useState(0);
    const totalCards = allDogs.length; 
    const cardsPerPage = 8;
    const startIndex = currentPage * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const cardDogs = allDogs.slice(startIndex, endIndex); //Cards que quiero mostrar por pagina
    const totalPages = Math.ceil(totalCards / cardsPerPage);

    //GetAll
    useEffect(()=>{
        dispatch(getInfoDogs())
    }, [dispatch])

    //Trae los temperamentos
    useEffect(()=>{
        dispatch(getTemperaments())
    }, [])

    const prevPage = () => {
        if(currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

    const nextPage = () => {
        if(currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
        window.scrollTo(0,0)
    }

    return (
        <div className={style.containerHome}>
            <SearchBar setCurrentPage={setCurrentPage}/>
            <Filters currentPage={setCurrentPage}/>
            <Cards allDogs={cardDogs}/>
            <Paginado totalPages={totalPages} currentPage={currentPage} cardDogs={cardDogs} nextPage={nextPage} prevPage={prevPage} />
        </div>
    )
}

export default Home;
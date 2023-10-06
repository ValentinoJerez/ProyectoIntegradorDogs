import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getInfoDogs, order, getTemperaments, filterApiDb, filterTemperaments, orderPeso } from "../../Redux/Actions/actions";

import SearchBar from "../../components/SearchBar/SearchBar";
import Cards from "../../components/Cards/Cards";
import Paginado from "../../components/Paginado/Paginado";
import FilterOrder from "../../components/FilterOrder";

import style from "../Home/Home.module.css"

function Home(){
    const dispatch = useDispatch(); //Envio action al store
    const allDogs = useSelector((state) => state?.allDogsCopy) //Estado global
    const allTemperaments = useSelector((state)=> state?.temperaments) 
    const [selectedTemperament, setSelectedTemperament] = useState("");
    
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
        //Desmotar componente, limpiar estado 
        // return (()=>{
        //     clearDetail()
        // })
    }, [dispatch])

    //Al iniciar trae los temperamentos
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

    //Filtro y Order
    function filterHandler(event){
        dispatch(filterApiDb())
    }
    function filterTemperament(event){
        const selectedValue = event.target.value;
        console.log(selectedValue);
        setSelectedTemperament(selectedValue);
        dispatch(filterTemperaments(selectedValue))
    }

    function orderHandler(event){
        dispatch(order(event.target.value))
    }
    function orderPesoHandler(event){
        dispatch(orderPeso(event.target.value))
    }

    return (
        <div>
            <h1>Home</h1>
            <SearchBar setCurrentPage={setCurrentPage}/>
            {/* Filtros */}
            <div>
            <select placeholder="Filter" onChange={filterHandler}>
                <option value="Api">Api</option>
                <option value="Base de Datos">Base de Datos</option>
            </select>
            <select placeholder="FilterTemperament" onChange={filterTemperament}>
                {allTemperaments.map((temperament) => (<option value={temperament.name} key={temperament.name} name={temperament.name}>{temperament.name}</option>))}
            </select>
            <select placeholder="Order" onChange={orderHandler}>
                <option value="Ascendente">A-Z</option>
                <option value="Descendente">Z-A</option>
            </select>
            <select placeholder="Order Peso" onChange={orderPesoHandler}>
                <option value="Mayor Peso">Mayor Peso</option>
                <option value="Menor Peso">Menor Peso</option>
            </select>
            </div>
            <Cards allDogs={cardDogs}/>
            <Paginado totalPages={totalPages} currentPage={currentPage} cardDogs={cardDogs} nextPage={nextPage} prevPage={prevPage} />
        </div>
    )
}

export default Home;
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
    const allDogs = useSelector((state) => state?.allDogsCopy) //Estado global copia
    const allTemperaments = useSelector((state)=> state?.temperaments) 
    const [selectedTemperament, setSelectedTemperament] = useState("");
    // componente Home, deberías usar filteredDogs en lugar de allDogs cuando quieras mostrar los perros que han pasado por el filtro de origen.
    
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
    function filterApi_Db(event){
        //Si es base de datos o api
        const value = event.target.value;
        // const filteredDogs = allDogs.filter((dog) => {
            //     if (value === "Api") {
        //         // Verificar si el ID es un número (API)
        //         return !isNaN(dog.id);
        //     } else if (value === "Base de Datos") {
        //         // Verificar si el ID contiene letras (BD)
        //         return /[a-zA-Z]/.test(dog.id);
        //     }
        //     // Si no retornar todos los perros
        //     return true;
        // });
        dispatch(filterApiDb(value))
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
        <div className={style.containerHome}>
            <SearchBar setCurrentPage={setCurrentPage}/>
            {/* Filtros */}
            <div>
            <select placeholder="Filter" onChange={filterApi_Db}>
                <option>Api/Base de Datos</option>
                <option value="Api">Api</option>
                <option value="Base de Datos">Base de Datos</option>
            </select>
            <select placeholder="FilterTemperament" onChange={filterTemperament}>
                <option>Temperaments</option>
                {allTemperaments.map((temperament) => (<option value={temperament.name} key={temperament.name} name={temperament.name}>{temperament.name}</option>))}
            </select>
            <select placeholder="Order" onChange={orderHandler}>
                <option>Order</option>
                <option value="Ascendente">A-Z</option>
                <option value="Descendente">Z-A</option>
            </select>
            <select placeholder="Order Peso" onChange={orderPesoHandler}>
                <option>Order Peso</option>
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
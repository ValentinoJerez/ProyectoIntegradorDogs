import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { order, filterApiDb, filterTemperaments, orderPeso } from "../../Redux/Actions/actions";

import style from "../Filters/Filters.module.css"

function Filters(){
    const allTemperaments = useSelector((state)=> state?.temperaments) 
    const [selectedTemperament, setSelectedTemperament] = useState("");
    const dispatch = useDispatch(); //Envio action al store

    function filterApi_Db(event){
        //Si es base de datos o api
        const value = event.target.value;
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
    
    return(
        <div className={style.selectContainer}>
            <select placeholder="Filter" onChange={filterApi_Db}>
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
    )
}

export default Filters;
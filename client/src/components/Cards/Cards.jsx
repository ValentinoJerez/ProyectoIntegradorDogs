import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getInfoDogs } from "../../Redux/Actions/actions";

import Card from "../Card/Card";

function Cards(){
    // const dogs = useSelector(state => state.dogs.dogs)
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     // Hacer la solicitud a la API y obtener los datos de perros
    // axios.get('https://api.thedogapi.com/v1/breeds').then(response => {
    //   dispatch(getInfoDogs(response.data)); // Almacenar los datos en el estado global
    // })}, [dispatch]);

    return(
        <div>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
};

export default Cards;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


function Detail(){
    //Permite acceder a los parametros de la URL
    const {id} = useParams();
    const [dogs, setDogs] = useState([])

    useEffect(()=>{ 
        async function fetchData(){
            const {data} = await axios.get(`http://localhost:3001/dogs/${id}`)
                setDogs(data);
        } 
        fetchData()
        return setDogs([]);
    }, []);

console.log(dogs);

    return(
        <div>
            <h1>{dogs?.name}</h1>
            <p>Id: {dogs?.id}</p>
            <p>Peso: {dogs.weight?.metric} kg</p>
            <p>Altura: {dogs.height?.metric} cm</p>
            <p>Criado para: {dogs?.bred_for}</p>
            <p>Grupo de Raza: {dogs?.breed_group}</p>
            <p>Esperanza de vida: {dogs?.life_span}</p>
            <p>Temperamento: {dogs?.temperament}</p>
            <p>Origen: {dogs?.origin}</p>
            <img src={`https://cdn2.thedogapi.com/images/${dogs.reference_image_id}.jpg`} alt="Image Dog"/>
        </div>
    )
}

export default Detail;
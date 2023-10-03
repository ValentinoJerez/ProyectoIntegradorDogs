import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


function Detail(){
    //Permite acceder a los parametros de la URL
    const {id} = useParams();
    const [dogs, setDogs] = useState([])

    useEffect(()=>{ 
        async function fetchData(){
            const {data} = await axios.get(`http://localhost:3001/dogs/${id}`)
            setDogs(data[0])
        } 
        fetchData()
        return setDogs({});
    }, []);

    return(
        <div>
            <h1>{dogs?.name}</h1>
            <p>{dogs.weight?.metric}</p>
            <p>{dogs.height?.metric}</p>
            <p>{dogs.bred_for}</p>
            <p>{dogs.breed_group}</p>
            <p>{dogs.life_span}</p>
            <p>{dogs.temperament}</p>
            <p>{dogs.origin}</p>
            <img src={dogs.reference_image_id} alt="Image Dog"/>
        </div>
    )
}

export default Detail;
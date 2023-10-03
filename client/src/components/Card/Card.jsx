import { useNavigate } from "react-router-dom"

import style from "../Card/Card.module.css"

function Card({ dogs }){
    //Informacion que quiero
    const {name, weight, temperament, reference_image_id} = dogs;
    const navigate = useNavigate();

    function navigateDetail(){
        navigate(`/Detail/${dogs.id}`);
    }

    return (
        <div>
            <div>
                <h1 onClick={navigateDetail}>{name}</h1>
                <p>{weight.metric}</p>
                <p>{temperament}</p>
                <img src={`https://cdn2.thedogapi.com/images/${reference_image_id}.jpg`} alt="Image Dog"/>
            </div>
        </div>
    )
}

export default Card;
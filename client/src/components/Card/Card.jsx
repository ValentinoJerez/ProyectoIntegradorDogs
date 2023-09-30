import { useNavigate } from "react-router-dom"

import style from "../Card/Card.module.css"

function Card({ dogs }){
    //Informacion que quiero
    const {name, weight, temperament, reference_image_id} = dogs

    function navigateDetail(){
        navigate(`/Detail/${id}`);
    }

    return (
        <div>
            <div>
                <h1 onClick={navigateDetail}>{name}</h1>
                <p>{weight.metric}</p>
                <p>{temperament}</p>
                <img src={reference_image_id}/>
            </div>
        </div>
    )
}

export default Card;
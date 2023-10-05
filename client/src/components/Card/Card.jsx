import { useNavigate } from "react-router-dom"

import DefaultImage from "../../assets/IMG_20181222_172509.jpg"
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
            <div onClick={navigateDetail} className={style.Card}>
                <h1 >{name}</h1>
                <p>Weight: {weight.metric}</p>
                <p>Temperament: {temperament}</p>
                {/* Me pregunto si hay una imagen, si no pongo una por default */}
                <img src={reference_image_id ? `https://cdn2.thedogapi.com/images/${reference_image_id}.jpg` : DefaultImage} alt="Image Dog"/>
            </div>
        </div>
    )
}

export default Card;
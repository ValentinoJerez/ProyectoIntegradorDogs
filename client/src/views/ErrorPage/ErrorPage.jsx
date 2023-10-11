import ImageError from "../../assets/Error500Dog.png"

import style from "../ErrorPage/ErrorPage.module.css"

function ErrorPage(){
    return(
        <div>
        <img src={ImageError} alt="Image Error" className={style.imageContainer}/>
        </div>
    )
}

export default ErrorPage;
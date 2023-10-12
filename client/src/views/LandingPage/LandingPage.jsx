import { useNavigate } from "react-router-dom"

import Dog from "../../assets/Dog-paw-cuate.png"

import style from "../LandingPage/LandingPage.module.css"

function LandingPage(){
    const navigate = useNavigate()

    function enterPage(){
        navigate("/Home")
    };

    return(
        <div className={style.container}>
            <div className={style.leftContent}>
            <h1 className={style.text}>Welcome to my page about dogs.</h1>
            <button className={style.btn} onClick={enterPage}><div>ENTER</div><svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" fill="none">
            <path d="M11.6801 14.62L14.2401 12.06L11.6801 9.5" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M4 12.0601H14.17" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M12 4C16.42 4 20 7 20 12C20 17 16.42 20 12 20" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg></button>
            </div>
            <img className={style.img} src={Dog} alt="Dog Enter" />
        </div>
    )
}

export default LandingPage;
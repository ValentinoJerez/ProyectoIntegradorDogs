import { useNavigate } from "react-router-dom"

import style from "../LandingPage/LandingPage.module.css"

function LandingPage(){
    const navigate = useNavigate()

    //Entrar en la pagina
    function enterPage(){
        navigate("/Home")
    };

    return(
        <div>
            <div>
            <h1>Landing Page</h1>
            <button onClick={enterPage}>Enter</button>
            </div>
        </div>
    )
}

export default LandingPage;
import Cards from "../../components/Cards/Cards";
import NavBar from "../../components/NavBar/NavBar";
import React, { useEffect } from "react";

import style from "../Home/Home.module.css"

function Home(){

    return (
        <div>
            <h1>Home</h1>
            <Cards /> 
        </div>
    )
}

export default Home;
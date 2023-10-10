import React from "react";

import Card from "../Card/Card";

import style from "../Cards/Cards.module.css"

function Cards({allDogs}){
    const dogsList = allDogs

    return(
        <div className={style.container}>
            {/* Verifico que haya algo en dogsList, si hay renderizo una carta*/}
            {dogsList?.map(dogs => <Card key={dogs.id} dogs={dogs}/>)}
        </div>
    )
};

export default Cards;
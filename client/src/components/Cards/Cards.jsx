import React, {useEffect} from "react";

import Card from "../Card/Card";

function Cards({allDogs}){
    const dogsList = allDogs

    return(
        <div>
            {/* Verifico que haya algo en dogsList, si hay renderizo una carta*/}
            {dogsList?.map(dogs => <Card key={dogs.id} dogs={dogs}/>)}
        </div>
    )
};

export default Cards;
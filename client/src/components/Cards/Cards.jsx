import Card from "../Card/Card";

function Cards(props){
    const {dogs} = props

    return(
        <div>
            {dogs.map((dog) => {
                <Card dog={dog}/>
            })}
        </div>
    )
}

export default Cards;
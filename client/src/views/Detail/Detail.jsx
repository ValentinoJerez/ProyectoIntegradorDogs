function Detail({ dogs }){
    const {weight, height, name, bred_for, breed_group, life_span, temperament, origin, reference_image_id} = dogs
    return(
        <div>
            <h1>{name}</h1>
            <p>{weight.metric}</p>
            <p>{height.metric}</p>
            <p>{bred_for}</p>
            <p>{breed_group}</p>
            <p>{life_span}</p>
            <p>{temperament}</p>
            <p>{origin}</p>
            <img src={reference_image_id} alt="Image Dog"/>
        </div>
    )
}

export default Detail;
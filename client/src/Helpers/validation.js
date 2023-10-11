function validar(dogData){
    //Almaceno errores
    let errors = {};
    //Validaciones
    let validationName = /^[A-Za-z]+$/
    let validationHeightMin = /^[0-9]+$/
    let validationHeightMax = /^[0-9]+$/
    let validationWeightMin = /^[0-9]+$/
    let validationWeightMax = /^[0-9]+$/
    let validationBreedFor = /^[A-Za-z]+$/
    let validationBreedGroup = /^[A-Za-z]+$/
    let validationLifeSpan = /^[0-9]+$/
    let validationOrigin = /^[A-Za-z]+$/

    //Name
    if(!validationName.test(dogData.name)){
        errors.name ="El nombre solo puede contener letras";
    }

    //Height
    if(!validationHeightMin.test(dogData.heightMin)){
        errors.heightMin = "Solo puede contener numeros";
    }
    if(!validationHeightMax.test(dogData.heightMax)){
        errors.heightMax = "Solo puede contener numeros";
    }

    //Weight
    if(!validationWeightMin.test(dogData.weightMin)){
        errors.weightMin = "Solo puede contener numeros"
    }
    if(!validationWeightMax.test(dogData.weightMax)){
        errors.weightMax = "Solo puede contener numeros"
    }

    //Breed for
    if(!validationBreedFor.test(dogData.breed_for)){
        errors.breed_for = "Solo puede contener letras"
    }

    //Breed group
    if(!validationBreedGroup.test(dogData.breed_group)){
        errors.breed_group = "Solo puede contener letras"
    }

    //Life Span
    if(!validationLifeSpan.test(dogData.life_span)){
        errors.life_span = 'solo puede contener numeros'
    }

    //Origin
    if (!validationOrigin.test(dogData.origin)) {
        errors.origin = "Solo puede contener letras"
    }

    return errors;
}

export default validar;
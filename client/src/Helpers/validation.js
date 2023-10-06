function validar(dogData){
    //Almaceno errores
    let errors = {};
    //Validaciones
    let validationName = /^[A-Za-z]+$/
    let validationHeightMin = /^[0-9]+$/
    let validationHeightMax = /^[0-9]+$/
    let validationWeightMin = /^[0-9]+$/
    let validationWeightMax = /^[0-9]+$/
    let validationLifeSpan = /^[0-9]+$/

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

    //Life Span
    if(!validationLifeSpan.test(dogData.life_span)){
        errors.life_span = 'solo se permiten números';
    }

    return errors;
}

export default validar;
function validar(input){
    //Almaceno errores
    let errors = {};
    //Validaciones
    let validationName = /^[A-Za-z]+$/
    let validationHeight = /^[0-9]+$/
    let validationWeight = /^[0-9]+$/
    let validationLifeSpan = /^[0-9]+$/

    //Name
    if(!validationName.test(input.name)){
        errors.name ="El nombre solo puede contener letras";
    }
    if(input.name.length >= 10){
        errors.name = "El nombre es muy largo"
    }

    //Height
    if(!validationHeight.test(input.height)){
        errors.height = "Solo puede contener numeros";
    }
    if(input.height.length >= 2){
        errors.height="La altura no debe tener mas de dos decimales";
    }
    if(input.heightMin > input.heightMax){
        errors.heightMin = "La altura minima no puede ser mayor que la maxima"
        errors.heightMax = "La altura máxima no puede ser menor que la mínima";
    }

    //Weight
    if(!validationWeight.test(input.weight)){
        errors.weight = "Solo puede contener numeros"
    }
    if(input.weight.length >= 2){
        errors.weight="La altura no debe tener mas de dos decimales";
    }
    if(input.weightMin > input.weightMax){
        errors.weightMin = "El peso minimo no puede ser mayor que el maximo"
        errors.weightMax = "El peso máximo no puede ser menor que el mínimo";
    }

    //Life Span
    if(!validationLifeSpan.test(input.lifeSpan)){
        errors.lifeSpan = 'solo se permiten números';
    }
    if(input.lifeSpan.length >= 20){
        errors.lifeSpan = "No puede tener más de 20 caracteres";
    }
    return errors;
}

export default validar;
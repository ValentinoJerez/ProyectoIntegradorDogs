// Tipo POST
//Importaciones
const {Dog, Temperaments} = require("../db")

const create = async (name, weight, height, life_span, temperaments) => {
    console.log(name, weight, height, life_span);
    const dog = {
        name,
        weight,
        height,
        life_span,
    }
    const response = await Dog.create({
        name,
        weight: dog.weight.metric,
        height: dog.height.metric,
        life_span
    })
    //Se asocia temperamento => Perro
    //Busco los temperamentos por nombre
    const temperament = await Temperaments.findAll({ where: { name:  temperaments } }); 
        //Al nuevo perro se le agrega el temperamento
        response.addTemperaments(temperament); 

    return dog;
};

module.exports = create;
// Tipo POST
//Importaciones
const {Dog, Temperaments} = require("../db")

const create = async (name, weight, height, life_span, temperaments) => {
    
    const response = await Dog.create({
        name,
        weight,
        height,
        life_span,
    })
    //Se asocia temperamento => Perro
    const temperament = await Temperaments.findAll({ where: { name:  temperaments } }); //Busco los temperamentos por nombre
        response.addTemperaments(temperament); //Al nuevo perro se le agrega el temperamento
    return response;
};

module.exports = create;
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
    const temperament = await Temperaments.findAll({ where: { name:  temperaments } }); //Busco los temperamentos por nombre
        response.addTemperaments(temperament); //Al nuevo perro se le agrega el temperamento

    const dog1 = await Dog.findOne({where: {name: name}});
    console.log(dog1)
    return dog1;
};

module.exports = create;
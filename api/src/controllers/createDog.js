// Tipo POST
//Importaciones
const {Dog} = require("../db")

const create = async (name, reference_image_id, weight, height, life_span) => {
    const response = await Dog.create({
        name,
        reference_image_id,
        weight,
        height,
        life_span
    })
    return response;
};

module.exports = create;
// Tipo GET
//Importaciones
const {Dog} = require("../db")
const axios = require("axios")

const getDogsId = async (id) => {
    //Busco BD
    console.log(id);
    const dogFromDB = await Dog.findAll({where: {id: id}})
    const dogsOk = dogFromDB.map((dog)=>{
        return {
                name: dog.name,
                weight: {metric: dog.weight},
                height: {metric: dog.height},
                life_span: dog.life_span
        }
    })
    //Busco Api
    const response = await axios.get(`https://api.thedogapi.com/v1/breeds/${id}`) 
    const dogFromApi = response.data //Destructuring
    //Devuelvo ambos
    return dogsOk.concat(dogFromApi);
}

module.exports = getDogsId
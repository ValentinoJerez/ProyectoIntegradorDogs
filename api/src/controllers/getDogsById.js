// Tipo GET
//Importaciones
const {Dog, Temperaments} = require("../db")
const axios = require("axios")

const getDogsId = async (id) => {
    //Si id es mayor a 3 cifras
    if(id.toString().length > 3){
        //Busco BD
        const dogFromDB = [await Dog.findByPk(id, {include: {model: Temperaments}})]
        const dogsOk = dogFromDB.map((dog)=>{
            return {
                name: dog.name,
                weight: {metric: dog.weight},
                height: {metric: dog.height},
                life_span: dog.life_span,
                //Mapeo modelo, busco el elemento que tenga el valor name
                temperament: dog.Temperaments.map(element => element.dataValues.name).join(", ").trim()
            }
        })
        return dogsOk[0];
    } 
    //Busco Api
    const response = await axios.get(`https://api.thedogapi.com/v1/breeds/${id}`) 
    const dogFromApi = response.data
    //Si no devuelvo de la API
    return dogFromApi;
}

module.exports = getDogsId
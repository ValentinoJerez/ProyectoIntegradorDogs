// Importaciones
const {Dog, Temperaments} = require('../db')
const axios = require("axios")


const get = async () => {
        //Busco en BD, perros y sus temperamentos
        const dogsDB = await Dog.findAll({
                include: [
                        {model: Temperaments,
                         through: {
                                attributes: []
                         }}
                ]
        })
        const dogsOk = dogsDB.map((dog)=>{
                return {
                        id: dog.id,
                        name: dog.name,
                        weight: {metric: dog.weight},
                        height: {metric: dog.height},
                        life_span: dog.life_span
                }
        })
        //Busco en Api
        const response = await axios.get("https://api.thedogapi.com/v1/breeds")
        const dogsFromApi = response.data
        //Devuelvo ambos
        return dogsOk.concat(dogsFromApi);
}

module.exports = get;
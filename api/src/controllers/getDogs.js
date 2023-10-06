// Importaciones
const {Dog} = require('../db')
const axios = require("axios")


const get = async () => {
        //Busco en BD
        const dogsDB = await Dog.findAll()
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
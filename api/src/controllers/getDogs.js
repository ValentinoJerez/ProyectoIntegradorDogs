// Importaciones
const {Dog, Temperaments} = require('../db')
const axios = require("axios")


const get = async () => {
        //Busco en BD, perros y sus temperamentos
        const dogs = await Dog.findAll({
                include: {model: Temperaments}    
        })
        const dogsBD = dogs.map((dog)=>{
                return {
                        id: dog.id,
                        name: dog.name,
                        weight: {metric: dog.weight},
                        height: {metric: dog.height},
                        life_span: dog.life_span,
                        temperament: dog.Temperaments.map(element => element.dataValues.name).join(", ").trim()
                }
        })
        //Busco en Api
        const response = await axios.get("https://api.thedogapi.com/v1/breeds")
        const dogsFromApi = response.data
        //Devuelvo ambos
        return dogsBD.concat(dogsFromApi);
}

module.exports = get;
//Import 
const {Temperaments} = require("../db")
const axios = require("axios")

const temperaments = async () => {
    //Pido a la Api
    const response = await axios.get("https://api.thedogapi.com/v1/breeds")
    //Mapeo cada perro y extraigo los temperaments de la API
    const temperamentsApi = response?.data?.map(dog => ({
        name: dog.temperament
    }))
    //Guardo en la BD los temperments
    await Temperaments.bulkCreate(temperamentsApi)
    return temperamentsApi
}

module.exports = temperaments;
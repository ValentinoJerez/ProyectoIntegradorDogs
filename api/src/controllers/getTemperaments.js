//Import 
const {Temperaments} = require("../db")
const axios = require("axios")

const temperaments = async () => {
    //Pido a la Api
    const response = await axios.get("https://api.thedogapi.com/v1/breeds")
    //Mapeo cada perro y extraigo los temperaments
    const guardarDB = response?.data?.map(dog => ({
        name: dog.temperament
    }))
    console.log(guardarDB)
    //Guardo en la BD los temperments
    await Temperaments.bulkCreate(guardarDB)
    return guardarDB
}

module.exports = temperaments;
//Import 
const {Temperaments} = require("../db")
const axios = require("axios")

const temperaments = async () => {
    const response = await axios.get("https://api.thedogapi.com/v1/breeds")
        const guardarDB = response?.data?.map(dog => ({
            name: dog.temperament
        }))
        console.log(guardarDB)
        await Temperaments.bulkCreate(guardarDB)
        return guardarDB
}

module.exports = temperaments;
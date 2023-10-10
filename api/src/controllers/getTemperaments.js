//Import 
const {Temperaments} = require("../db")
const axios = require("axios")

const temperaments = async () => {
    //Pido a la Api
    const response = await axios.get("https://api.thedogapi.com/v1/breeds")
    const uniqueTemperament = new Set(); //Objeto 

    //Recorro cada temperamento de cada perro y extraigo 
    const temperamentsApi = response?.data?.forEach(dog => 
         dog?.temperament?.split(", ").forEach(temperament => uniqueTemperament.add(temperament)) //.add Agrega temperamentos al objeto(Set) 
    )

    //Convierto en array el Set => [...uniqueTemperament]
    const allTemperaments = [...uniqueTemperament].map(temperament => ({
        name: temperament, //El modelo lo pide asi (name:)
    }))

    //Busca en BD, si no tiene los temperamentos lo crea
    const temperamentDB = await Temperaments.findAll()
        if(!temperamentDB.length){
      Temperaments.bulkCreate(allTemperaments)}
    //Si no, los crea
    return allTemperaments
}

module.exports = temperaments;
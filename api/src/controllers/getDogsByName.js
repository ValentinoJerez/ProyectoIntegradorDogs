//Import 
const {Dog} = require("../db")
const axios = require("axios")

const getDogsName = async (name) => {
     //Si recibo name:
     if(name){
          //Busco BD
          const dogFromDB = await Dog.findAll({where: {name: name}})
          //Busco Api
          const response = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}`) 
          //Destructuring
          const dogFromApi = response.data 
          //Devuelvo ambas
          return dogFromDB.concat(dogFromApi);
     } else { //Si no recibo, devuelvo todo
          const response = await axios.get("https://api.thedogapi.com/v1/breeds")
          return response.data
     }
}

module.exports = getDogsName;
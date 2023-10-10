// Tipo GET
//Importaciones
const {Dog} = require("../db")
const axios = require("axios")

const getDogsId = async (id) => {
    //Si id es mayor a 3 cifras
    if(id.toString().length > 3){
        //Busco BD
        const dogFromDB = [await Dog.findByPk(id)]
        console.log(dogFromDB);
        const dogsOk = dogFromDB.map((dog)=>{
            return {
                name: dog.name,
                weight: {metric: dog.weight},
                height: {metric: dog.height},
                life_span: dog.life_span,
                // temperaments: dog.Temperaments.map(element => element.dataValues.name).join(", ").trim()
                //Devuelve array
            }
        })
        return dogsOk[0];
    } 
    //Busco Api
    const response = await axios.get(`https://api.thedogapi.com/v1/breeds/${id}`) 
    const dogFromApi = response.data //Destructuring
    //Si no devuelvo de la API
    return dogFromApi;
}

module.exports = getDogsId
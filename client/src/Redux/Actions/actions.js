//Import
import { GET_DOGS, GET_DOGS_BY_NAME, CREATE_DOG, GET_TEMPERAMENTS } from "./action-types";
import axios from "axios"

//Get All
export const getInfoDogs = () => {
  //Funcion asincrona
    return async function(dispatch){
    const response = await axios(`http://localhost:3001/dogs`) 
    return dispatch ({
        type: GET_DOGS,
        payload: response.data,
      })
}}

export const getTemperaments = () => {
  return async function(dispatch){
    const response = await axios.get(`http://localhost:3001/temperaments`)
    return dispatch({
      type: GET_TEMPERAMENTS, 
      payload: response.data,
    })
  }
}

export const getByName = (name) => {
  return async function(dispatch){
  const response = await axios(`http://localhost:3001/dogs/name?name=${name}`) 
    return dispatch ({
        type: GET_DOGS_BY_NAME,
        payload: response.data,
      })
}}

export const createDog = (dogData) => {
  return async function(dispatch){
  try {
    const response = await axios.post(`http://localhost:3001/dogs`, dogData);
    alert("Creado")
    return dispatch({
      type: CREATE_DOG,
      payload: response.data
    })
  } catch (error) {
    alert(error.message)
    }
  }
}

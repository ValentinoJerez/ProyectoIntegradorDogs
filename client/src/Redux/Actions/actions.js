//Import
import { GET_DOGS, GET_DOGS_BY_ID, GET_DOGS_BY_NAME, ERROR } from "./action-types";
import axios from "axios"

const URL = "http://localhost:3001"

//Get All
export const getInfoDogs = () => {
  //Funcion asincrona
    return async function(dispatch){
    const response = await axios(`http://localhost:3001/dogs`) 
    return dispatch ({
        type: "GET_DOGS",
        payload: response.data,
      })
}}

//Get by Name
export const getByName = (name) => {
  //Funcion asincrona
    return async function(dispatch){
    const response = await axios(`http://localhost:3001/dogs/name?name=${name}`) 
    return dispatch ({
        type: "GET_DOGS_BY_NAME",
        payload: response.data,
      })
}}
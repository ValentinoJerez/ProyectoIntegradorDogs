//Import
import { GET_DOGS, GET_DOGS_BY_ID, GET_DOGS_BY_NAME, ERROR } from "./action-types";
import axios from "axios"

const URL = "http://localhost:3001"

//Get
export const getInfoDogs = () => {
  //Funcion asincrona
    return async function(dispatch){
    const response = await axios(`http://localhost:3001/dogs`) 
    return dispatch ({
        type: "GET_DOGS",
        payload: response.data,
      })
}}

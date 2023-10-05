// Importo Actions
import { GET_DOGS, GET_DOGS_BY_NAME, GET_TEMPERAMENTS } from "../Actions/action-types";

//Estado inicial
let initialState = {allDogs: [], allDogsCopy: [], temperaments: []};

// Reducer 
function rootReducer(state = initialState, action){
    //Switch
    switch(action.type){
        //Traer todos los perros
        case GET_DOGS:
            return {
                ...state,
                allDogs: action.payload
            }
        //Buscar por nombre
        case GET_DOGS_BY_NAME:
            return {
                ...state,
                allDogs: action.payload
            }
        case GET_TEMPERAMENTS:
            return {
                ...state,
                temperaments: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;
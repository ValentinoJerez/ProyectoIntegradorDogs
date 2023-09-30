// Importo Actions
import { GET_DOGS, GET_DOGS_BY_ID, GET_DOGS_BY_NAME } from "../Actions/action-types";

//Estado inicial
let initialState = {dogs: [], allDogs: []};

// Reducer 
function rootReducer(state = initialState, action){
    //Switch
    switch(action.type){
        case GET_DOGS:
            return {
                ...state,
                allDogs: action.payload
            }

        default:
            return state;
    }
}

export default rootReducer;
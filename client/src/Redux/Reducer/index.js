// Importo Actions
import { CREATE_DOG, FILTER_API_BD, FILTER_TEMPERAMENTS, GET_DOGS, GET_DOGS_BY_NAME, GET_TEMPERAMENTS, ORDER, ORDER_PESO } from "../Actions/action-types";

//Estado inicial
let initialState = {allDogs: [], allDogsCopy: [], temperaments: [],  filteredDogs: []};

function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_DOGS:
            return {
                ...state,
                allDogsCopy: action.payload, //Renderizo
                allDogs: action.payload
            }
        case GET_DOGS_BY_NAME:
            return {
                ...state,
                allDogsCopy: action.payload
            }
        case GET_TEMPERAMENTS:
            return {
                ...state,
                temperaments: action.payload
            }
        case CREATE_DOG:
            return{
                ...state,
                allDogsCopy: [...state.allDogsCopy, action.payload]
            }
        case FILTER_TEMPERAMENTS:
            const copyDogs = [...state.allDogs]
            let response = [...copyDogs.filter((dog) => {
                return dog.temperament &&  dog.temperament.split(',').map(item => item.trim()).includes(action.payload);
            })]
            if(action.payload === "FilterTemperament"){
                response = state.allDogs
            } 
            return {
                ...state,
                allDogsCopy: response
            }
        case FILTER_API_BD:
            let filter;
            if(action.payload === "Filter"){
                filter = state.allDogs
            }
            if(action.payload === "Api"){
                filter = state.allDogs.filter(dog => dog.id.toString().length < 4 )
            } else if (action.payload === "Base de Datos"){
                filter = state.allDogs.filter(dog => dog.id.toString().length > 4)
            }
            return {
                ...state,
                allDogsCopy: [...filter]
            }
        case ORDER:
            let orden;
            if(action.payload === "Order"){
                orden = state.allDogs
            }
            if(action.payload === "Ascendente"){
                orden = [...state.allDogsCopy].sort((a,b) => a.name.localeCompare(b.name));
            } 
             if(action.payload === "Descendente"){
                orden = [...state.allDogsCopy].sort((a,b) => b.name.localeCompare(a.name));
            }
            return {
                ...state,
                allDogsCopy: orden
            }
        case ORDER_PESO:
            let ordenPeso;
            if(action.payload === "OrderPeso"){
                ordenPeso = state.allDogs
            }
            if(action.payload === "Mayor Peso"){
            ordenPeso = [...state.allDogsCopy].sort((a, b) => {
            const weightA = parseInt(a.weight.metric.split(' - ')[1]);
            const weightB = parseInt(b.weight.metric.split(' - ')[1]);
            return weightB - weightA;
            });
        } else if (action.payload === "Menor Peso"){
            ordenPeso = [...state.allDogsCopy].sort((a, b) => {
            const weightA = parseInt(a.weight.metric.split(' - ')[1]);
            const weightB = parseInt(b.weight.metric.split(' - ')[1]);
            return weightA - weightB;
            });
        }
            return {
            ...state,
            allDogsCopy: ordenPeso
        }

        default:
            return state;
    }
}

export default rootReducer;
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from '@redux-devtools/extension';
import rootReducer from "../Reducer";
import thunk from "redux-thunk";

//Creo la store:
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
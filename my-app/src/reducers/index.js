import { Route } from "react-router-dom";
import { GET_PROJECTS } from "../actions/";

const initialState = [];
export const reducer = (state = initialState, action) => {
    switch(action.type){
        case "POST_REGISTER":
        case "GET_PROJECTS":
            return [ ...state, action.payload ]
        default:
            return state;
    }
    
}
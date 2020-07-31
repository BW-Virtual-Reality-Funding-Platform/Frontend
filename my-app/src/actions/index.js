import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios"
export const GET_PROJECTS = 'GET_PROJECTS';

export const PostRegister = (data) => {
    return dispatch => {
        axios
            .post("https://vr-lambdaschool.herokuapp.com/api/auth/register", data)
            .then(res => {
                console.log(res.data)
                dispatch({ type: "POST_REGISTER", payload: res.data })
            })
            .catch(err => console.log("Error!!!", err));
    }
}


export const getProjects = () => dispatch => {
    dispatch({type: GET_PROJECTS});
    
    axios
      .get("https://vr-lambdaschool.herokuapp.com/${userID}/projects")
      .then(result => {
        console.log(result);
        dispatch({ type: GET_PROJECTS, payload: result.data})
    })
    .catch(err => console.log("Error!!!", err));
}
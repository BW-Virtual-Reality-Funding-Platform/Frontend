import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios"

export const PostRegister = (data) => {
    return dispatch => {
        axiosWithAuth()
            .post("https://vr-lambdaschool.herokuapp.com/api/auth/register", data)
            .then(res => {
                console.log(res.data)
                dispatch({ type: "POST_REGISTER", payload: res.data })
            })
            .catch(err => console.log("Error!!!", err));
    }
}
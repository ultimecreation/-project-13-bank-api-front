import { SET_USER_DATA, UPDATE_USER_DATA } from "./UserTypes"

export const setUserData = token => async dispatch => {

    const response = await fetch("http://localhost:3001/api/v1/user/profile",{
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        method: "POST"
    })
    const data = await response.json()

    if(data.body) return dispatch({type: SET_USER_DATA, payload: data.body})
}

export const updateUserData = (token,userData) => async dispatch => {
    
    const response = await fetch("http://localhost:3001/api/v1/user/profile",{
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        method: "PUT",
        body: JSON.stringify({...userData})
    })
    const data = await response.json()

    if(data.body) return dispatch({type: UPDATE_USER_DATA, payload: data.body})
}
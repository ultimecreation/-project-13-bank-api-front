import { Navigate } from "react-router-dom"
import { AUTH_LOGIN_ATTEMPT, AUTH_LOGIN_FAILURE, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT } from "./AuthTypes"

export const login = incomingUserData => async dispatch =>{

    dispatch({type: AUTH_LOGIN_ATTEMPT})

    const response = await fetch("http://localhost:3001/api/v1/user/login",{
        headers: {
            "Content-Type":"application/json"
        },
        method: "POST",
        body: JSON.stringify(incomingUserData)
    })
    const data = await response.json()

    if(data.status === 400) return dispatch({type: AUTH_LOGIN_FAILURE})
    if(data.status === 200) return dispatch({type: AUTH_LOGIN_SUCCESS, payload: data.body.token})
}

export const logout = () =>  dispatch =>{
dispatch({type: AUTH_LOGOUT})
} 

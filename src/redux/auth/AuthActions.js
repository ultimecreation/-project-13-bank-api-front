import { AUTH_LOGIN_ATTEMPT, AUTH_LOGIN_FAILURE, AUTH_LOGIN_SUCCESS } from "./AuthTypes"

export const login = incomingUserData => async dispatch =>{

    dispatch({type: AUTH_LOGIN_ATTEMPT})

    const userFound = await fetch("http://localhost:3001/api/v1/user/login",{
        headers: {
            "Content-Type":"application/json"
        },
        method: "POST",
        body: JSON.stringify(incomingUserData)
    })

    userFound 
        ? dispatch({type: AUTH_LOGIN_SUCCESS, payload: userFound})
        : dispatch({type: AUTH_LOGIN_FAILURE})
}
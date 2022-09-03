import { AUTH_LOGIN_ATTEMPT, AUTH_LOGIN_FAILURE, AUTH_LOGIN_SUCCESS } from "./AuthTypes"

const initialState = {
    user: null,
    isAuthenticated: false,
    isLoading: false 
}

const AuthReducer = (state = initialState, action) => {
    switch(action.type){
        case AUTH_LOGIN_ATTEMPT:
            return {
                ...state,
                isLoading: true
            }
        case AUTH_LOGIN_SUCCESS:
            return {
                ...state,
                user: {...action.payload},
                isAuthenticated: true,
                isLoading: false 
            }
        case AUTH_LOGIN_FAILURE:
            return {
                ...state,
                ...initialState
            }
        default:
            return state
    }
}

export default AuthReducer
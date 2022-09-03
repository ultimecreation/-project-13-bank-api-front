import { AUTH_LOGIN_ATTEMPT, AUTH_LOGIN_FAILURE, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT } from "./AuthTypes"

const initialState = {
    token: null,
    isAuthenticated: false,
    isLoading: false
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_LOGIN_ATTEMPT:
            return {
                ...state,
                isLoading: true
            }
        case AUTH_LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload,
                isAuthenticated: true,
                isLoading: false
            }
        case AUTH_LOGOUT:
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
import { SET_USER_DATA, UPDATE_USER_DATA } from "./UserTypes"

const initialState = {
    user: null
}

const UserReducer = (state=initialState, action) => {
    switch(action.type){
        case SET_USER_DATA:
            return {
                ...state,
                user: {...action.payload}
            }
        case UPDATE_USER_DATA:
            return {
                ...state,
                user: {...action.payload}
            }
        default:
            return state 
    }
}

export default UserReducer
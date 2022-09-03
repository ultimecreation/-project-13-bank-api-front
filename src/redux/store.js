import { applyMiddleware, legacy_createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import AuthReducer  from "./auth/AuthReducer";
import UserReducer  from "./user/UserReducer";

const initialState = {}
const middlewares = [thunk]
const store = legacy_createStore(
    combineReducers({
         AuthReducer,
         UserReducer
    }),
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
)

export default store
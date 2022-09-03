import { applyMiddleware, legacy_createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import AuthReducer  from "./auth/AuthReducer";

const initialState = {}
const middlewares = [thunk]
const store = legacy_createStore(
    combineReducers({
         AuthReducer
    }),
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
)

export default store
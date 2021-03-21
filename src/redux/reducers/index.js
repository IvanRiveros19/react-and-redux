import {combineReducers} from "redux";
import userReducer from "./userReducer"
import laptopsReducer from "./laptopsReducer";

export default combineReducers({
    user: userReducer,
    laptops: laptopsReducer
})


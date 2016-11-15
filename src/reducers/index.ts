import { combineReducers } from "redux-immutable";
import globalReducer from "./global";

const reducers =  combineReducers({
    global: globalReducer
});

export default reducers;
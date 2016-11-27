import * as SI from "seamless-immutable";
import {createStore, applyMiddleware, combineReducers, compose} from "redux";
import devTools  from "remote-redux-devtools";
import thunk from "redux-thunk";
import reducers from "../reducers";

// Set up store
const initialState: any = SI.from({});
const enhancer: any = compose(applyMiddleware(thunk), devTools());
const store: any = createStore(reducers, initialState, enhancer);

export default store;

import * as SI from "seamless-immutable";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducers from "../reducers";

// Set up store
const initialState: any = SI.from({});
const store: any = createStore(reducers, initialState, composeWithDevTools(
  applyMiddleware(thunk)
));

export default store;

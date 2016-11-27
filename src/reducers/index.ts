import {combineReducers } from "redux";

import app from "./app";
import counter from "./counter";

const reducers = combineReducers({
  app,
  counter,
});

export default reducers;
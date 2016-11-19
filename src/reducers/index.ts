import {combineReducers } from "redux";

import app from "./app";
import counter1 from "./counter";
import counter2 from "./counter.2";

const reducers = combineReducers({
  app,
  counter1,
  counter2
});

export default reducers;
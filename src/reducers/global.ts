import ACTION_TYPES from "../constants";
import { fromJS } from "immutable";

const defaultState = fromJS({
    appName: "React + Native + TypeScript + Redux",
    keywords: ["react", "react-native", "typescript", "redux"],
    counter: 0
});

const globalReducer = (state: any = defaultState, action: any) => {
  switch (action.type) {
    case ACTION_TYPES.INCREASE_ITEM:
      return state.set("counter", state.get("counter") + 1);
    case ACTION_TYPES.DECREASE_ITEM:
      return state;
    default:
      return state;
  }
};

export default globalReducer;
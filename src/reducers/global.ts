import ACTION_TYPES from "../constants";

const defaultState = {
    appName: "React + Native + TypeScript + Redux",
    keywords: ["react", "react-native", "typescript", "redux"],
    counter: 0
};

const globalReducer = (previousState: any = defaultState, action: any) => {
  switch (action.type) {
    case ACTION_TYPES.INCREASE_ITEM:
      return Object.assign({}, previousState, {
        counter: previousState.counter + 1
      });
    case ACTION_TYPES.DECREASE_ITEM:
      return previousState;
    default:
      return previousState;
  }
};

export default globalReducer;
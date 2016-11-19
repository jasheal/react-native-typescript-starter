import ACTION_TYPES from "../constants";
import * as SI from "seamless-immutable";

const defaultState = SI.from({
    counter: 0
});

const counter1 = (state: any = defaultState, action: any) => {
  switch (action.type) {
    case ACTION_TYPES.INCREASE_ITEM_C1:
      return state.merge({
        counter: state.counter + 1
      });
    default:
      return state;
  }
};

export default counter1;
const { REHYDRATE } = require("redux-persist/constants");
import ACTION_TYPES from "../constants";
import * as SI from "seamless-immutable";

const defaultState = SI.from({
    todos: [
        {
            id: 1,
            title: "Make a todo list",
            description: "Must buiild a todo list in react native, typescript and redux",
            completed: true,
            archived: false
        }
    ]
});

const counter2 = (state: any = defaultState, action: any) => {
  switch (action.type) {
    case REHYDRATE:
      return state;
    case ACTION_TYPES.INCREASE_ITEM_C2:
      return state.merge({
        counter: state.counter + 1
      });
    default:
      return state;
  }
};

export default counter2;
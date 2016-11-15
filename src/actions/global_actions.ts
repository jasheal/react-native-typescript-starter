import ACTION_TYPES from "../constants";
import makeActionCreator from "../utils/make_action_creator";

export const increaseItem = makeActionCreator(ACTION_TYPES.INCREASE_ITEM);
export const decreaseItem = makeActionCreator(ACTION_TYPES.DECREASE_ITEM);
export const addItem = makeActionCreator(ACTION_TYPES.ADD_ITEM);

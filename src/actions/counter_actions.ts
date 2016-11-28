import ACTION_TYPES from "../constants";
import { makeActionCreator } from "../utils";

export const increaseItem = makeActionCreator(ACTION_TYPES.INCREASE_ITEM_C1);
export const decreaseItem = makeActionCreator(ACTION_TYPES.DECREASE_ITEM);
export const resetCounter = makeActionCreator(ACTION_TYPES.RESET_COUNTER);
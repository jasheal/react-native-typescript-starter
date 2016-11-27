import ACTION_TYPES from "../constants";
import { makeActionCreator } from "../utils";

export const increaseItemC1 = makeActionCreator(ACTION_TYPES.INCREASE_ITEM_C1);
export const increaseItemC2 = makeActionCreator(ACTION_TYPES.INCREASE_ITEM_C2);
export const decreaseItem = makeActionCreator(ACTION_TYPES.DECREASE_ITEM);
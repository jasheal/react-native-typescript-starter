import ACTION_TYPES from "../constants";
import { makeActionCreator } from "../utils";

export const addItem = makeActionCreator(ACTION_TYPES.ADD_ITEM);
export const editItem = makeActionCreator(ACTION_TYPES.UPDATE_ITEM);
export const deleteItem = makeActionCreator(ACTION_TYPES.DELETE_ITEM);
export const archiveItem = makeActionCreator(ACTION_TYPES.ARCHIVE_ITEM);
export const toggleItemComplete = makeActionCreator(ACTION_TYPES.TOGGLE_ITEM_COMPLETE);

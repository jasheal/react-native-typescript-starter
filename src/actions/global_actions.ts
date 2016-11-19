import ACTION_TYPES from "../constants";
import makeActionCreator from "../utils/make_action_creator";

export const increaseItemC1 = makeActionCreator(ACTION_TYPES.INCREASE_ITEM_C1);
export const increaseItemC2 = makeActionCreator(ACTION_TYPES.INCREASE_ITEM_C2);
export const decreaseItem = makeActionCreator(ACTION_TYPES.DECREASE_ITEM);
export const addItem = makeActionCreator(ACTION_TYPES.ADD_ITEM);
export const changeAppRoot = makeActionCreator(ACTION_TYPES.ROOT_CHANGED, "root");

export const appInitialized = () => {
  return async function(dispatch: any, getState: any) {
    // since all business logic should be inside redux actions
    // this is a good place to put your app initialization code
    dispatch(changeAppRoot("login"));
  };
};

export const login = () => {
  return async function(dispatch: any, getState: any) {
    // login logic would go here, and when it's done, we switch app roots
    dispatch(changeAppRoot("after-login"));
  };
};

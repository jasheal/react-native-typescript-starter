import ACTION_TYPES from "../constants";
import { makeActionCreator } from "../utils";

export const changeAppRoot = makeActionCreator(ACTION_TYPES.ROOT_CHANGED, "root");

export const appInitialized = () => {
  return async function(dispatch: any, getState: any) {
    // since all business logic should be inside redux actions
    // this is a good place to put your app initialization code
    dispatch(changeAppRoot("after-login"));
  };
};

export const login = () => {
  return async function(dispatch: any, getState: any) {
    // login logic would go here, and when it's done, we switch app roots
    dispatch(changeAppRoot("after-login"));
  };
};

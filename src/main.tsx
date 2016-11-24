// Modules without Type Definitions
const { Navigation } = require("react-native-navigation");
const { persistStore, autoRehydrate } = require("redux-persist");
declare var __DEV__: any;

import {Platform, AsyncStorage} from "react-native";
import devTools  from "remote-redux-devtools";
import {createStore, applyMiddleware, combineReducers, compose} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import * as SI from "seamless-immutable";
import * as actions from "./actions/global_actions";
import reducers from "./reducers";
import {registerScreens} from "./config/register_screens";
import {LOGIN_CONFIG, TAB_CONFIG} from "./config/screen_config";

if (__DEV__) {
  // __DEV__ is set as an env variable when running in on simulator.
  console.log("Development mode in simulator");
};

const configureStore = () => {
  const enhancer = compose(
    applyMiddleware(thunk),
    devTools(),
    autoRehydrate()
  );
  return createStore(reducers, undefined, enhancer);
};
const store: any = configureStore();

persistStore(store, {storage: AsyncStorage});
registerScreens(store, Provider);

// Recommended way to bootstrap the app when using react-native-navigation
// We need to manually bind Redux State in the class
export default class App {

 private currentRoot: string;
 private root: string;

  constructor() {
    store.subscribe(this.onStoreUpdate.bind(this));
    store.dispatch(actions.appInitialized());
  }

  private onStoreUpdate(): void {
    const {root} = store.getState().app;

    if (this.currentRoot !== root ) {
      this.currentRoot = root;
      this.startApp(root);
    }
  }

  private startApp(root: string): any {

    // There's a lot of configuration options available so better to abstract them into their own files.
    switch (root) {
      case "login":
        Navigation.startSingleScreenApp(LOGIN_CONFIG);
        return;
      case "after-login":
        Navigation.startTabBasedApp(TAB_CONFIG);
        return;
      default:
        console.error("Unknown app root");
    }
  }

}



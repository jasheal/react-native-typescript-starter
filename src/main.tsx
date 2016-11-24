// Modules without Type Definitions
const  { Navigation } = require("react-native-navigation");
const {persistStore, autoRehydrate} = require("redux-persist");
declare var __DEV__: any;
declare var devTools: any;

import devTools from "remote-redux-devtools";
import {Platform} from "react-native";
import {createStore, applyMiddleware, combineReducers, compose} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import * as SI from "seamless-immutable";
import reducers from "./reducers";
import * as actions from "./actions/global_actions";
import {registerScreens} from "./config/register_screens";
import {LOGIN_CONFIG, TAB_CONFIG} from "./config/screen_config";

if (__DEV__) { console.log("Development mode in simulator"); };

const configureStore = () => {
  const enhancer = compose(
    applyMiddleware(thunk),
    devTools(),
    autoRehydrate()
  );
  return createStore(reducers, undefined, enhancer);
};
const store: any = configureStore();

registerScreens(store, Provider);

class App {

 private currentRoot: string;
 private root: string;

  constructor() {
    store.subscribe(this.onStoreUpdate.bind(this));
    store.dispatch(actions.appInitialized());
  }

  onStoreUpdate() {
    const {root} = store.getState().app;

    if (this.currentRoot !== root ) {
      this.currentRoot = root;
      this.startApp(root);
    }
  }

  startApp(root: string) {
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

export default App;


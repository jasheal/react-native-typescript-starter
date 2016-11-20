import {createStore, applyMiddleware, combineReducers, compose} from "redux";
import {Provider} from "react-redux";
import {Navigation} from "react-native-navigation";
import thunk from "redux-thunk";
import * as SI from "seamless-immutable";
import devTools from "remote-redux-devtools";
import reducers from "../build/reducers";
import * as actions from "../build/actions/global_actions";
import {registerScreens} from "./register_screens";
import {Platform} from "react-native";
import {LOGIN_CONFIG, TAB_CONFIG} from "./screen_configs";

if(__DEV__) {
  console.log("Development mode");
};

const configureStore = () => {
  const enhancer = compose(
    applyMiddleware(thunk),
    devTools()
  )
  return createStore(reducers, enhancer);
}
const store = configureStore();

registerScreens(store, Provider);

class App {

  constructor() {
    store.subscribe(this.onStoreUpdate.bind(this));
    store.dispatch(actions.appInitialized());
  }

  onStoreUpdate() {
    const {root} = store.getState().app;

    if (this.currentRoot != root ) {
      this.currentRoot = root;
      this.startApp(root);
    }
  }

  startApp(root) {
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

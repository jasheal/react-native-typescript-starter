import {createStore, applyMiddleware, combineReducers, compose} from "redux";
import {Provider} from "react-redux";
import {Navigation} from "react-native-navigation";
import thunk from "redux-thunk";
import * as SI from "seamless-immutable";
import devTools from "remote-redux-devtools";
import reducers from "../build/reducers";
import * as actions from "../build/actions/global_actions";
import * as createLogger from "redux-logger";

import {registerScreens} from "./screens";
import {Platform} from "react-native";

const configureStore = () => {
  const enhancer = compose(
    applyMiddleware(thunk),
    devTools()
  )
  return createStore(reducers, enhancer);
}
const store = configureStore();

// // screen related book keeping
registerScreens(store, Provider);

// // notice that this is just a simple class, it's not a React component
class App {

  constructor() {
    // since react-redux only works on components, we need to subscribe this class manually
    store.subscribe(this.onStoreUpdate.bind(this));
    store.dispatch(actions.appInitialized());
  }

  onStoreUpdate() {
    const {root} = store.getState().app;
    // handle a root change
    // if your app doesn't change roots in runtime, you can remove onStoreUpdate() altogether
    if (this.currentRoot != root) {
      this.currentRoot = root;
      this.startApp(root);
    }
  }

  startApp(root) {
    Navigation.startSingleScreenApp({
      screen: {
          screen: 'screen.Counter',
          title: 'Login',
          navigatorStyle: {}
      }
    });
  }
}

export default App;

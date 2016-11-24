const  { Navigation } = require("react-native-navigation");
import Counter from "../containers/screens/counter";
import Counter2 from "../containers/screens/counter.2";
import Modal from "../containers/screens/modal";
import SideDrawer from "../containers/screens/sidedrawer";
import Login from "../containers/screens/login";
import Lightbox from "../containers/screens/lightbox";

// register all screens of the app (including internal ones)
export function registerScreens(store: Redux.Store<any>, Provider: any) {
  Navigation.registerComponent("screen.Counter", () => Counter, store, Provider);
  Navigation.registerComponent("screen.Counter2", () => Counter2, store, Provider);
  Navigation.registerComponent("screen.Login", () => Login, store, Provider);
  Navigation.registerComponent("navigation.SideDrawer", () => SideDrawer, store, Provider);
  Navigation.registerComponent("modals.Modal", () => Modal, store, Provider);
  Navigation.registerComponent("modals.LightBoxScreen", () => Lightbox, store, Provider);
}
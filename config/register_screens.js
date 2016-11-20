import {Navigation} from "react-native-navigation";
import Counter from "../build/containers/screens/counter";
import Counter2 from "../build/containers/screens/counter.2";
import Modal from "../build/containers/screens/modal";
import SideDrawer from "../build/containers/screens/sidedrawer";
import Login from "../build/containers/screens/login";
import Lightbox from "../build/containers/screens/lightbox";

// register all screens of the app (including internal ones)
export function registerScreens(store, Provider) {
  Navigation.registerComponent("screen.Counter", () => Counter, store, Provider);
  Navigation.registerComponent("screen.Counter2", () => Counter2, store, Provider);
  Navigation.registerComponent("screen.Login", () => Login, store, Provider);
  Navigation.registerComponent("navigation.SideDrawer", () => SideDrawer, store, Provider);
  Navigation.registerComponent("modals.Modal", () => Modal, store, Provider);
  Navigation.registerComponent("modals.LightBoxScreen", () => Lightbox, store, Provider);
}
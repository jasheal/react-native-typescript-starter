import { Navigation } from "react-native-navigation";
import Counter from "../containers/screens/Counter";
import TodoList from "../containers/screens/TodoList";
import Modal from "../components/modal";
import SideDrawer from "../components/sidedrawer";
import Lightbox from "../components/lightbox";
import IntroMenu from "../containers/screens/IntroMenu";

// register all screens of the app (including internal ones)
export function registerScreens(store: Redux.Store<any>, Provider: any) {

  // Main menu
  Navigation.registerComponent("screen.IntroMenu", () => IntroMenu, store, Provider);

  // Main smart components
  Navigation.registerComponent("screen.TodoList", () => TodoList, store, Provider);
  Navigation.registerComponent("screen.Counter", () => Counter, store, Provider);

  // Navigation related components
  Navigation.registerComponent("navigation.SideDrawer", () => SideDrawer, store, Provider);

  // Modals, Lightboxes, Alerts
  Navigation.registerComponent("modals.Modal", () => Modal, store, Provider);
  Navigation.registerComponent("modals.LightBoxScreen", () => Lightbox, store, Provider);
}
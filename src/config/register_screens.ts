import  { Navigation } from "react-native-navigation";
import Counter from "../containers/screens/counter";
import TodoList from "../containers/screens/todo_list";
import Modal from "../components/modal";
import SideDrawer from "../components/sidedrawer";
import Login from "../containers/screens/login";
import Lightbox from "../components/lightbox";

// register all screens of the app (including internal ones)
export function registerScreens(store: Redux.Store<any>, Provider: any) {
  Navigation.registerComponent("screen.Login", () => Login, store, Provider);

  // Main smart components
  Navigation.registerComponent("screen.TodoList", () => TodoList, store, Provider);
  Navigation.registerComponent("screen.Counter", () => Counter, store, Provider);

  // Navigation related components
  Navigation.registerComponent("navigation.SideDrawer", () => SideDrawer, store, Provider);

  // Modals, Lightboxes, Alerts
  Navigation.registerComponent("modals.Modal", () => Modal, store, Provider);
  Navigation.registerComponent("modals.LightBoxScreen", () => Lightbox, store, Provider);
}
import { persistStore, purgeStoredState } from "redux-persist";
// import Icon from "react-native-vector-icons/Ionicons";
import * as React from "react";
import store from "../../store";
import { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Animated, InteractionManager, AsyncStorage, StatusBar } from "react-native";
import { Provider, connect } from "react-redux";
import { bindActionCreators } from "redux";
import actions from "../../actions";
import ICONS from "../../config/icons";

function mapStateToProps(state: any) {
  return {
      counter: state.counter
  };
}

function mapDispatchToProps(dispatch: Redux.Dispatch<any>) {
    return { actions : bindActionCreators(actions, dispatch) };
}

export interface ICounterProps {
    navigator: any;
    appName: string;
    counter: any;
    actions: any;
    app: any;
}

class Counter extends Component<ICounterProps, void> {

  constructor(props: ICounterProps) {
    super(props);
    // if you want to listen on navigator events, set this up
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    console.log(this.props.navigator);
    // StatusBar.setBarStyle("light-content", true);
  }

  static navigatorStyle = {
    drawUnderNavBar: true,
    // navBarBlur: true,
    navBarBackgroundColor: "#000000",
    navBarTextColor: "#FFFFFF",
    navBarTranslucent: true
  };

  static tabsStyle = {
    tabBarBackgroundColor: "#000000",
  };

  static navigatorButtons = {
    rightButtons: [
      {
        // icon: ICONS.ADD, // for icon button, provide the local image asset name
        id: "reset", // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
        title: "Reset"
      },
      // {
      //   title: "Edit", // for a textual button, provide the button title (label)
      //   id: "edit", // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
      //   disabled: true, // optional, used to disable the button (appears faded and doesn't interact)
      //   disableIconTint: true, // optional, by default the image colors are overridden and tinted to navBarButtonColor, set to true to keep the original image colors
      // }
    ]
  };

  public onNavigatorEvent(ev: any) { // this is the onPress handler for the two buttons together

    console.log(ev);

    if (ev.type === "NavBarButtonPress") { // this is the event type for button presses
      if (ev.id === "reset") { // this is the same id field from the static navigatorButtons definition
        console.log("RESET");
        this.props.actions.resetCounter();
      }
    }
  }

  public exploreAnimatedApi(): void {
    // TODO - Animation demos
  }

  public onModalPress(): void {
    this.props.navigator.showModal({
      title: "Modal",
      screen: "modals.Modal"
    });
  }

  public clearCache(): void {
    purgeStoredState({storage: AsyncStorage});
  }

  public render(): JSX.Element {
    return (
      <View style={styles.container}>
        <StatusBar />
        <TouchableOpacity
          onPress={this.props.actions.increaseItem.bind(this)}
          onLongPress={this.onModalPress.bind(this)}>
          <Text style={styles.counter}>
              { this.props.counter.counter }
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
  } as React.ViewStyle,
  counter: {
      fontSize: 200,
      fontWeight: "bold",
      color: "#333333",
      textAlign: "center"
  } as React.TextStyle
});
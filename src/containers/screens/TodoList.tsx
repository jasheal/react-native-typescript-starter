import * as React from "react";
import { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, InteractionManager, StatusBar } from "react-native";
import { Provider, connect } from "react-redux";
import { bindActionCreators } from "redux";
import actions from "../../actions";

function mapStateToProps(state: any) {
  return { todos: state.todos};
}

function mapDispatchToProps(dispatch: Redux.Dispatch<any>) {
    return { actions : bindActionCreators(actions, dispatch) };
}

interface ITodoListProps {
    navigator: any;
    actions: any;
    todos: Array<TodoStatic>;
}

class TodoList extends Component<ITodoListProps, void> {

  constructor(props: ITodoListProps) {
    super(props);

    // if you want to listen on navigator events, set this up
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  public onNavigatorEvent(ev: any) { // this is the onPress handler for the two buttons together

    console.log(ev);

    if (ev.type === "NavBarButtonPress") { // this is the event type for button presses
      if (ev.id === "reset") { // this is the same id field from the static navigatorButtons definition
        console.log("RESET");
        this.props.actions.resetCounter();
      }
    }
  }

  static navigatorStyle = {
    drawUnderNavBar: true,
    navBarTranslucent: true
  };

  public render(): JSX.Element {
    return (
      <View style={styles.container}>
        <StatusBar showHideTransition="slide" animated={true}/>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7F7F7",
  } as React.ViewStyle
});

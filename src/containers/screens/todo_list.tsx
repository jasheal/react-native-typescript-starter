import * as React from "react";
import { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, InteractionManager } from "react-native";
import { Provider, connect } from "react-redux";
import { bindActionCreators } from "redux";
import actions from "../../actions";
import { ITodo } from "../../interfaces/state";

function mapStateToProps(state: any) {
  return { todos: state.todos};
}

function mapDispatchToProps(dispatch: Redux.Dispatch<any>) {
    return { actions : bindActionCreators(actions, dispatch) };
}

interface ITodoListProps {
    navigator: any;
    actions: any;
    todos: ITodo[];
}

class TodoList extends Component<ITodoListProps, any> {

  static navigatorStyle = {
    drawUnderNavBar: true,
    navBarTranslucent: true
  };


  public render(): JSX.Element {
    return (
      <View style={styles.container}>
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

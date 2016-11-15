import * as React from "react";
import { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Provider, connect } from "react-redux";
import { bindActionCreators } from "redux";
import globalActions from "../../actions";
import { ICounterProps } from "../../interfaces/screens";

function mapStateToProps(state: any) {
  return state.global;
}

function mapDispatchToProps(dispatch: Redux.Dispatch<any>) {
    return { actions : bindActionCreators(globalActions, dispatch) };
}

class Counter extends Component<ICounterProps, void> {

    constructor(props: any) {
        super(props);
    }

  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.counter}>
            {this.props.counter}
        </Text>
        <Text style={styles.welcome}>
            {this.props.appName}
        </Text>
        <TouchableOpacity
            style={styles.button}
            onPress={this.props.actions.increaseItem}>
            <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#003340",
  } as React.ViewStyle,
  button: {
    width: 100,
    height: 30,
    backgroundColor: "#092228",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#06566b",
    borderWidth: 1,
    borderRadius: 5
  } as React.ViewStyle,
  buttonText: {
      color: "white"
  } as React.TextStyle,
  counter: {
      fontSize: 100,
      color: "#2c5e6a",
      textAlign: "center"
  } as React.TextStyle,
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "lightgrey"
  } as React.TextStyle
});
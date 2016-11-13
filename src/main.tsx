import * as React from "react";
import { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {}
interface State {}

class App extends Component<Props, State> {

  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
            Welcome to React Native TypeScript
        </Text>
        <Text style={styles.instructions}>
          To get started, edit src/main.tsx
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{"\n"}
          Cmd+D or shake for options
        </Text>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  } as React.ViewStyle,
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  } as React.TextStyle,
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  } as React.TextStyle,
});

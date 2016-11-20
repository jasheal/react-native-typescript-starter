import * as React from "react";
import { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Provider, connect } from "react-redux";

class Lightbox extends Component<any, void> {

  constructor(props: any) {
      super(props);
  }

  public dismissLightBox() {
    this.props.navigator.dismissLightBox();
  }

  public render() {
    return (
      <View style={styles.container}>
        <Text>
            I am a lightbox!
        </Text>
        <TouchableOpacity onPress={this.dismissLightBox.bind(this)}>
            <Text>Close Me!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect()(Lightbox);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333333",
  } as React.ViewStyle
});
import * as React from "react";
import { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Provider, connect } from "react-redux";

class Modal extends Component<any, void> {

  constructor(props: any) {
      super(props);
  }

  public dismissModal() {
    this.props.navigator.dismissModal({
        animationType: "slide-down"
    });
  }

  public render() {
    return (
      <View style={styles.container}>
        <Text>
            I am a modal!
        </Text>
        <TouchableOpacity onPress={this.dismissModal.bind(this)}>
            <Text>Close</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect()(Modal);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  } as React.ViewStyle
});
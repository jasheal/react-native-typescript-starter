import * as React from "react";
import { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Provider, connect } from "react-redux";

export interface ILightBoxProps {
  navigator: any;
}

class Lightbox extends Component<ILightBoxProps, void> {

  public render(): JSX.Element {
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

  private dismissLightBox(): void {
    this.props.navigator.dismissLightBox();
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
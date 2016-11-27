import * as React from "react";
import { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Provider, connect } from "react-redux";

export interface IModalProps {
  navigator: any;
}

class Modal extends Component<IModalProps, void> {

  constructor(props: IModalProps) {
    super(props);

    this.dismissModal = this.dismissModal.bind(this);
  }

  public render(): JSX.Element {
    return (
      <View style={styles.container}>
        <Text>
            I am a modal!
        </Text>
        <TouchableOpacity onPress={this.dismissModal}>
            <Text>Close</Text>
        </TouchableOpacity>
      </View>
    );
  }

  private dismissModal(): void {
    this.props.navigator.dismissModal({
        animationType: "slide-down"
    });
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
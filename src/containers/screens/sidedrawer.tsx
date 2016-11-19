import * as React from "react";
import { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

class SideDrawer extends Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    public render() {
        return(
            <View style={styles.container}>
                <Text>Im a side drawer</Text>
            </View>
        );
    }
}

export default connect()(SideDrawer);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    } as React.ViewStyle
});
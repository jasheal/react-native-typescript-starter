import * as React from "react";
import { Component } from "react";
import { View, Text, StyleSheet, Dimensions, Image} from "react-native";
import { Provider, connect } from "react-redux";
import { bindActionCreators } from "redux";
import actions from "../../actions";

const { height, width } = Dimensions.get("window");

function mapStateToProps(state: any) {
  return {
      app: state.app
  };
}

function mapDispatchToProps(dispatch: Redux.Dispatch<any>) {
    return { actions : bindActionCreators(actions, dispatch) };
}

class IntroMenu extends Component<any, any> {


    public render(): JSX.Element {
        return <View style={styles.listView}>
                    { this.renderCard() }
                    { this.renderCard() }
                    { this.renderCard() }
                    { this.renderCard() }
               </View>;
    }

    private renderCard(): JSX.Element {
        return <View style={styles.card}>
                    <View>
                        <Image style={styles.image} source={require("../../../assets/image-asset-dummy.png")} />
                    </View>
                    <View style={styles.information}>
                        <Text style={styles.title}>Title of demo</Text>
                        <Text style={styles.description}>A description of the demo</Text>
                    </View>
                </View>;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IntroMenu);

const styles = StyleSheet.create({
    listView: {
        flex: 1,
    } as React.ViewStyle,
    information: {
        padding: 10,
    } as React.ViewStyle,
    title: {
        fontSize: 13,
        marginBottom: 5
    } as React.TextStyle,
    description: {
        fontSize: 11,
    } as React.TextStyle,
    image: {
        height: width,
        backgroundColor: "#FAFAFA",
        borderRadius: 1,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "#DADADA"
    } as React.ViewStyle,
    card: {
    } as React.ViewStyle,
});
import { Dimensions, StyleSheet } from "react-native";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    textColor: {
        color: "black",
        fontSize: ((deviceWidth / 100) * 3.5),
        textAlign: "center",
        fontWeight: "700"
    },

    title: {
        color: "black",
        fontSize: ((deviceWidth / 100) * 5),
        textAlign: "center"
    },
    background: {
        backgroundColor: "whitesmoke",
        height: deviceHeight,
        width: deviceWidth
    },
    button: {
        backgroundColor: "black",
        padding: ((deviceWidth / 100) * 2),
        borderRadius: (deviceWidth / 100) * 5,
        width: (deviceWidth / 100) * 35,
        marginTop: "auto"
    }

});


export const Styles = () => {
    return {
        styles, deviceHeight, deviceWidth
    }
}
import { StyleSheet } from "react-native";

const writeTaskStyles = StyleSheet.create({
    writeTaskWrapper: {
        position: "absolute",
        bottom: 60,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
    },
    textInput: {
        padding: 15,
        borderRadius: 60,
        backgroundColor: "#fff",
        width: 250,
        textAlign: "center",
    },
    addWrapper: {
        width: 60,
        height: 60,
        borderRadius: 60,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    addText: {
    }
});

export default writeTaskStyles;
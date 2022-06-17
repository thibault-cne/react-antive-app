import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8eaed',
    },
    taskWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 30,
    },
    todoElement_container: {
        marginBottom: 20,
        padding: 15,
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    blue_square: {
        height: 24,
        width: 24,
        backgroundColor: "skyblue",
        borderRadius: 5,
        opacity: 0.4,
    },
    green_square: {
        height: 24,
        width: 24,
        backgroundColor: "green",
        borderRadius: 5,
        opacity: 0.4,
    },
    itemsLeft: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
    },
    itemsText: {
        marginLeft: 10,
        maxWidth: '80%',
    },
    circular: {
        width: 24,
        height: 24,
        borderRadius: 60,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
    },
    circularText: {
        color: "white",
        fontSize: 20,
    }
})

export default styles
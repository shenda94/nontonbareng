import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        height: "auto",
    },
    backImage: {
        flex: 1,
        justifyContent: "flex-start",
    },
    card: {
        borderColor: "black",
        borderRadius: 6,
        elevation: 3,
        backgroundColor: "#FFF",
        shadowOffset: { width: 1, height: 1 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
    },

    cardContent: {
        marginHorizontal: 20,
        marginVertical: 15,
    },
});
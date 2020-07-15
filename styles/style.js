import { StatusBar, StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  content: {
    flex: 1,
  },
  header: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  textDescription: {
    fontSize: 15,
    fontWeight: "200",
  },
  inputText: {
    borderColor: "lightblue",
    borderWidth: 1,
    padding: 10,
    width: 200,
    fontSize: 25,
  },
  button: {
    height: 35,
    width: 200,
    margin: 10,
    borderWidth: 2,
    borderRadius: 20,
    alignItems: "center",
    borderColor: "lightblue",
    justifyContent: "center",
  },
  convertContainer: {
    height: 150,
    alignItems: "center",
  },
  currencyText: {
    fontSize: 30,
    color: "coral",
    fontWeight: "bold",
  },
  currencyContainer:{
    height:100,
    alignItems: "center",
    justifyContent: "center",
  }
});

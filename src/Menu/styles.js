import { StyleSheet } from "react-native";
import Colors from "../common/Color";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  title: {
    height: "25%",
    backgroundColor: "white",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  gameName: {
    fontSize: 60,
    color: "#847262",
    fontWeight: "bold",
    marginRight: "2%",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    width: "30%",
    marginVertical: "2%",
  },
});

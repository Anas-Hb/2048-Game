import { StyleSheet } from "react-native";
import Colors from "../common/Color";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
    marginHorizontal: 20,
  },

  gameName: {
    fontFamily: "sans-serif",
    //flex: 1,
    fontWeight: "600",
    fontSize: 48,
    color: "#847262",
    margin: 15,
  },
  lastScoreContainer: {
    flexDirection: "row",
    margin: 15,
    borderWidth: 2,
    padding: 15,
    alignItems: "center",
    backgroundColor: "#d3d3d3",
    borderColor: "#AD9D8F",
    borderRadius: 5,
  },
  lastScoreLabel: {
    fontSize: 20,
    marginRight: 5,
    color: "#802b00",
    fontWeight: "bold",
  },
  lastScore: {
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 15,
    textAlign: "center",
    color: "white",
    //width: 100,
  },

  scoreContainer: {
    flexDirection: "row",
    margin: 15,
    borderWidth: 2,
    padding: 15,
    alignItems: "center",
    backgroundColor: "#d3d3d3",
    borderColor: "#AD9D8F",
    borderRadius: 5,
  },

  scoreLabel: {
    fontSize: 20,
    marginRight: 5,
    paddingHorizontal: 10,
    color: "#802b00",
    fontWeight: "bold",
  },
  score: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    //width: 100,
  },
  btnContainer: {
    width: "25%",
    marginVertical: "5%",
    marginHorizontal: "5%",
    flexDirection: "row",
    alignSelf: "flex-end",
    justifyContent: "space-around",
  },
  gameInfo: {
    color: "white",
    fontSize: 18,
    padding: 5,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#847262",
  },
  overlayBtn: {
    position: "absolute",
    left: 0,
    right: 0,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  gameoverHeading: {
    fontSize: 72,
    color: "#fff",
  },
  gameoverScore: {
    color: "#fff",
    fontSize: 24,
  },
  gameoverMessage: {
    color: "#fff",
    fontSize: 20,
  },
});

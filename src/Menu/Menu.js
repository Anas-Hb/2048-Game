import React, { Component } from "react";
import { View, Text, BackHandler } from "react-native";
import styles from "./styles";
import PrimaryButton from "../components/PrimaryButton/PrimaryButton";

export default class Menu extends Component {
  startGameBtn = () => {
    this.props.navigation.navigate("Game");
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.gameName}>2048</Text>
        </View>
        <View style={styles.content}>
          <PrimaryButton
            title="Start Game"
            style={{
              width: "30%",
              marginVertical: "2%",
            }}
            onPress={this.startGameBtn}
          />
          <PrimaryButton
            title="Exit"
            style={styles.btn}
            onPress={() => {
              BackHandler.exitApp();
            }}
          />
        </View>
      </View>
    );
  }
}

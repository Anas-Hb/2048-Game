import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Menu from "../Menu/Menu";
import Game from "../Game/Game";

const Stack = createStackNavigator();

export default class StackNav extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Game"
          component={Game}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
}

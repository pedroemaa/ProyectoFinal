import { React } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import StorePantalla from "./StorePantalla";

const OfficioStack = createStackNavigator();

export const OfficioNavigator = () => {
  return (
    <OfficioStack.Navigator>
      <OfficioStack.Screen
        name="Inicio"
        component={StorePantalla}
        options={{ headerShown: false }}
      />
    </OfficioStack.Navigator>
  );
};

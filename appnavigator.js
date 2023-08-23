import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import StorePantalla from "./StorePantalla.js";

import MapPantalla from "./MapPantalla.js";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Officio: "ios-briefcase",
  Mapa: "earth-outline",
  Cuenta: "person-circle-outline",
};

const Account = (navigation) => <Text>Mi cuenta</Text>;

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];

  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: "#0B6EFE",
    tabBarInactiveTintColor: "gray",
  };
};

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen name="Officio" component={StorePantalla} />

        <Tab.Screen name="Mapa" component={MapPantalla} />

        <Tab.Screen name="Cuenta" component={Account} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});

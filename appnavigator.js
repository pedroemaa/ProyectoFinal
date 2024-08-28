import React from "react";
import { StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import MapPantalla from "./Front-end/User/MapPantalla.js";
import { OfficioNavigator } from "./infonavigator.js";
import LoginScreen from "./Front-end/Initi/LoginScreen.js";
import DatosPersonales from "./Front-end/PersonalInformation/datosPersonales.js";
import CambiarContraseña from "./CambiarContraseña.js";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Officio: "ios-briefcase",
  Mapa: "earth-outline",
  Cuenta: "person-circle-outline",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];

  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: "#0B6EFE",
    tabBarInactiveTintColor: "gray",
    tabBarActiveBackgroundColor: "lightgray",
    headerShown: false,

    tabBarStyle: {
      backgroundColor: "white",
      borderRadius: 30,
      width: "85%",
      height: "11%",
      marginLeft: 30,
      marginTop: "-100%",
    },
    tabBarIconStyle: {
      marginBottom: 1,
      borderRadius: 25,
    },
    tabBarLabelStyle: {
      fontSize: 20,
      fontWeight: "bold",
    },
  };
};

export const AppNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen name="Mapa" component={MapPantalla} />
        <Tab.Screen name="Officio" component={OfficioNavigator} />
        <Tab.Screen name="Login" component={LoginScreen} options={{tabBarButton: () => null, tabBarStyle: { display: "none" }, }}/>
        <Tab.Screen name="DatosPersonales" component={DatosPersonales} options={{ tabBarButton: () => null, tabBarStyle: { display: "none" },}}/>
        <Tab.Screen name="CambiarContraseña" component={CambiarContraseña} options={{tabBarButton: () => null, tabBarStyle: { display: "none" },}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

/////// con el options oculto el boton para que se pueda utilizar en la navegacion sin que este presente//////

export default AppNavigator;

const styles = StyleSheet.create({});

import React from "react";
import {
  StyleSheet
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import MapPantalla from "./MapPantalla.js";
import chats from "./chats.js";
import job from "./jobs.js";
import puesto from "./CrearPuestoEmpleo.js";
import { OfficioNavigator } from "./infonavigator.js";
import LoginScreen from "./LoginScreen.js";
const Tab = createBottomTabNavigator();
const TAB_ICON = {
  Chats: "chatbox-ellipses-outline",
  Jobs: "duplicate-outline",
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
        borderRadius:25,
        },
    tabBarLabelStyle: {
      fontSize: 20,
      fontWeight: "bold",
      },
      };
};


export const AppNavigatorProfesional = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen name="Chats" component={chats} />
        <Tab.Screen name="Jobs" component={job}  />
        <Tab.Screen name="Puesto" component={puesto} options={{ tabBarButton: () => null,  tabBarStyle:{display : 'none'}}} />
        <Tab.Screen name="Login" component={LoginScreen} options={{ tabBarButton: () => null,  tabBarStyle:{display : 'none'}}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
/////// con el options oculto el boton para que se pueda utilizar en la navegacion sin que este presente//////

export default AppNavigatorProfesional;
const styles = StyleSheet.create({});

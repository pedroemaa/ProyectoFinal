import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Button,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import ButtonLogin from "./ButtonLogin.js";
import CambiarContraseña from "./CambiarContraseña.js";
import ButtonCrearCuenta from "./Buttoncrearcuenta.js";
import CrearCuenta from "./Front-end/CreateAccount/Crearcuenta.js";
import LoginScreen from "./Front-end/Initi/LoginScreen.js";
import MapPantalla from "./Front-end/User/MapPantalla.js";
import StorePantalla from "./Front-end/Store/StorePantalla.js";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountNavigator from "./accountnavigator.js";
import { StoreContextProvider } from "./Front-end/Store/StoresContext.js";
import Navigation from "./navigation.js";
import AppNavigator from "./appnavigator.js";


const Stack = createNativeStackNavigator();

function App() {
  return (
    <StoreContextProvider>
      <AccountNavigator headerShown={false} tabbarvisible= {false }  />
    </StoreContextProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputlogin: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    width: "80%",
    marginTop: 20,
    height: 50,
    borderRadius: 30,
    backgroundColor: "white",
    paddingStart: 30,
  },
  txtlogin: {
    fontSize: 50,
  },

  txtbuttoncrearcuenta: {
    fontSize: 20,
    marginTop: 50,
  },
});

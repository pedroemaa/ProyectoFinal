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
import PantPrincipal from "./PantPrincipal.js";
import ButtonLogin from "./ButtonLogin.js";
import CambiarContraseña from "./CambiarContraseña.js";
import ButtonCrearCuenta from "./Buttoncrearcuenta.js";
import CrearCuenta from "./Crearcuenta.js";
import LoginScreen from "./LoginScreen.js";
import MapPantalla from "./MapPantalla.js";
import NuevaPantalla from "./botonNuevaPantalla.js";
import StorePantalla from "./StorePantalla.js";
import CrearCuentaProfesional from "./CrearCuentaProfesional.js";
import ImagenesProfecional from"./SubirImagenesProfesional.js";
//import CrearProfecional from"./crearPerfilProf.js";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navigation from "./navigation.js";

const Stack = createNativeStackNavigator();

export default function AccountNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name= "Pantalla Principal" component={PantPrincipal}/>
        <Stack.Screen name="Crear Cuenta Profesional" component={CrearCuentaProfesional} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CrearCuenta" component={CrearCuenta} />
        <Stack.Screen name="CambiarContraseña" component={CambiarContraseña} />
        <Stack.Screen name="Navigation" component={Navigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




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

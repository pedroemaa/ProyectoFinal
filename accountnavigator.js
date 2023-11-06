import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import PantPrincipal from "./PantPrincipal.js";
import CambiarContraseña from "./CambiarContraseña.js";
import CrearCuenta from "./Crearcuenta.js";
import LoginScreen from "./LoginScreen.js";
import CreateAccoutMail from "./CreateAccoutMail.js";
import CreateAccoutContra from "./CreateAccoutContra.js";
import CrearCuentaProfesional from "./CrearCuentaProfesional.js";
import CraerCuentaMixta from "./PantallaCuentaMixta.js"
import ImagenesProfecional from "./SubirImagenesProfesional.js";
import ImagenesMixta from "./crearPerfilProf.js";
import CraerCuentaUserEnd from "./CrearCuentaUserEnd.js";
import CrearPuestoEmpleo from "./CrearPuestoEmpleo.js";
import DatosPersonales from "./datosPersonales.js";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navigation from "./navigation.js";
import NavigationProf from "./navigatiorProfesional.js";
import NavegacionMixto from "./appnavigatorMixto.js";


const Stack = createNativeStackNavigator();
export default function AccountNavigator() {
  return (
    <NavigationContainer
      screenOptions={{ headerShown: false }} screenOptions2={{ tabbarvisible: false }}>
      <Stack.Navigator screenOptions={{ headerShown: false }}  screenOptions2={{ tabbarvisible: false }}>
        <Stack.Screen name="Pantalla Principal" component={PantPrincipal} />
        <Stack.Screen name="Crear Cuenta Mail" component={CreateAccoutMail} />
        <Stack.Screen name="Crear Cuenta Profesional" component={CrearCuentaProfesional}/>
        <Stack.Screen name="Crear Cuenta Usuario" component={CraerCuentaUserEnd}/>
        <Stack.Screen name="Crear Cuenta Mixta" component={CraerCuentaMixta}/>
        <Stack.Screen name="ImagenesMixta" component={ImagenesMixta}/>
        <Stack.Screen name="Crear Contraseña" component={CreateAccoutContra} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ImagenesProfecional" component={ImagenesProfecional}/>
        <Stack.Screen name="CrearCuenta" component={CrearCuenta} />
        <Stack.Screen name="CambiarContraseña" component={CambiarContraseña} />
        <Stack.Screen name="Navigation" component={Navigation} />
        <Stack.Screen name="InfoOficio" component={Navigation} />
        <Stack.Screen name="CrearPuestoEmpleo" component={CrearPuestoEmpleo} />
        <Stack.Screen name="Mapa" component={Navigation} />
        <Stack.Screen name="Profe" component={NavigationProf} />
        <Stack.Screen name="Puesto" component={Navigation} />
        <Stack.Screen name="Mixto" component={NavegacionMixto} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

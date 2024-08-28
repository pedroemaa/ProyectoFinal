import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import PantPrincipal from "./Front-end/Initi/PantPrincipal.js";
import CambiarContraseña from "./CambiarContraseña.js";
import CrearCuenta from "./Front-end/CreateAccount/Crearcuenta.js";
import LoginScreen from "./Front-end/Initi/LoginScreen.js";
import CreateAccoutMail from "./Front-end/CreateAccount/CreateAccoutMail.js";
import CreateAccoutContra from "./Front-end/CreateAccount/CreateAccoutContra.js";
import CrearCuentaProfesional from "./Front-end/CreateAccount/CrearCuentaProfesional.js";
import CraerCuentaMixta from "./Front-end/Mixto/PantallaCuentaMixta.js"
import ImagenesProfecional from "./Front-end/Profesional/SubirImagenesProfesional.js";
import ImagenesMixta from "./Front-end/CreateAccount/crearPerfilProf.js";
import CraerCuentaUserEnd from "./Front-end/CreateAccount/CrearCuentaUserEnd.js";
import CrearPuestoEmpleo from "./Front-end/CreateJob/CrearPuestoEmpleo.js";
import DatosPersonales from "./Front-end/PersonalInformation/datosPersonales.js";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navigation from "./navigation.js";
import NavigationProf from "./Front-end/Profesional/navigatiorProfesional.js";
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

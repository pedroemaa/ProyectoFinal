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
import CrearCuenta from "./Crearcuenta.js";
import LoginScreen from "./LoginScreen.js";
import MapPantalla from "./MapPantalla.js";
import StorePantalla from "./StorePantalla.js";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountNavigator from "./accountnavigator.js";
import { StoreContextProvider } from "./StoresContext.js";
import Navigation from "./navigation.js";
import AppNavigator from "./appnavigator.js";

/* import * as firebase from "firebase"; */

// Your web app's Firebase configuration
/*const firebaseConfig = {
  apiKey: "AIzaSyANDfEhHABd2mi-qOB5ab69WhKDHCqnvBo",
  authDomain: "hiring-12533.firebaseapp.com",
  projectId: "hiring-12533",
  storageBucket: "hiring-12533.appspot.com",
  messagingSenderId: "756650175459",
  appId: "1:756650175459:web:5d162fa4d579b92072ced6"
};
*/
// Initialize Firebase

/*if(!firebase.apps.lenght)
{

 firebase.initializeApp(firebaseConfig);


}

*/
const Stack = createNativeStackNavigator();

function App() {
  return (
    <StoreContextProvider>
      <AccountNavigator headerShown={false} />
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

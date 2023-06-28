import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function CambiarContraseña(navigation) {
  return (
    <View style={styles.containercambiarcontraseña}>
      <Image
        style={styles.image}
        source={require("./src/assetsPropios/ImagenLogIn.png")}
      />
      <TextInput
        placeholder="Nueva Contraseña"
        style={styles.inputcambiarcontraseña}
      />
      <TextInput
        placeholder="Confirmar Contraseña"
        style={styles.inputcambiarcontraseña}
      />
      <TouchableOpacity style={styles.buttoncambiarcontraseña}>
        <Text style={styles.txtmodificarcontraseña}>Modificar Contraseña</Text>
      </TouchableOpacity>
    </View>
  );
}
export default CambiarContraseña;

const styles = StyleSheet.create({
  containercambiarcontraseña: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 310,
    height: 230,
    marginBottom: 50,
  },
  buttonlogin: {
    fontSize: 20,
    marginTop: 50,
  },
  buttoncambiarcontraseña: {
    marginTop: 40,
    width: "88%",
    height: 60,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#0B6EFE",
  },
  inputcambiarcontraseña: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    width: "88%",
    marginTop: 12,
    height: 60,
    borderRadius: 8,
    backgroundColor: "white",
    paddingStart: 30,
  },
  txtmodificarcontraseña: {
    marginTop: 6,
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});

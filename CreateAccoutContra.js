import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from "react-native";
import Validacion, { desactivar } from "./ValidarInputs";

export default function CreateAccoutContra({ navigation }) {
  const handleCrearCuenta = () => {
    navigation.navigate("CrearCuenta");
  };

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.general}>
          <StatusBar style="auto" />
          <Image
            style={styles.image}
            resizeMode={"stretch"}
            source={require("./src/assetsPropios/ImagenLogIn.png")}
          />
          <Text style={styles.txtCrearContra}>Crear Contraseña</Text>

          <Validacion
            placeholder="Contraseña"
            regex={/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/}
            validacionMensaje="No ingreso un formato correcto en el campo contraseña"
          />

          <Validacion
            placeholder="Repita Contraseña"
            regex={/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/}
            validacionMensaje="No ingreso un formato correcto en el campo contraseña"
          />

          <View style={styles.general1}>
            <ImageBackground
              source={require("./src/assetsPropios/fondoabajo3.png")}
              resizeMode={'stretch'}
              style={styles.fondo}
             >
             <View style={styles.botones}>
                  <TouchableOpacity
                  style={styles.buttonCrear}
                   onPress={handleCrearCuenta}
                  >
                  <Text style={styles.txtcontinuar}>Crear Cuenta</Text>
                </TouchableOpacity>
             </View>
            </ImageBackground>
          </View>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  validar: {
    fontSize: 100,
    color: "red",
    alignSelf: "center",
  },

  txtcrearcuenta: {
    color: "white",
    fontSize: 15,
  },
  general: {
    flex: 1,
    },

 general1: {
      flex: 1,
    },

  image: {
    flex: 1,
    marginTop: -50,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
    width: '90%',
    height: '90%',
  },


  fondo: {
    flex:1,
    width: '100%',
    height: '120%',
  },

  txtCrearContra: {
    fontSize: 25,
    alignSelf: "flex-start",
    marginLeft: 20,
    fontWeight: "bold",
  },

  botones: {
    flexDirection: "row",
    marginLeft: 30,
    justifyContent: "center",
    alignSelf: "center",
  },

  txtcontinuar: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    marginTop: 5,
    fontWeight: "bold",
  },

  buttonCrear: {
    alignSelf: "center",
    fontSize: 20,
    marginTop: 40,
    width: "70%",
    height: 60,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#0B6EFE",
  },
});

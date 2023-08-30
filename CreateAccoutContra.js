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
      <ScrollView>
        <View style={styles.general}>
          <StatusBar style="auto" />
          <Image
            style={styles.image}
            source={require("./src/assetsPropios/ImagenLogIn3.png")}
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

          <View>
            <ImageBackground
              source={require("./src/assetsPropios/fondoabajo3.png")}
              resizeMode={"stretch"}
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
      </ScrollView>
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
    alignItems: "center",
    justifyContent: "flex-end",
  },

  image: {
    width: 300,
    height: 220,
    marginBottom: 15,
    marginTop: -30,
  },

  fondo: {
    width: 400,
    height: 320,
    marginTop: 20,
  },

  txtCrearContra: {
    fontSize: 20,
    alignSelf: "flex-start",
    marginLeft: 45,
    fontWeight: "bold",
  },

  botones: {
    flexDirection: "row",
    marginLeft: 30,
    justifyContent: "center",
  },

  txtcontinuar: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    marginTop: 5,
    fontWeight: "bold",
  },

  buttonCrear: {
    alignSelf: "flex-start",
    fontSize: 20,
    marginTop: 70,
    width: "100%",
    height: 60,
    borderRadius: 10,
    padding: 10,
    marginLeft: -15,
    backgroundColor: "#0B6EFE",
  },
});

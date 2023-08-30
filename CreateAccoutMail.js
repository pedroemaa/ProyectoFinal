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

export default function CreateAccoutMail({ navigation }) {
  const handleContra = () => {
    navigation.navigate("Crear Contraseña");
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

          <Text style={styles.txtIngMail}>Ingrese su Mail</Text>

          <Validacion
            placeholder="ejem@ejemplo.com"
            regex={/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}
            validacionMensaje="No ingreso un formato correcto en el campo mail"
          />

          <View style={styles.botones}>
            <TouchableOpacity style={styles.buttonCrear} onPress={handleContra}>
              <Text style={styles.txtcontinuar}>Crear Cuenta</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("./src/assetsPropios/lineaAzul.png")}
              style={styles.lineaAzul}
            />

            <Text style={styles.txtcrearcuenta}>O crea tu cuenta</Text>
            <Image
              source={require("./src/assetsPropios/lineaAzul2.png")}
              style={styles.lineaAzul}
            />
          </View>

          {/* Imagen Azul de fondo, con el logo que se pueda tocar*/}
          <View>
            <ImageBackground
              source={require("./src/assetsPropios/fondoabajo3.png")}
              resizeMode={"stretch"}
              style={styles.fondo}
            >
              <TouchableOpacity style={{ marginTop: 100 }}>
                <Image
                  source={require("./src/assetsPropios/GoogleLogo.png")}
                  style={{
                    alignSelf: "center",
                  }}
                ></Image>
              </TouchableOpacity>
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

  txtIngMail: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginLeft: 40,
  },

  validar: {
    fontSize: 100,
    color: "red",
    alignSelf: "center",
  },

  txtbuttoncrearcuenta: {
    fontSize: 20,
    marginTop: 50,
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
    fontSize: 10,
    marginTop: 50,
    width: "100%",
    height: 50,
    borderRadius: 10,
    padding: 10,
    marginLeft: -30,
    backgroundColor: "#0B6EFE",
  },

  txtcrearcuenta: {
    color: "black",
    marginTop: 12,
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
    marginTop: -50,
  },

  buttonLoginCambiarContraseña: {
    marginTop: 5,
    fontSize: 20,
    flexDirection: "row",
    alignSelf: "flex-end",
    marginRight: 45,
  },

  lineaAzul: {
    marginTop: 22,
    marginHorizontal: 10,
  },
});

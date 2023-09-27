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
import ButtonLogin from "./ButtonLogin";
import NuevaPantalla from "./botonNuevaPantalla";
import Validacion, { desactivar } from "./ValidarInputs";

export default function LoginScreen({ navigation }) {
  const handleRegister = () => {
    navigation.navigate("CrearCuenta");
  };

  const handleStoreInfo = () => {
    navigation.navigate("InfoOficio");
  };

  const handleCambiarContraseña = () => {
    navigation.navigate("CambiarContraseña");
  };

  const handleMap = () => {
    navigation.navigate("Mapa");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.general}>
        <Image
          style={styles.image}
          resizeMode={"stretch"}
          source={require("./src/assetsPropios/ImagenLogIn.png")}
        />
        <Text style={styles.txtlogin}>Ingrese su usuario</Text>

        <Validacion
          placeholder="Usuario, email o numero de telefono"
          regex={/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}
          validacionMensaje="No ingreso un formato correcto en el campo mail"
        />

        <Validacion
          placeholder="Contraseña"
          regex={/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/}
          validacionMensaje="No ingreso un formato correcto en el campo contraseña"
        />

        <TouchableOpacity
          onPress={handleCambiarContraseña}
          style={styles.buttonLoginCambiarContraseña}
        >
          <Text style={{ fontSize: 16 }}>¿Has olvidado la contraseña?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonlogin}
          onPress={handleMap}
          disabled={false}
        >
          <ButtonLogin />
        </TouchableOpacity>

        <View style={styles.general1}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("./src/assetsPropios/lineaAzul.png")}
              style={styles.lineaAzul}
            />
            <Text style={styles.txtingresar}>O ingresar con</Text>
            <Image
              source={require("./src/assetsPropios/lineaAzul2.png")}
              style={styles.lineaAzul}
            />
          </View>
          {/* Imagen Azul de fondo, con el logo que se pueda tocar*/}

          <ImageBackground
            source={require("./src/assetsPropios/fondoabajo3.png")}
            resizeMode={"stretch"}
            style={styles.fondo}
          >
            <View style={styles.Google}>
              <TouchableOpacity onPress={handleMap} style={{ marginTop: 100 }}>
                <Image
                  source={require("./src/assetsPropios/GoogleLogo.png")}
                  style={{
                    alignSelf: "center",
                  }}
                ></Image>
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

  txtlogin: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginLeft: 25,
  },

  general: {
    flex: 1,
  },

  general1: {
    flex: 1,
  },

  Google: {
    flex: 1,
    flexDirection: "row",
    marginTop: -40,
    justifyContent: "center",
  },

  image: {
    flex: 1,
    marginTop: -40,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: "90%",
  },

  fondo: {
    flex: 1,
    width: "100%",
    height: "120%",
  },

  buttonLoginCambiarContraseña: {
    marginTop: 5,
    fontSize: 20,
    flexDirection: "row",
    alignSelf: "flex-end",
    marginRight: 25,
  },

  buttonlogin: {
    marginTop: 20,
    width: "80%",
    height: 50,
    alignSelf: "center",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#0B6EFE",
  },

  txtingresar: {
    marginTop: 13,
    color: "black",
    fontSize: 15,
  },

  lineaAzul: {
    marginTop: 22,
    marginHorizontal: 10,
  },
});

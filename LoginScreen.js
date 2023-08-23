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
import Validacion, { desactivar } from "./ValidarInputs";

function LoginScreen({ navigation }) {
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
    navigation.navigate("Map");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.general}>
          <StatusBar style="auto" />
          <Image
            style={styles.image}
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
          <TouchableOpacity onPress={handleRegister} style={{ marginTop: 20 }}>
            <ImageBackground
              source={require("./src/assetsPropios/GoogleLogoBorde.png")}
              style={{ width: 52, height: 52 }}
            >
              <Image
                source={require("./src/assetsPropios/GoogleLogo.png")}
                style={{
                  alignSelf: "center",
                  marginTop: 10,
                }}
              ></Image>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleStoreInfo}
            style={styles.buttonLoginCambiarContraseña}
            disabled={desactivar}
          >
            <Text
              style={{
                fontSize: 16,
                textAlign: "center",
                width: "100%",
                marginTop: 20,
              }}
            >
              Ir a Officios
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  txtlogin: {
    fontSize: 50,
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
  buttonlogincrearcuenta: {
    fontSize: 20,
    marginTop: 50,
    backgroundColor: "#43DE48",
    padding: 25,
    borderRadius: 30,
    width: "40%",
    textAlign: "center",
  },
  buttonlogincambiarcontraseña: {
    fontSize: 20,
    marginTop: 50,
  },
  txtcrearcuenta: {
    color: "white",
    fontSize: 15,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  general: {
    alignItems: "center",
    justifyContent: "flex-end",
  },
  image: {
    width: 310,
    height: 230,
    marginBottom: 50,
  },
  inputlogin: {
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
  txtlogin: {
    fontSize: 20,
    alignSelf: "flex-start",
    marginLeft: 45,
  },
  txtbuttoncrearcuenta: {
    fontSize: 20,
    marginTop: 50,
  },
  buttonlogincrearcuenta: {
    fontSize: 20,
    marginTop: 50,
    backgroundColor: "#43DE48",
    padding: 25,
    borderRadius: 8,
    width: "40%",
    textAlign: "center",
  },
  buttonLoginCambiarContraseña: {
    marginTop: 5,
    fontSize: 20,
    flexDirection: "row",
    alignSelf: "flex-end",
    marginRight: 45,
  },
  buttonlogin: {
    marginTop: 30,
    width: "88%",
    height: 60,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#0B6EFE",
  },
  txtcrearcuenta: {
    marginTop: 30,
    color: "black",
    fontSize: 15,
  },
  lineaAzul: {
    marginTop: 40,
    marginHorizontal: 20,
  },
});

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
export default function PantPrincipal({ navigation }) {
  const handleLogin = () => {
    navigation.navigate("Login");
  };
  const handleCrearCuentaMail = () => {
    navigation.navigate("Crear Cuenta Mail");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.general}>
        <ImageBackground
          style={styles.image}
          resizeMode={"stretch"}
          source={require("./src/assetsPropios/ImagenLogIn3.png")}
        />
        <Text style={styles.txtImagenes}>Bienvenido a Hiring</Text>
        <Text style={styles.buttonText}>
          La app ideal para vos que necesitas buscar a profesionales del oficio,
          con tan solo un click podes buscar entre miles de ellos y los que
          esten mas cerca de tu casa
        </Text>
        <View style={styles.BotonImagenes}>
          <ImageBackground          
            source={require("./src/assetsPropios/fondoabajo3.png")}
            resizeMode={'cover'}
            style={styles.fondo}
          >
            <View style={styles.botones}>
              <TouchableOpacity
                style={styles.buttonCrear}
                onPress={handleCrearCuentaMail}
              >
                <Text style={styles.txtcontinuar}>Crear Cuenta</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonIniciar}
                onPress={handleLogin}
              >
                <Text style={styles.txtcontinuar}>Iniciar Sesion</Text>
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
  general: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginTop: -40,
    justifyContent: "flex-end",
    width: 360,
    height: 245,
  },
  txtImagenes: {
    fontSize: 80,
    fontWeight: "semibold",
    marginLeft: 10,
  },
  botones: {
    flexDirection: "row",
    marginLeft: 30,
    justifyContent: "center",
  },
  BotonImagenes: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20,
    width: "10%",
  },
  button: {
    backgroundColor: "#EDEDED",
    borderRadius: 5,
    padding: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#635C5C",
    fontSize: 18,
    justifyContent: "center",
    marginLeft: 15,
  },
  fondo: {
    width: 390, 
    height: 400,
    marginTop: 110,
    
    
  },
  txtcontinuar: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    marginTop: 5,
    fontWeight: "bold",
  },
  buttonCrear: {
    fontSize: 10,
    marginTop: 320,
    width: "47%",
    height: 50,
    borderRadius: 14,
    padding: 10,
    marginLeft: -20,
    backgroundColor: "#0B6EFE",
  },
  buttonIniciar: {
    alignSelf: "flex-start",
    marginLeft: 30,
    fontSize: 10,
    marginTop: 320,
    width: "47%",
    height: 50,
    borderRadius: 14,
    padding: 10,
    backgroundColor: "#0B6EFE",
  },
});
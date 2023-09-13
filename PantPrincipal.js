import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
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
      <StatusBar style="auto" />
        <Image
          style={styles.image}
          resizeMode={"stretch"}
          source={require("./src/assetsPropios/ImagenLogIn.png")}
        />
        <Text style={styles.txtImagenes}>Bienvenido a Hiring</Text>
        <Text style={styles.buttonText}>
          La app ideal para vos que necesitas buscar a profesionales del oficio,
          con tan solo un click podes buscar entre miles de ellos y los que
          esten mas cerca de tu casa
        </Text>

     
          <ImageBackground          
            source={require("./src/assetsPropios/fondoabajo3.png")}
            resizeMode={"stretch"}
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
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  general: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    marginTop: -30,
    justifyContent: "flex-end",
    width: 360,
    height: 245,
  },

  fondo: {
    flex: 1, 
    width: '100%',
    height: '120%',

  },

  txtImagenes: {
    fontSize: 74,
    fontWeight: "semibold",
    marginLeft: 10,
    alignSelf: "center",
  },
  botones: {
    flexDirection: "row",
    marginLeft: 30,
    justifyContent: "flex-start",
   
  },
  BotonImagenes: {
    flex: 1,
    alignItems: "center",
    alignSelf: "center",
    marginTop: -100,
    width: "10%",
    justifyContent: 'flex-start'
  },

  buttonText: {
    color: "#635C5C",
    fontSize: 18,
    justifyContent: "center",
    marginLeft: 15,
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
    fontSize: 10,
    marginTop: 200,
    width: "47%",
    height: 50,
    borderRadius: 14,
    padding: 10,
    marginLeft: -20,
    backgroundColor: "#0B6EFE",
  },
  buttonIniciar: {
    marginLeft: 30,
    fontSize: 10,
    marginTop: 200,
    width: "47%",
    height: 50,
    borderRadius: 14,
    padding: 10,
    backgroundColor: "#0B6EFE",
  },
});
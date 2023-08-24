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
import * as ImagePicker from "expo-image-picker";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function crearPerfilProf ({ navigaton }) {
  


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.general}>
          <Image
            style={styles.image}
            source={require("./src/assetsPropios/ImagenLogIn3.png")}
          />

          <Text style={styles.txtImagenes}>Imagenes</Text>

          <View style={styles.BotonImagenes}>
            <TouchableOpacity
              style={styles.button}
              onPress={handleImageSelect}
            >
              <Text style={styles.buttonText}>Subir imagenes</Text>
            </TouchableOpacity>
            {selectedImage && (
              <Image source={{ uri: selectedImage }} style={styles.image2} />
            )}
          </View>
          <View >
            <ImageBackground source={require("./src/assetsPropios/fondoabajo3.png") } resizeMode= {'cover'} style={styles.fondo}  >

          <TouchableOpacity
          
              style={styles.buttoncontinuar}
          > 
          <Text style={styles.txtcontinuar}>Crear</Text>
            
           
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
  general: {
    alignItems: "center",
    justifyContent: "flex-end",
  },
  image: {
    justifyContent: "flex-end",
    width: 315,
    height: 230,
  },
  txtImagenes: {
    fontSize: 25,
    alignSelf: "flex-start",
    fontWeight: "bold",
    marginLeft: 40,
  },
  BotonImagenes: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20,
    width: "88%",
  },
  button: {
    backgroundColor: "#EDEDED",
    borderRadius: 20,
    padding: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#635C5C", 
    fontSize: 18,
  },
  fondo: {
    width: 400,
    height: 320,
    marginTop: 80,  
  },
  image2: {
    width: 300,
    height: 300,
    marginTop: 20,
  },

  txtcontinuar: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    marginTop: 5,
    fontWeight: "bold",
  },

  buttoncontinuar: {
    alignSelf: "center",
    marginTop: 240,
    width: "88%",
    height: 60,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#0B6EFE",
  },
});


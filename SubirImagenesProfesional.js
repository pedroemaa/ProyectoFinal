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
import {  useNavigation } from "@react-navigation/native";

export default function SubirImagenProfesional ({ navigaton }) {
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageSelect = async () => {
        let { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
         console.error("Permiso de acceso a la galería denegado");
      return;
      }
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
       });
      if (!result.canceled) {
        setSelectedImage(result.uri);
      }
  };
 const handleCrearProfecional = () => {
  navigation.navigate('Profe');
 };
  
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.general}>
              <Image
                  style={styles.image}
                  resizeMode={"stretch"}
                  source={require("./src/assetsPropios/ImagenLogIn.png")}/>
              <Text style={styles.txtImagenes}>Imagenes</Text>
              <View style={styles.BotonImagenes}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleImageSelect}>
                  <Text style={styles.buttonText}>Subir imagenes</Text>
                </TouchableOpacity>
                  {selectedImage && (
               <Image source={{ uri: selectedImage }} style={styles.image2} />
                                )}
              </View>
              <View  style={styles.general1}>
                <ImageBackground source={require("./src/assetsPropios/fondoabajo3.png") }
                                 resizeMode= {'stretch'}
                                 style={styles.fondo}>
                  <View  style={styles.Google}>                
                  <TouchableOpacity
                      style={styles.buttoncontinuar}> 
                    <Text style={styles.txtcontinuar}
                          onPress={handleCrearProfecional}>Continuar</Text> 
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
    flex: 1,
  },
  general1: {
    flex: 1,
  },
  image: {
    flex: 1,
    marginTop: -40,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
    width: '90%',
    height: '100%',
  },
  txtImagenes: {
    fontSize: 25,
    alignSelf: "flex-start",
    fontWeight: "bold",
    marginLeft: 60,
  },

  BotonImagenes: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: -20,
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
    flex:1,
    width: '100%',
    height: '120%',
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
    fontSize: 20,
    marginTop: 200,
    width: "88%",
    height: 50,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#0B6EFE",
  },
  image2: {
    justifyContent: "center",
    flex: 1,
  },

  Google: {
    flex:1,
    flexDirection: "row",
    marginTop: -40,
    justifyContent: "center",
   
  },

});
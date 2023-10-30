import React, { useState, useEffect } from "react";
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
  Alert
} from "react-native";
import ButtonLogin from "./ButtonLogin";
import Validacion, { desactivar } from "./ValidarInputs";
import { getAuth, auth, signInWithEmailAndPassword, inMemoryPersistence } from "firebase/auth";
//import { initializeAuth, getReactNativePersistence, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config-firebase";
import { useNavigation } from "@react-navigation/native";
import {getFirestore, collection, getDoc, doc} from 'firebase/firestore';

export default function LoginScreen({ navigation }) {
 
  const handleStoreInfo = () => {
    navigation.navigate("InfoOficio");
  };
  const handleCambiarContraseña = () => {
    navigation.navigate("CambiarContraseña");
  };
  const handleMap = () => {
    navigation.navigate("Mapa");
  };
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const app = initializeApp(firebaseConfig);
 
  const auth = getAuth(app); // Obtén la instancia de autenticación de Firebase

  const handleSingIn = () => {
    if (email.trim() === "" || password.trim() === "") {
      Alert.alert("Por favor, complete ambos campos.");
      return;
    }
  
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const uid = user.uid;
  
        // Ahora que tienes el uid del usuario, puedes consultar Firestore
        const db = getFirestore(); // Asegúrate de importar getFirestore desde firebase/firestore
        const usersCollection = collection(db, "usuario"); // "usuarios" es el nombre de la colección en Firestore
  
        const userRef = doc(usersCollection, uid);
  
        getDoc(userRef)
          .then((doc) => {
            if (doc.exists()) {
              const userData = doc.data();
              const tipoCuenta = userData.tipoCuenta;
  
              // Redirige al usuario según el tipo de cuenta
              if (tipoCuenta === "profesional") {
                navigation.navigate("Profe");
              } else if (tipoCuenta === "basico") {
                navigation.navigate('Mapa');
              } else {
                Alert.alert('Tipo de cuenta desconocido');
              }
            } else {
              Alert.alert('Usuario no encontrado en la base de datos');
              
            }
          })
          .catch((error) => {
            Alert.alert('Error al acceder a la base de datos: ' + error.message);
          });
      })
      .catch((error) => {
        Alert.alert(error.code);
        Alert.alert(error.message);
      });
  }
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
          onChangeText={(text) => setEmail(text)}
          placeholder="Usuario, email o numero de telefono"
          regex={/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}
          validacionMensaje="No ingreso un formato correcto en el campo mail"
        />
        <Validacion
          onChangeText={(text) => setPassword(text)}
          placeholder="Contraseña"
          secureTextEntry={true}
          regex={/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}
          validacionMensaje="No ingreso un formato correcto en el campo mail"
          
        />
        <TouchableOpacity
          onPress={handleCambiarContraseña}
          style={styles.buttonLoginCambiarContraseña}
        >
          <Text style={{ fontSize: 16 }}>¿Has olvidado la contraseña?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonlogin}
          onPress={handleSingIn}
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
                    alignSelf: "center"
                  }}
                >
                </Image>
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
    fontWeight: 'bold',
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
    flex:1,
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
    width: '90%',
    height: '90%',
  },
  fondo: {
    flex: 1, 
    width: '100%',
    height: '120%',
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
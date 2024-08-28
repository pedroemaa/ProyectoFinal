import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import Validacion, { desactivar } from "../../ValidarInputs";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {initializeApp} from "firebase/app";
import { firebaseConfig } from "../../config-firebase";

export default function CreateAccoutMail({ navigation }) {
  
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const [uid, setUid] = useState(null);

  const handleCreateAccount = () => {
   createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
     
      const user = userCredential.user;
   
      setUid(user.uid);
        navigation.navigate("CrearCuenta", { uid: user.uid })
    //  navigation.navigate("CrearCuenta", params)
      Alert.alert('Account created')
      console.log(user)
    })
    .catch(error => {
      Alert.alert(error.message)
    })
  }
  
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
            source={require("../../src/assetsPropios/ImagenLogIn.png")}
          />
          <Text style={styles.txtIngMail}>Crear Cuenta</Text>
          <Validacion
            onChangeText= {(text)=> setEmail(text)}
            placeholder="ejem@ejemplo.com"
            regex={/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}
            validacionMensaje="No ingreso un formato correcto en el campo mail"
          />
          <Validacion
            placeholder="Contraseña"
            regex={/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/}
            validacionMensaje="No ingreso un formato correcto en el campo contraseña"
          />
          <Validacion
            onChangeText= {(text)=> setPassword(text)}
            placeholder="Repita Contraseña"
            regex={/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/}
            validacionMensaje="No ingreso un formato correcto en el campo contraseña"
          />

          <View style={styles.botones}>
            <TouchableOpacity style={styles.buttonCrear} onPress={handleCreateAccount}>
              <Text style={styles.txtcontinuar}>Crear Cuenta</Text>
            </TouchableOpacity>
          </View>

        <View style={styles.general1}> 
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../../src/assetsPropios/lineaAzul.png")}
              style={styles.lineaAzul}
            />
            <Text style={styles.txtcrearcuenta}>O crea tu cuenta</Text>
            <Image
              source={require("../../src/assetsPropios/lineaAzul2.png")}
              style={styles.lineaAzul}
            />
          </View>
          {/* Imagen Azul de fondo, con el logo que se pueda tocar*/}
         
          <ImageBackground
            source={require("../../src/assetsPropios/fondoabajo3.png")}
            resizeMode={"stretch"}
            style={styles.fondo}>
           <View  style={styles.Google}>
             <TouchableOpacity onPress={handleCrearCuenta} style={{ marginTop: 100 }}>
                <Image
                  source={require("../../src/assetsPropios/GoogleLogo.png")}
                  style={{
                  alignSelf: "center"}}
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

  general: {
    flex: 1,
  },

  general1: {
    flex: 1,
  },

  txtIngMail: {
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginLeft: 20,
  },

  txtcontinuar: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },

  buttonCrear: {
    marginTop: 20,
    width: "80%",
    height: 50,
    alignSelf: "center",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#0B6EFE",
  },

  txtcrearcuenta: {
    color: "black",
    marginTop: 12,
    fontSize: 15,
  },

  image: {
    flex: 1,
    marginTop: -20,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: "40%",
  },

  fondo: {
    flex: 1,
    width: "100%",
    height: "120%",
  },

  Google: {
    flex: 1,
    flexDirection: "row",
    marginTop: -40,
    justifyContent: "center",
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

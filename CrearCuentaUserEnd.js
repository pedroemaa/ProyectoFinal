import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useRoute } from '@react-navigation/native';
import {initializeApp} from "firebase/app";
import { firebaseConfig } from "./config-firebase";
import {getFirestore, doc,setDoc} from 'firebase/firestore';

export default function CrearCuentaUserEnd({ navigation }) {
 
  const route = useRoute();
  const empleador  = route.params.empleador;
  const uid = route.params.uid;
  const selectedValue = route.params.selectedValue;
 
   const app = initializeApp(firebaseConfig);

   const db = getFirestore(app);
  
   

   const initialState ={
    nombre: '',
    apellido:'',
    profesion:'',
    }

  const [state, setState] =useState(initialState)
  

  const handleChangeText  = (value, name)=>{
    setState({...state,[name]: value})
  }
  const handleMap = async () => {
    try {
      const usuariosCollection = doc(db, 'userEnd', uid);

          await setDoc(usuariosCollection, {
        nombre: state.nombre,
        apellido: state.apellido,
        localidad: currentLocationValue,
        direccion: state.direccion,
        tipoCuenta: empleador,
        
      });

      console.log("Datos Guardados con Éxito");
      navigation.navigate("Mapa");
    } catch (error) {
      console.log(error);
    }
  }







  const [isOpen2, setIsOpen2] = useState(false);
  const [currentLocationValue, setCurrentValueL] = useState();

  const itemsLocation = [
    { label: "San Miguel", value: "San Miguel" },
    { label: "Merlo", value: "Merlo" },
    { label: "Ituzaingo", value: "Ituzaingo" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.general}>
        <Image
          style={styles.image}
          resizeMode={"stretch"}
          source={require("./src/assetsPropios/ImagenLogIn.png")}
        ></Image>

        <Text style={styles.txtName}>Nombre</Text>
        <TextInput placeholder="" style={styles.inputName} 
                  onChangeText={(value) =>handleChangeText(value, 'nombre')} 
                  value={state.nombre}/>
        <Text>{`El UID del usuario es ${empleador}.`}</Text>
        <Text style={styles.txtApellido}>Apellido</Text>
        <TextInput placeholder=""
                   style={styles.inputApellido}
                   onChangeText={(value) =>handleChangeText(value, 'apellido')} 
                    value={state.apellido} />

        <View style={styles.general1}>
          <ImageBackground
            source={require("./src/assetsPropios/fondoabajo3.png")}
            resizeMode={"stretch"}
            style={styles.fondo}
          >
             <Text style={styles.txtDirección}>Dirección</Text>
              <TextInput placeholder=""
                     style={styles.inputDirección}
                     onChangeText={(value) =>handleChangeText(value, 'direccion')} 
                     value={state.direccion}
                      />


            <Text style={styles.txtLocation}>Localidad</Text>
            <View style={[styles.ViewdropDownLocation]}>
            <DropDownPicker
                      style={styles.dropDownLocation}
                      items={itemsLocation}
                      open={isOpen2}
                      setOpen={() => setIsOpen2(!isOpen2)}
                      value={currentLocationValue}
                      setValue={(val) => setCurrentValueL(val)}
                      placeholder=""
                      onChangeText={(value) =>handleChangeText(value, 'localidad')}             
            />
            </View>

            <View>
              <TouchableOpacity
                onPress={handleMap}
                style={styles.buttoncontinuar}
              >
                <Text style={styles.txtcontinuar}>Crear Cuenta</Text>
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
    marginTop: 20,
  },

  general1: {
    flex: 1,
  },

  image: {
    alignSelf: "center",
    width: 310,
    height: 240,
    marginBottom: 20,
    marginTop: -30,
  },

  /*Nombre             */
  txtName: {
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginLeft: 40,
  },

  inputName: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    width: 320,
    marginTop: 0,
    height: 50,
    borderRadius: 10,
    backgroundColor: "white",
    paddingStart: 10,
    alignSelf: "center",
  },

  /*Apellido             */
  txtApellido: {
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginLeft: 40,
    marginTop: 10,
  },

  inputApellido: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    width: 320,
    marginTop: 0,
    height: 50,
    borderRadius: 10,
    backgroundColor: "white",
    paddingStart: 10,
    alignSelf: "center",
  },

  /*Localidad             */
  txtLocation: {
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginLeft: 40,
    marginTop: 10,
  },

  ViewdropDownLocation: {
    marginHorizontal: 20,
    height: 50,
    width: "100%",
    width: 320,
    Color: "white",
    alignSelf: "center",
    zIndex: 1,
  },

  dropDownLocation: {
    borderWidth: 1,
    borderColor: "gray",
    marginTop: 0,
    padding: 10,
    height: 50,
    width: 320,
    borderRadius: 10,
    Color: "black",
    paddingStart: 10,
    alignSelf: "center",
  },

  label: {
    alignSelf: "flex-start",
    fontSize: 20,
  },


  txtDirección: {
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginLeft: 40,
    marginTop: 10,
  },

  inputDirección: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    width: 320,
    marginTop: 0,
    height: 50,
    borderRadius: 10,
    backgroundColor: "white",
    paddingStart: 10,
    alignSelf: "center",
  },

  /*    boton continuar*/

  txtcontinuar: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },

  buttoncontinuar: {
    marginTop: 130,
    width: "80%",
    height: 50,
    alignSelf: "center",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#0B6EFE",
  },

  fondo: {
    flex: 1,
    width: "100%",
    height: "120%",
  },
});

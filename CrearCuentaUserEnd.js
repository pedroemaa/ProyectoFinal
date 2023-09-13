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
 }from "react-native";
import DropDownPicker from "react-native-dropdown-picker";



export default function CrearCuentaUserEnd({navigation}) {

  const handleMap= () => {
    navigation.navigate("Map");
  };

  const [isOpen2, setIsOpen2] = useState(false);
  const [currentLocationValue, setCurrentValueL] = useState();

  const itemsLocation = [
    { label: "", value: "" },
    { label: "Merlo", value: "Merlo" },
    { label: "Ituzaingo", value: "Ituzaingo" },
     ];


 return (
   <SafeAreaView style={styles.container}>
      <View style={styles.general}>
           <Image
                 style={styles.image}
                 resizeMode={"stretch"}
                 source={require("./src/assetsPropios/ImagenLogIn.png")}></Image>

            <Text style={styles.txtName}>Nombre</Text>
            <TextInput   
                  placeholder=""
                  style={styles.inputName}/>

            <Text style={styles.txtApellido }>Apellido</Text>
            <TextInput   
                  placeholder=""
                  style={styles.inputApellido}/>

            <View style={styles.general1}>
            <ImageBackground 
                  source={require("./src/assetsPropios/fondoabajo3.png")} 
                  resizeMode= {'stretch'}
                  style={styles.fondo}>    

                <Text style={styles.txtLocation }>Localidad</Text>
                <View style={[styles.ViewdropDownLocation, ]}>
                    <DropDownPicker
                        style={styles.dropDownLocation}
                        items={itemsLocation}
                        open={isOpen2}
                        setOpen={() => setIsOpen2(!isOpen2)}
                        value={currentLocationValue}
                        setValue={(val) => setCurrentValueL(val)}
                        placeholder=""/>
                </View>
            
                <View>
                    <TouchableOpacity
                        onPress={handleMap}
                        style={styles.buttoncontinuar}> 
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
    fontWeight: 'bold',
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
    fontWeight: 'bold',
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
    fontWeight: 'bold',
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

 /*    boton continuar*/

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
    marginTop: 190,
    width: "88%",
    height: 50,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#0B6EFE",
  },

  fondo: {
    flex: 1, 
    width: '100%',
    height: '120%',

  },
});

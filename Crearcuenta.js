import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default function CrearCuenta({ navigation }) {

  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState();

  const items = [
    { label: "Buscar Profesional de Oficio", value: "Buscar empleo" },
    { label: "Ofrecer Oficio", value: "Ofrecer empleo" },
    { label: "Cuenta mixta", value: "Cuenta mixta" },
  ];

  const [isButtonSelected, setIsButtonSelected] = useState(false);

  const handleButtonPress = () => {
    if (currentValue) {
      setIsButtonSelected(true);
      setIsOptionSelected(true);
      
      switch (currentValue) {
       case "Ofrecer empleo":
          navigation.navigate("Crear Cuenta Profesional");
       break;
      //  case "Ofrecer empleo":
        //  navigation.navigate("PantallaOfrecerEmpleo");
    //  break;
      //  case "Cuenta mixta":
        //  navigation.navigate("PantallaCuentaMixta");
        //break;
      default:
       break;
    }
  }
};




  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./src/assetsPropios/ImagenLogIn.png")} />
      <Text style={styles.txtcrearcuenta1}>Seleccione el tipo de usuario</Text>
      <View style={styles.ViewdropDowncrearcuenta}>
        <DropDownPicker
          style={styles.dropDowncrearcuenta}
          items={items}
          open={isOpen}
          setOpen={() => setIsOpen(!isOpen)}
          value={currentValue}
          setValue={(val) => setCurrentValue(val)}
          placeholder="Seleccione su usuario"
        />
      </View>
      <ImageBackground
        source={require("./src/assetsPropios/fondoabajo3.png")}
        resizeMode={'cover'}
        style={styles.fondo}
      >
        <TouchableOpacity
        style={[
          styles.buttoncrearcuenta,
          isButtonSelected && styles.selectedButton,
          isOptionSelected && styles.optionSelectedButton
        ]}
        onPress={handleButtonPress}
        disabled={!currentValue}
      >
        <Text style={styles.txtcrearcuenta2}>Continuar</Text>
      </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    alignSelf: "center",
    width: 310,
    height: 230,
    marginBottom: 50,
    marginTop: -30,
  },
  ViewdropDowncrearcuenta: {
    marginHorizontal: 25,
    width: "88%",
  },
  dropDowncrearcuenta: {
    borderWidth: 1,
    borderColor: "gray",
    marginTop: 12,
    height: 60,
    borderRadius: 8,
    backgroundColor: "white",
    paddingStart: 30,
    alignSelf: "center",
  },
  txtcrearcuenta1: {
    fontSize: 20,
    alignSelf: "flex-start",
    marginLeft: 45,
  },
  txtcrearcuenta2: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    marginTop: 5,
    fontWeight: "bold",
  },
  buttoncrearcuenta: {
    alignSelf: "center",
    marginTop: 80,
    width: "88%",
    height: 60,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#0B6EFE",
  },

  selectedButton: {
    backgroundColor: 'gray', // Color de fondo cuando se selecciona
  },

  fondo: {
    width: 400,
    height: 320,
    marginTop: 80,  
  },
});

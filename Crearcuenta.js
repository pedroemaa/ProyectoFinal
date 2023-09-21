import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default function CrearCuenta({ navigation }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState(null);
  const [isButtonSelected, setIsButtonSelected] = useState(false);

  const items = [
    { label: "Buscar Profesional de Oficio", value: "Buscar empleo" },
    { label: "Ofrecer Servicios de Oficio", value: "Ofrecer empleo" },
    { label: "Cuenta mixta", value: "Cuenta mixta" },
  ];

  useEffect(() => {
    // Actualizar el estado de isButtonSelected cuando se elige un valor
    setIsButtonSelected(currentValue !== null);
  }, [currentValue]);

  const handleButtonPress = () => {
    if (currentValue) {
      switch (currentValue) {
        case "Ofrecer empleo":
          navigation.navigate("Crear Cuenta Profesional");
          break;
        case "Buscar empleo":
          navigation.navigate("Crear Cuenta Usuario");
          break;
        //  case "Cuenta mixta":
        //    navigation.navigate("PantallaCuentaMixta");
        //    break;
        default:
          break;
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.general}>
        <Image
          style={styles.image}
          source={require("./src/assetsPropios/ImagenLogIn.png")}
          resizeMode={"contain"}
        />
        <Text style={styles.txtcrearcuenta1}>
          Seleccione el tipo de usuario
        </Text>
        <View style={styles.general1}>
          <ImageBackground
            source={require("./src/assetsPropios/fondoabajo3.png")}
            resizeMode={"stretch"}
            style={styles.fondo}
          >
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

            <TouchableOpacity
              style={[
                styles.buttoncrearcuenta,
                isButtonSelected ? styles.selectedButton : styles.grisButton,
              ]}
              onPress={handleButtonPress}
              disabled={!currentValue}
            >
              <Text style={styles.txtcrearcuenta2}>Continuar</Text>
            </TouchableOpacity>
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
    marginLeft: 20,
    marginTop: -100,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: "50%",
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
    fontSize: 22,
    alignSelf: "flex-start",
    marginLeft: 25,
    fontWeight: "bold",
    marginTop: -50,
  },
  txtcrearcuenta2: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  buttoncrearcuenta: {
    marginTop: 120,
    width: "80%",
    height: 50,
    alignSelf: "center",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#0B6EFE",
  },
  selectedButton: {
    backgroundColor: "#0B6EFE", // Color de fondo cuando se selecciona
  },
  grisButton: {
    backgroundColor: "gray", // Color de fondo inicial (gris)
  },
  fondo: {
    flex: 1,
    width: "100%",
    height: "120%",
  },
});

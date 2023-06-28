import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default function CrearCuenta(navigation) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState();

  const items = [
    { label: "Buscar empleo", value: "Buscar empleo" },
    { label: "Ofrecer empleo", value: "Ofrecer empleo" },
    { label: "Cuenta mixta", value: "Cuenta mixta" },
  ];
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("./src/assetsPropios/ImagenLogIn.png")}
      />
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
      <TouchableOpacity style={styles.buttoncrearcuenta}>
        <Text style={styles.txtcrearcuenta2}>Continuar</Text>
      </TouchableOpacity>
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
    marginTop: 160,
    width: "88%",
    height: 60,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#0B6EFE",
  },
});

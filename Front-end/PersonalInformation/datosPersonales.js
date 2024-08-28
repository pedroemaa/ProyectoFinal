import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  View,
  TextInput,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

function DatosPersonales({ navigation }) {
  const itemsMetodoDePago = [
    { label: "Efectivo", value: "Efectivo" },
    { label: "Tarjeta de credito", value: "Tarjeta de credito" },
    { label: "Mercado pago", value: "Mercado pago" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [currentLocationValue, setCurrentValueL] = useState();

  const handleMap = () => {
    navigation.navigate("Mapa");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          marginTop: 50,
          marginLeft: 30,
          alignSelf: "flex-start",
        }}
      >
        <Image source={require("../../src/assetsPropios/logoDatos.png")} />
        <Text style={styles.textTitulo}>Datos personales</Text>
      </View>
      <View style={styles.viewFlex}>
        <Text style={styles.textDatos}>Nombre:</Text>
        <TextInput style={styles.textInput} />
      </View>
      <View style={styles.viewFlex}>
        <Text style={styles.textDatos}>Mail:</Text>
        <TextInput style={styles.textInput} />
      </View>
      <View style={styles.viewFlex}>
        <Text style={styles.textDatos}>Tekefono:</Text>
        <TextInput style={styles.textInput} />
      </View>
      <View style={styles.viewFlex}>
        <Text style={styles.textDatos}>Direccion:</Text>
        <TextInput style={styles.textInput} />
      </View>
      <View style={styles.viewFlex}>
        <View style={{ marginRight: 20, marginTop: 10 }}>
          <Text style={styles.textDatos}>Pago:</Text>
        </View>

        <View style={styles.dropDownLocation}>
          <DropDownPicker
            style={{ borderRadius: 40, height: 15 }}
            items={itemsMetodoDePago}
            open={isOpen}
            setOpen={() => setIsOpen(!isOpen)}
            value={currentLocationValue}
            setValue={(val) => setCurrentValueL(val)}
            placeholder=""
          />
        </View>
      </View>
      <TouchableOpacity onPress={handleMap} style={styles.buttonGuardar}>
        <Text style={styles.textGuardar}>Guardar datos</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
export default DatosPersonales;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  textTitulo: {
    marginLeft: 5,
    alignSelf: "center",
    fontSize: 20,
  },
  textDatos: {
    marginHorizontal: 10,
    alignSelf: "center",
    fontSize: 16,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 40,
    height: 48,
    width: 250,
    paddingStart: 20,
    paddingEnd: 20,
    marginRight: 40,
    marginLeft: 20,
  },
  viewFlex: {
    flexDirection: "row",
    marginTop: 40,
    marginLeft: 90,
    alignSelf: "flex-end",
    zIndex: 1,
  },
  dropDownLocation: {
    borderRadius: 110,
    marginRight: 40,
    width: 250,
  },
  buttonGuardar: {
    marginTop: 160,
    width: "80%",
    height: 50,
    alignSelf: "center",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#0B6EFE",
  },
  textGuardar: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});

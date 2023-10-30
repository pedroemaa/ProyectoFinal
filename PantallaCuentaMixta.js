import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function CrearCuentaProfesional({ navigation }) {
  const handleImagenProfecional = () => {
    navigation.navigate("ImagenesMixta");
  };

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [currentProfesionValue, setCurrentValue] = useState();
  const [currentLocationValue, setCurrentValueL] = useState();
  const [text, setText] = useState();

  const itemsProfesion = [
    { label: "", value: "" },
    { label: "Electricista", value: "Electricista" },
    { label: "Tornero", value: "Tornero" },
    { label: "Cerasmista", value: "Cerasmista" },
    { label: "Cerrajero", value: "Cerrajero" },
  ];

  const itemsLocation = [
    { label: "", value: "" },
    { label: "Merlo", value: "Merlo" },
    { label: "Ituzaingo", value: "Ituzaingo" },
  ];

  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: "Efectivo", isChecked: false },
    { id: 2, label: "Tarjetas", isChecked: false },
    { id: 3, label: "Mercado Pago", isChecked: false },
  ]);

  const toggleCheckbox = (id) => {
    setCheckboxes((prevCheckboxes) =>
      prevCheckboxes.map((checkbox) =>
        checkbox.id === id
          ? { ...checkbox, isChecked: !checkbox.isChecked }
          : checkbox
      )
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <Image
            style={styles.image}
            resizeMode={"stretch"}
            source={require("./src/assetsPropios/ImagenLogIn.png")}
          ></Image>

          <Text style={styles.txtName}>Nombre</Text>
          <TextInput placeholder="" style={styles.inputName} />

          <Text style={styles.txtApellido}>Apellido</Text>
          <TextInput placeholder="" style={styles.inputApellido} />

          <Text style={styles.txtProfesion}>Profesion</Text>
          <View style={styles.ViewdropDownProfesion}>
            <DropDownPicker
              style={styles.dropDownProfesion}
              items={itemsProfesion}
              open={isOpen1}
              setOpen={() => setIsOpen1(!isOpen1)}
              value={currentProfesionValue}
              setValue={(val) => setCurrentValue(val)}
              placeholder=""
            />
          </View>

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
            />
          </View>

          <View>
            <ImageBackground
              source={require("./src/assetsPropios/fondoabajo3.png")}
              resizeMode={"stretch"}
              style={styles.fondo}
            >
              <Text style={styles.txtDirección}>Dirección</Text>
              <TextInput placeholder="" style={styles.inputDirección} />

              <View style={styles.container1}>
                <Text style={styles.txtPago}>Medios de Pago</Text>
                {checkboxes.map((checkbox) => (
                  <View key={checkbox.id} style={styles.checkboxContainer}>
                    <TouchableOpacity
                      onPress={() => toggleCheckbox(checkbox.id)}
                      style={[
                        styles.checkbox,
                        checkbox.isChecked && styles.checkedBox,
                      ]}
                    >
                      {checkbox.isChecked && <Text>✔</Text>}
                    </TouchableOpacity>
                    <Text style={styles.label}>{checkbox.label}</Text>
                  </View>
                ))}
              </View>

              <View>
                <TouchableOpacity
                  onPress={handleImagenProfecional}
                  style={styles.buttoncontinuar}
                >
                  <Text style={styles.txtcontinuar}>Continuar</Text>
                </TouchableOpacity>

                <View style={styles.spaceBelowButton} />
              </View>
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
  image: {
    alignSelf: "center",
    width: "80%",
    height: 230,
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

  /*Profesion             */
  txtProfesion: {
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginLeft: 40,
    marginTop: 10,
  },

  ViewdropDownProfesion: {
    marginHorizontal: 20,
    height: 50,
    width: 100,
    width: 320,
    Color: "white",
    alignSelf: "center",
    zIndex: 2,
  },

  dropDownProfesion: {
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

  /*  Direccion        */
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

  /* PAGOS              */
  txtPago: {
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginLeft: 11,
  },

  container1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 30,
    marginTop: 15,
  },

  checkboxContainer: {
    marginHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    columnGap: 5,
  },

  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },

  checkedBox: {
    backgroundColor: "#007AFF",
    borderColor: "#007AFF",
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
    fontWeight: "bold",
  },

  buttoncontinuar: {
    marginTop: 20,
    width: "80%",
    height: 50,
    alignSelf: "center",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#0B6EFE",
  },

  spaceBelowButton: {
    height: 30, // Ajusta esta altura según lo que necesites
  },

  fondo: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
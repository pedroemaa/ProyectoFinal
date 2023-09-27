import React from "react";
import LoginScreen from "./LoginScreen.js";
import { Modal, Text, View, Image, TouchableOpacity, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from "@react-navigation/native";
import appnavigator from "./appnavigator.js";
import MapPantalla from "./MapPantalla.js";

export function SettingsModal({ visible, onClose }) {
 
  
  const handleMap = () => {
    navigation.navigate("Mapa");
  };
  

  const Account = (navigation) => <Text>Mi cuenta</Text>;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        {/* Contenido del panel */}
        <View style={styles.modalContent}>
          <View style={styles.imageTextContainer}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: -15,
                marginRight: "auto",
                marginTop: -20,
              }}
            >
              <Image
                resizeMode={"stretch"}
                source={require("./src/assetsPropios/settings.png")}
                style={styles.imagenGrande}
              />
              <Text
                style={styles.txtconfiguracion}
                onPress={Account}
                
              >
                Configuración y privacidad
              </Text>
            </View>
            <TouchableOpacity onPress={onClose}>
              <Image
                source={require("./src/assetsPropios/close.png")}
                style={{ alignSelf: "flex-end", marginLeft: 50, marginTop: -30 }}
              />
            </TouchableOpacity>
          </View>
          <Button title="Cerrar sesión" onPress={onClose} color="red" style={{marginTop: 300}} />
        </View>
      </View>
    </Modal>
  );
}
const styles = {
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    width: "80%",
    height: "85%",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  imageTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imagenGrande: {
    width: 40,
    height: 40,
    marginTop: 20,
  },
  txtconfiguracion: {
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 40,
    textDecorationLine: "underline", // Subraya el texto para indicar que es interactivo
  },
  buttonCerrar:{
    flex: 1,
    marginTop:20,
  }
};

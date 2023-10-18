import React, { useState } from "react";
import {
  Modal,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { initializeApp } from "firebase/app";
import {
  getReactNativePersistence,
  initializeAuth,
  signOut,
  getAuth,
  Auth,
} from "firebase/auth";

import { firebaseConfig } from "./config-firebase";

export function SettingsModal({ visible, onClose, navigation }) {
  //Con estos dos podes navegar en cualquier pantalla que este dentro del Tab.Screen
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const [user, setUser] = useState(null);

  const handleStoreInfo = () => {
    onClose();
    navigation.navigate("Officio");
  };

  const handleDatos = () => {
    onClose();
    navigation.navigate("DatosPersonales");
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("DesLoged");
        Alert.alert("Cerrando Sesión");
        navigation.navigate("Login");
        setPersistence(auth, null);
      })
      .catch((error) => {
        console.log("error in Desloged");
      });
    onClose();
  };

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
              <Text style={styles.txtconfiguracion} onPress={handleStoreInfo}>
                Configuración y privacidad
              </Text>
            </View>
            <TouchableOpacity onPress={onClose}>
              <Image
                source={require("./src/assetsPropios/close.png")}
                style={{
                  alignSelf: "flex-end",
                  marginLeft: 50,
                  marginTop: -30,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.boton}>
            <Button
              title="Cerrar Sesión"
              onPress={handleLogout}
              color="red"
              style={{ marginTop: -300 }}
            />
          </View>
          <View style={styles.botonDatos}>
            <Button
              title="Modificar datos"
              onPress={handleDatos}
              color="gray"
              style={{ marginTop: +300 }}
            />
          </View>
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
    width: "90%",
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
    marginTop: 50,
  },
  txtconfiguracion: {
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 50,
    textDecorationLine: "underline",
  },
  buttonCerrar: {
    marginTop: 20,
  },
  boton: {
    marginTop: 40,
    alignSelf: "flex-start",
  },
  botonDatos: {
    marginTop: 40,
    alignSelf: "flex-start",
  },
};

import React from "react";
import { Modal, Text, View, Image, TouchableOpacity, Button, Alert} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth, signOut, Auth } from "firebase/auth";

import { firebaseConfig } from "./config-firebase";





export function SettingsModal({ visible, onClose }) {
 
  //Con estos dos podes navegar en cualquier pantalla que este dentro del Tab.Screen
  const navigation = useNavigation(); 

  const handleStoreInfo = () => {
    onClose();
    navigation.navigate("Officio"); 
  };




  const handleLogout =  () => {
    
      // Aca pone el codigo para vaya a la pantalla de login y cierre firebase
      
      navigation.navigate("Login");

      onClose();
    
  };


///////////////////////////////////////////////////
  return (
    
    
    <Modal
       animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}
      >
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
                onPress={handleStoreInfo}
               
                
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
          <Button title="Cerrar sesión" onPress={handleLogout} color="red" style={{marginTop: 300}} />
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

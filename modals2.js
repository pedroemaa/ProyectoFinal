import React from "react";
import { Modal, Text, View, Image, TouchableOpacity, Button } from "react-native";
export function SettingsModal({ visible, onClose, onLogout }) {
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
              <Text style={styles.txtconfiguracion}>
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
          <Button title="Cerrar sesión" onPress={onLogout} color="red" style={{marginTop: 300}}/>
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
    marginTop: 60,
  },
  buttonCerrar:{
    flex: 1,
    marginTop:200,
  }
};

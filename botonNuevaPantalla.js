import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default function NuevaPantalla() {
  return <Text style={styles.txtnuevapantalla}>boton2</Text>;
}

const styles = StyleSheet.create({
  txtnuevapantalla: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    marginTop: -4,
    fontWeight: "bold",
  },
});

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

export default function ButtonLogin() {
  return <Text style={styles.txtbuttonlogin}>Inicia Sesión</Text>;
}

const styles = StyleSheet.create({
  txtbuttonlogin: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});

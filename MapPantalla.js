import React, { useContext, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Searchbar } from "react-native-paper";
import MapView from "react-native-maps";

export const MapPantalla = ({ navigation }) => {
  return (
    <>
      <Searchbar style={styles.buscador} />
      <MapView style={styles.mapStyle} />
    </>
  );
};

export default MapPantalla;

const styles = StyleSheet.create({
  buscador: {
    padding: 15,
    backgroundColor: "white",
  },

  container: {
    flex: 1,
  },
  mapStyle: {
    width: "100%",
    height: "100%",
  },
});

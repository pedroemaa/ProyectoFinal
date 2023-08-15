import React, { useContext, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import StoreInfo from "./StoreInfo";

export const StorePantalla = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 15 }}>
      <View style={styles.buscador}>
        <Searchbar />
      </View>
      <View style={{ backgroundColor: "#51c4d3", flex: 1, padding: 18 }}>
        <StoreInfo />
      </View>
    </SafeAreaView>
  );
};

export default StorePantalla;

const styles = StyleSheet.create({
  buscador: {
    padding: 15,
    backgroundColor: "white",
  },
});

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useContext, useState, useEffect, createContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  StatusBar,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { StoreInfo } from "./StoreInfo";
import { StoresContext } from "./StoresContext";

export const StorePantalla = ({ navigation }) => {
  const { isLoading, error, stores } = useContext(StoresContext);

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 15 }}>
      <View style={styles.buscador}>
        <Searchbar />
      </View>
      <View style={{ backgroundColor: "#51c4d3", flex: 1, padding: 18 }}>
        <FlatList
          data={stores}
          renderItem={({ item }) => {
            return <StoreInfo store={item} />;
          }}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{
            paddingTop: 8,
            paddingRight: 16,
            paddingBottom: 16,
            paddingLeft: 16,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default StorePantalla;

const styles = StyleSheet.create({
  buscador: {
    padding: 18,
    backgroundColor: "white",
  },
});

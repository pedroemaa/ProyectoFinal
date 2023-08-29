import React, { useContext, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Card } from "react-native-paper";
import MapView from "react-native-maps";
import { SvgXml } from "react-native-svg";
import estrella from "./src/assetsPropios/estrella";

export const StoreInfo = ({ store = {}, navigation }) => {
  const {
    name = "Electricista",
    icon,
    photos = ["src/assetsPropios/electricista.jpg"],
    address = "Avenida Veintimilla 37 , tulcán",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarity,
  } = store;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover
        key={name}
        source={{ uri: photos[0] }}
        style={styles.imgStore}
      />
      <View>
        <Text style={styles.titulo}>{name}</Text>

        <View style={styles.rating}>
          {ratingArray.map(() => (
            <SvgXml xml={estrella} width={20} height={20} />
          ))}
        </View>

        <Text style={styles.direccion}>{address}</Text>
      </View>
    </Card>
  );
};

export default StoreInfo;

const styles = StyleSheet.create({
  imgStore: {
    padding: 18,
    backgroundColor: "white",
  },

  card: {
    backgroundColor: "white",
    marginBottom: 9,
  },
  titulo: {
    paddingLeft: 18,
    paddingBottom: 4,
  },
  direccion: {
    paddingLeft: 18,
    paddingBottom: 18,
  },
  rating: {
    flexDirection: "row",
    paddingBottom: 8,
    paddingTop: 8,
    paddingLeft: 18,
  },
});

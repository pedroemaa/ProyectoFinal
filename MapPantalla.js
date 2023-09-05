import React, { useContext, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Searchbar } from "react-native-paper";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location"; // Importamos el módulo de geolocalización

export default function MapPantalla({ navigation }) {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Función para obtener la ubicación del usuario
    async function getUserLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Permiso de ubicación denegado");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setUserLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    }

    getUserLocation();
  }, []);
  //Para hacer zoom en el mapa
  const mapRegion = {
    latitude: userLocation ? userLocation.latitude : 37.78825,
    longitude: userLocation ? userLocation.longitude : -122.4324,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

//export const MapPantalla = ({ navigation }) => {
  return (
    <>
      <Searchbar style={styles.buscador} />
      <MapView style={styles.mapStyle} region={mapRegion}>
        {userLocation && (
          <Marker
            coordinate={userLocation}
            title="Tu ubicación"
            description="Estás aquí"
          />
        )}
      </MapView>
    </>
  );
};

//export default MapPantalla;

const styles = StyleSheet.create({
  buscador: {
    padding: 4,
    backgroundColor: "white",
    marginTop: 50,
  },
  container: {
    flex: 1,
  },
  mapStyle: {
    width: "100%",
    height: "100%",
  },
});

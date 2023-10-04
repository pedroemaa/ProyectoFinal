import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
  Alert
} from "react-native";
import { Searchbar, DefaultTheme  } from "react-native-paper";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { SettingsModal } from "./modals.js"; // Importa el modal desde modals.js
import { TabActions, useNavigation } from "@react-navigation/native";


export default function MapPantalla({  }) {
  const [userLocation, setUserLocation] = useState(null);
  const [menuVisible, setMenuVisible] = useState(false);
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  

  useEffect(() => {
    async function getUserLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      Alert.alert("Localizando!");
      if (status !== "granted") {
        Alert.alert("Permiso de ubicación denegado");
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
  const mapRegion = {
    latitude: userLocation ? userLocation.latitude : 37.78825,
    longitude: userLocation ? userLocation.longitude : -122.4324,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const handleLogouted = () => {
    setIsLoggedOut(true);
    setMenuVisible(false);
    
  };

  const navigation = useNavigation(); // Utiliza useNavigation para acceder a la navegación

  const handleStoreInfo = () => {
    navigation.navigate("Officio"); // Navega a la pantalla "InfoOficio" en la navegación principal
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle} region={mapRegion}>
        {userLocation && (
          <Marker
            coordinate={userLocation}
            title="Tu ubicación"
            description="Estás aquí"
          />
        )}
      </MapView>

      <View style={styles.buscadorContainer}>

       <TouchableOpacity
          onPress={() => setMenuVisible(true)}
              >
        <Image
          source={require("./src/assetsPropios/menuuu.png")}
          style={styles.imagen} 
          />
        
       </TouchableOpacity>
       <Searchbar style={styles.buscador}/>

       <TouchableOpacity onPress={handleStoreInfo}
       >
           
        <Image
          source={require("./src/assetsPropios/view.png")}
          style={styles.imagen}/>
        </TouchableOpacity>
      </View>

      <SettingsModal
        visible={menuVisible}
        onClose={() => setMenuVisible(false) }
        onLogout={handleLogouted}
        navigation={navigation}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  buscadorContainer: {
    position: "absolute",
    top: 50,
    left: 0,
    right: 0,
    zIndex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 4,
    },
  imagen: {
    marginRight: 10,
    marginTop: 5,
  },
  buscador: {
    flex: 1,
  },
  mapStyle: {
    flex: 1,
  },
});

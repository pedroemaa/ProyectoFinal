import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Button,
    Alert
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import { Searchbar, DefaultTheme  } from "react-native-paper";
  import { SettingsModal } from "./modals.js";
  import { TabActions, useNavigation } from "@react-navigation/native";
  import { GiftedChat } from 'react-native-gifted-chat';
  import {
    collection,
    addDoc,
    orderBy,
    query,
    onSnapshot
  } from 'firebase/firestore';
  import { signOut } from 'firebase/auth';
  import { auth, database } from './config-firebase.js';
  import { AntDesign } from '@expo/vector-icons';

  export default function Job ({}) {

    const [userLocation, setUserLocation] = useState(null);
    const [menuVisible, setMenuVisible] = useState(false);
    const [isLoggedOut, setIsLoggedOut] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    
    


    const handleLogouted = () => {
        setIsLoggedOut(true);
        setMenuVisible(false);
        
      };
      const navigation = useNavigation();

      const handleStoreInfo = () => {
        navigation.navigate("Puesto"); // Navega a la pantalla "InfoOficio" en la navegación principal
      };

    return(
    <View style={styles.container}>

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

    <TouchableOpacity 
    onPress={handleStoreInfo}
    >
        
     <Image
       source={require("./src/assetsPropios/create.png")}
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
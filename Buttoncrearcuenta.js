import  React  from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function ButtonCrearCuenta ({navigation}) {
    return(
        <NavigationContainer>
          <TouchableOpacity style={styles.buttonlogin} onPress={() => {
            navigation.navigate("PantallaCrearCuenta")
         }}>
      <Text style = {styles.txtbuttoncrearcuenta}> Crear Cuenta </Text>
       </TouchableOpacity>
        </NavigationContainer>
    );
    };
    export default ButtonCrearCuenta;

    const styles = StyleSheet.create ({
      buttonlogin : {
        fontSize:20,
        marginTop: 50,
      }  
        }); 
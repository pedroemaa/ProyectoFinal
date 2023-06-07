import  React  from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TextInput , Button , TouchableOpacity, NavigationContainer } from 'react-native';



export default function CrearCuenta (navigation) {

    return(
         <View>
        <Text style = {styles.txtcrearcuenta}> Crea una cuenta </Text>
        <TextInput placeholder="Tipo de Cuenta" style={styles.inputcrearcuenta}/>         
        <TextInput placeholder="Email" style={styles.inputcrearcuenta}/>      
        <TextInput placeholder="Contraseña" style={styles.inputcrearcuenta}/>      
        <TextInput placeholder="Confirmar Contraseña" style={styles.inputcrearcuenta}/>   
         <TouchableOpacity style={styles.buttoncrearcuenta}>
         <Text style={styles.txtcrearcuenta}>Crear Cuenta</Text>
       </TouchableOpacity> 
      </View>
      );
    };

const styles = StyleSheet.create ({
inputcrearcuenta: {
        borderWidth: 1,
        borderColor:"gray",
        padding:10,
        width:"80%",
        marginTop:20,
        height:50,
        borderRadius:30,
        backgroundColor:"white",
        paddingStart:30,
        margin:"auto",
},

txtcrearcuenta: 
{
  fontSize:15 ,
  textAlign:"center" ,
  color:"white",
},
buttoncrearcuenta : {
  fontSize:20,
  marginTop: 50,
  backgroundColor:"#43DE48",
  padding:25,
  borderRadius:30,
  width:"40%",
  textAlign:"center",
  margin:"auto",
}
}); 
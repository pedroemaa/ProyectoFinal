import  React  from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput , TouchableOpacity } from 'react-native';

 function CambiarContraseña (navigation) {

    return(
    <View style={styles.containercambiarcontraseña}>
      <TextInput placeholder="Nueva Contraseña" style={styles.inputcambiarcontraseña}/>
      <TextInput placeholder="Confirmar Contraseña" style={styles.inputcambiarcontraseña}/>
       <TouchableOpacity style={styles.buttoncambiarcontraseña}>
         <Text style={styles.txtmodificarcontraseña}>Modificar Contraseña</Text>
       </TouchableOpacity>
      </View>
);
    }
    export default CambiarContraseña;
    const styles = StyleSheet.create ({
      containercambiarcontraseña:{
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonlogin : {
        fontSize:20,
        marginTop: 50,
      },
       inputcambiarcontraseña:
       {
        borderWidth: 1,
        borderColor:"gray",
        padding:10,
        width:"80%",
        marginTop:20,
        height:50,
        borderRadius:30,
        backgroundColor:"white",
        paddingStart:30,
       },

buttoncambiarcontraseña:
{
  width:"80%",
  height:50,
  borderRadius:50,
  padding:10,
  backgroundColor: "#62ABFE",
  marginTop:50,
},

txtmodificarcontraseña:{
  color:"white",
  fontSize:20,
  textAlign:"center",
  fontWeight: "bold" ,
}
}); 
import  React  from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TextInput , Button , TouchableOpacity } from 'react-native';
import { LinearGradient } from 'react-native-svg';



export default function ButtonLogin () {

    return(
         <TouchableOpacity style={styles.buttonlogin}>
      <Text style = {styles.txtbuttonlogin}> Iniciar Sesión </Text>
       </TouchableOpacity>
);
    }
    
const styles = StyleSheet.create ({
buttonlogin:{
width:"80%",
height:50,
borderRadius:50,
padding:10,
backgroundColor: "#62ABFE",
marginTop:50,
},
txtbuttonlogin:{
   color:"white",
   fontSize:20,
   textAlign:"center",
   fontWeight: "bold" ,
}  
}); 
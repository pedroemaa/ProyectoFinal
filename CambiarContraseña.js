import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import Validacion from "./ValidarInputs";

function CambiarContraseña(navigation) {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleValidationChange = (isValid) => {
    setIsButtonDisabled(!isValid);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={require("./src/assetsPropios/ImagenLogIn.png")}
      />
      <Validacion
        placeholder="Contraseña"
        regex={/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/}
        validacionMensaje="No ingreso un formato correcto en el campo contraseña"
        onValidationChange={handleValidationChange}
      />
      <Validacion
        placeholder="Confirme su contraseña"
        regex={/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/}
        validacionMensaje="No ingreso un formato correcto en el campo contraseña"
        onValidationChange={handleValidationChange}
      />
      <TouchableOpacity
        style={[
          styles.buttoncambiarcontraseña,
          isButtonDisabled && styles.disabledButton,
        ]}
        disabled={isButtonDisabled}
      >
        <Text style={styles.txtmodificarcontraseña}>Modificar Contraseña</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
export default CambiarContraseña;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: "#fff",
    alignItems: "center",
  },

  image: {
    width: 310,
    height: 230,
    marginBottom: 50,
  },
  buttoncambiarcontraseña: {
    marginTop: 30,
    width: "88%",
    height: 60,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#0B6EFE",
  },
  disabledButton: {
    backgroundColor: "#ccc", // Color de botón desactivado
  },
  inputcambiarcontraseña: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    width: "88%",
    marginTop: 12,
    height: 60,
    borderRadius: 8,
    backgroundColor: "white",
    paddingStart: 30,
  },
  txtmodificarcontraseña: {
    marginTop: 6,
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});

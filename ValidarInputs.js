import react, { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { desactivar } from "./LoginScreen";

export default function Validacion(props) {
  const [text, setText] = useState();
  const [validacionMensaje, setValidacionMensaje] = useState("");

  const validar = (input) => {
    const esValido = props.regex.test(input);
    if (text === "") {
      setValidacionMensaje();
    } else if (!esValido) {
      setValidacionMensaje(props.validacionMensaje);
    } else {
      setValidacionMensaje();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mensaje}>{validacionMensaje}</Text>
      <TextInput
        onChangeText={setText}
        onEndEditing={() => validar(text)}
        value={text}
        {...props}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  mensaje: {
    color: "red",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    alignSelf: "center",
    padding: 10,
    width: 360,
    marginTop: 0,
    height: 60,
    borderRadius: 10,
    backgroundColor: "white",
    paddingStart: 30,
  },
});

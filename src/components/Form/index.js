import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Vibration,
} from "react-native";

import styles from "./style";
import ResultImc from "./ResultImc";

export default function Form() {
  const [heigth, setHeigth] = useState(null);
  const [weigth, setweigth] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha o Peso e a Altura");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");
  const [errorMessage, setErrormessage] = useState(null);

  function imcCalculator() {
    return setImc((weigth / (heigth * heigth)).toFixed(2));
  }

  function imcVerification() {
    if (imc === null) {
      setErrormessage("Campo Obrigatorio*");
      Vibration.vibrate();
    }
  }

  function imcValidation() {
    if (heigth != null && weigth != null) {
      imcCalculator();
      setweigth(null);
      setHeigth(null);
      setMessageImc("Seu Imc é igual:");
      setTextButton("Calcular Novamente");
      setErrormessage(null);
      return;
    }
    imcVerification();
    setImc(null);
    setTextButton("Calcular");
    setMessageImc("Preencha o Peso e a Altura");
  }

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInput
          style={styles.input}
          onChangeText={setHeigth}
          value={heigth}
          placeholder='Ex. 1.75'
          keyboardType='numeric'
        />

        <Text style={styles.formLabel}>Peso</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInput
          style={styles.input}
          onChangeText={setweigth}
          value={weigth}
          placeholder='Ex. 75.365'
          keyboardType='numeric'
        />

        <TouchableOpacity
          style={styles.buttonCalculator}
          onPress={() => {
            imcValidation();
          }}
        >
          <Text style={styles.textButtonCalculator}>{textButton}</Text>
        </TouchableOpacity>
      </View>
      <ResultImc messageResultImc={messageImc} resultImc={imc} />
    </View>
  );
}

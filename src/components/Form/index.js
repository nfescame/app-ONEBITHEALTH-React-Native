import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import ResultImc from "./ResultImc";

export default function Form() {
  const [heigth, setHeigth] = useState(null);
  const [weigth, setweigth] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha o Peso e a Altura");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");

  function imcCalculator() {
    return setImc((weigth / (heigth * heigth)).toFixed(2));
  }

  function imcValidation() {
    if (heigth != null && weigth != null) {
      imcCalculator();
      setMessageImc("Seu Imc é igual:");
      setTextButton("Calcular Novamente");
      setweigth(null);
      setHeigth(null);
      return;
    }
    imcCalculator();
    setImc(null);
    setTextButton("Calcular");
    setMessageImc("Preencha o Peso e a Altura");
  }

  return (
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput
          onChangeText={setHeigth}
          value={heigth}
          placeholder='Ex. 1.75'
          keyboardType='numeric'
        />

        <Text>Peso</Text>
        <TextInput
          onChangeText={setweigth}
          value={weigth}
          placeholder='Ex. 75.365'
          keyboardType='numeric'
        />

        <Button onPress={() => imcValidation()} title={textButton} />
      </View>
      <ResultImc messageResultImc={messageImc} resultImc={imc} />
    </View>
  );
}

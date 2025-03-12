import React, { useState } from "react";
import { View, Text, Button, TextInput, Alert } from "react-native";

const ContadorAvancado = () => {
  const [contador, setContador] = useState(0);
  const [valorMinimo, setValorMinimo] = useState(0);
  const [valorMaximo, setValorMaximo] = useState(10);
  const [valorPersonalizado, setValorPersonalizado] = useState("");

  const incrementar = () => {
    if (contador < valorMaximo) {
      setContador(contador + 1);
    }
  };

  const decrementar = () => {
    if (contador > valorMinimo) {
      setContador(contador - 1);
    }
  };

  const resetar = () => {
    setContador(0);
  };

  const definirValorPersonalizado = () => {
    const novoValor = parseInt(valorPersonalizado, 10);
    if (!isNaN(novoValor) && novoValor >= valorMinimo && novoValor <= valorMaximo) {
      setContador(novoValor);
    } else {
      Alert.alert("Valor inválido!", "O valor deve estar entre os limites mínimo e máximo.");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Contador Avançado</Text>
      <Text>Valor do contador: {contador}</Text>
      <Text>
        Limite mínimo: {valorMinimo} | Limite máximo: {valorMaximo}
      </Text>

      {contador === valorMaximo && <Text style={{ color: "green" }}>Você atingiu o valor máximo!</Text>}
      {contador === valorMinimo && <Text style={{ color: "red" }}>Você atingiu o valor mínimo!</Text>}

      <View style={{ flexDirection: "row", marginVertical: 10 }}>
        <Button title="Incrementar" onPress={incrementar} disabled={contador >= valorMaximo} />
        <Button title="Decrementar" onPress={decrementar} disabled={contador <= valorMinimo} />
        <Button title="Resetar" onPress={resetar} />
      </View>

      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1, marginBottom: 10 }}
        value={valorPersonalizado}
        onChangeText={setValorPersonalizado}
        placeholder="Defina um valor"
        keyboardType="numeric"
      />
      <Button title="Definir valor personalizado" onPress={definirValorPersonalizado} />

      <View style={{ marginVertical: 10 }}>
        <Text>Valor mínimo:</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1, marginBottom: 10 }}
          value={String(valorMinimo)}
          onChangeText={(text) => setValorMinimo(parseInt(text, 10))}
          keyboardType="numeric"
        />
        <Text>Valor máximo:</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          value={String(valorMaximo)}
          onChangeText={(text) => setValorMaximo(parseInt(text, 10))}
          keyboardType="numeric"
        />
      </View>
    </View>
  );
};

export default ContadorAvancado;

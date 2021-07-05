import React, { useState } from "react";
import { View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { Background } from "../../components/Background";
import { CategorySelect } from "../../components/CategorySelect";
import { Header } from "../../components/Header";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

export function AppointmentCreate() {
  const [category, setCategory] = useState("");

  return (
    <Background>
      <Header title="Agendar Partida" />

      <Text style={styles.label}>Categoria</Text>

      <CategorySelect
        hasCheckBox
        setCategory={setCategory}
        categorySelected={category}
      />

      <View style={styles.form}>
        <RectButton></RectButton>
      </View>
    </Background>
  );
}

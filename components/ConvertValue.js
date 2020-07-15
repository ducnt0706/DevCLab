import React from "react";
import { View, Text } from "react-native";

import { globalStyles } from "../styles/style";

export default function ConvertValue({ currencyInput,currencyOutput,fromCurrency,toCurrency }) {

  const fromFlag= fromCurrency === 'USD'? '🇺🇸 ':'🇻🇳 ';
  const toFlag= toCurrency === 'USD'? '🇺🇸 ':'🇻🇳 ';
  const fromSymbl= fromCurrency === 'USD'? 'USD':'VND';
  const toSymbl= toCurrency === 'USD'? 'USD':'VND';
  return (
    <View style={globalStyles.currencyContainer}>
      <Text>Current currency:</Text>
      <Text style={globalStyles.currencyText}>{currencyInput} {fromSymbl} {fromFlag}</Text>
      <Text>Conversion currenecy:</Text>
      <Text style={globalStyles.currencyText}>{currencyOutput} {toSymbl} {toFlag}</Text>
    </View>
  );
}

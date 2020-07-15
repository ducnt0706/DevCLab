import React, { useState,useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from "react-native";

import ButtonConvert from "../components/ConvertTypeButton";
import ConvertRegion from "../components/ConvertValue";
import { globalStyles } from "../styles/style";

export default function Home() {
  const [currencyValueInput, setCurrencyValueInput] = useState(0);
  const [currencyValueOutput, setCurrencyValueOutput] = useState(0);
  const [fromCurrency,setFromCurrency]=useState('VND');
  const [toCurrency,setToCurrency]=useState('USD');

  const convertCurrency = () => {
    fromCurrency==='VND'&&toCurrency==='USD'?
    setCurrencyValueOutput(currencyValueInput / 23000):setCurrencyValueOutput(currencyValueInput * 23000)
  };

  const onChooseConversion=(from,to)=>{
    setFromCurrency(from);
    setToCurrency(to);
  }
  
  useEffect(convertCurrency);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={globalStyles.container}>
        <View style={globalStyles.content}>
          {/* Header */}
          <View style={globalStyles.header}>
            <Text style={globalStyles.textDescription}>
              Please enter the value of the currency you want to convert
            </Text>
            <TextInput
              style={globalStyles.inputText}
              textAlign="center"
              autoFocus={true}
              keyboardType="number-pad"
              selectionColor="red"
              placeholder="100.000.000 VND"
              onChangeText={(val) => setCurrencyValueInput(val)}
            />
          </View>
          {/* Convertion region */}
          <View style={globalStyles.convertContainer}>
            <ButtonConvert
              from="USD"
              to="VND"
              fromCurrency={fromCurrency}
              toCurrency={toCurrency}
              onChooseConversion={onChooseConversion}
            />
            <ButtonConvert
              from="VND"
              to="USD"
              fromCurrency={fromCurrency}
              toCurrency={toCurrency}
              onChooseConversion={onChooseConversion}
            />
          </View>
          <ConvertRegion
            currencyInput={currencyValueInput}
            currencyOutput={currencyValueOutput}
            fromCurrency={fromCurrency}
            toCurrency={toCurrency}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

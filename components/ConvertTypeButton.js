import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'

import { globalStyles } from "../styles/style";

export default function ConvertTypeButton({from,to,fromCurrency,toCurrency,onChooseConversion}) {
    
    const isSelectedConversionType= from===fromCurrency&&to===toCurrency;
    const backgroundColor=isSelectedConversionType?'lightblue':null;
    const covertButtonStyle={backgroundColor}
    
    const fromFlag= from=== 'USD'? '🇺🇸 ':'🇻🇳';
    const toFlag= to=== 'USD'? '🇺🇸 ':'🇻🇳 ';

    return (
        <TouchableOpacity style={[globalStyles.button,covertButtonStyle]} onPress={()=>onChooseConversion(from,to)}>
            <Text >{fromFlag} To {toFlag} </Text>
        </TouchableOpacity>
    )
}

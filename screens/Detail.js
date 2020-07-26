import React from 'react';
import {View, Text, Image} from 'react-native';
import { globalStyles } from '../styles/style';

export default function Detail({navigation, route}) {
  const {image, name, message} = route.params;
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Image style={{width:200,height:200}} source={{uri: image}} resizeMode="cover"/>
      <Text style={globalStyles.textHeader}>{name}</Text>
      <Text>{message}</Text>
    </View>
  );
}

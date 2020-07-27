import React from 'react';
import {View, Text, Image} from 'react-native';
import {globalStyles} from '../styles/style';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function RecordItem({item,navigation}) {
  const catalogueType =
    item.category === 1
      ? 'Groceries'
      : item.category == 2
      ? 'Clothes'
      : 'Rental';
  const cardType =
    item.type === 1
      ? 'Bank account'
      : item.type === 2
      ? 'Creadit Card'
      : 'Cash';
  return (
    <TouchableOpacity onPress={()=>navigation.navigate('Detail',
    {image:item.production_image,name:item.production_name,message:"I don't understand brief !"})}>
      <View style={globalStyles.recordCard}>
        <View>
          <Image
            style={globalStyles.recordImage}
            resizeMode="cover"
            source={{
              uri: item.production_image,
            }}
          />
        </View>
        <View style={globalStyles.recordContent1}>
          <Text style={globalStyles.textNameRecord}>{catalogueType}</Text>
          <Text>{cardType}</Text>
        </View>
        <View style={globalStyles.recordContent2}>
          <Text>{item.date_time}</Text>
          <Text>{item.spend_money}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Card from './Card';
import { globalStyles } from '../styles/style';

export default function AccountItem({title, item}) {
  const type = item.type;
  const bg=type==1?'pink':type==2? 'yellow':'lightblue'
  return (
    <Card bg={{backgroundColor:bg}}>
        <Text style={globalStyles.textCard}>{title}</Text>
        <Text style={globalStyles.textCard}>${item.total}</Text>
    </Card>
  );
}

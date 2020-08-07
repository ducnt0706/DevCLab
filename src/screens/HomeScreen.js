import React from 'react';
import {View, Button, TouchableOpacity} from 'react-native';

import {globalStyles} from '../styles';

export default function HomeScreen({navigation}) {
  const openMap = () => {
    navigation.navigate('MapScreen');
  };

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.contentContainer}>
        <TouchableOpacity>
          <Button title="Go to Map" onPress={() => openMap()} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

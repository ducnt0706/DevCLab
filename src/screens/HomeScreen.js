import React, {useEffect, useState} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';

import RNPermissions, {
  NotificationsResponse,
  Permission,
  PERMISSIONS,
  PermissionStatus,
  RESULTS,
  request,
  check,
} from 'react-native-permissions';
import {globalStyles} from '../styles';
import useLocation from '../hooks/useLocation';

const getLocationPermission = () => {
  request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
    .then((result) => {
      switch (result) {
        case RESULTS.UNAVAILABLE:
          console.log(
            'This feature is not available (on this device / in this context)',
          );
          break;
        case RESULTS.DENIED:
          console.log(
            'The permission has not been requested / is denied but requestable',
          );
          break;
        case RESULTS.GRANTED:
          console.log('The permission is granted');
          break;
        case RESULTS.BLOCKED:
          console.log('The permission is denied and not requestable anymore');
          break;
      }
    })
    .catch((error) => {
      // …
    });
};

export default function HomeScreen({navigation}) {
  const [latitude, longitude] = useLocation();

  const openMap = () => {
    navigation.navigate('MapScreen',);
    console.log(latitude,longitude);
  };

  useEffect(() => {
    getLocationPermission();
  }, []);

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.contentContainer}>
        <Text> Latitude: {latitude}</Text>
        <Text> Longitude: {longitude}</Text>
        <TouchableOpacity>
          <Button title="Go to Map" onPress={() => openMap()} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

import {View, Text, StyleSheet, Image} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import React, {useState, useEffect} from 'react';
import { Marker } from 'react-native-maps';
import { Callout } from 'react-native-maps';



export default function MapScreen() {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

  const getLatLong =  () => {
    Geolocation.getCurrentPosition((info) => {
      let {latitude, longitude} = info.coords;
      setLat(latitude);
      setLong(longitude);
    });
  };

  useEffect(() => {
    getLatLong();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: lat, //37.4218846
          longitude: long, //-122.0837918
          latitudeDelta: 0.09,
          longitudeDelta: 0.05,
        }}>
            <Marker
            coordinate={{
              latitude:lat,
              longitude: long, 
            }}
            image={require('../assets/location.png')}
            title="Test title"
            description="description for marker"
            >
              <Callout>
                  <View>
                    <View>
                      <Text>IU i love you !</Text>
                      <Text>ok baby !</Text>
                      <Image style={styles.imgCallout} source={require("../assets/iu.jpg")} resizeMode="cover"/>
                    </View>
                  </View>
              </Callout>
            </Marker>
        </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  imgCallout:{
    width:100,
    height:100,
  }
});

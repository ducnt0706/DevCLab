import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import React, {useState, useEffect} from 'react';
import RNPermissions, {
  PERMISSIONS,
  RESULTS,
  request,
} from 'react-native-permissions';
import ImagePicker from 'react-native-image-picker';
import Carousel from 'react-native-looped-carousel';
import Lightbox from 'react-native-lightbox';
import AsyncStorage from '@react-native-community/async-storage';
import CustomCallout from '../components/CustomCallout';

const {width, height} = Dimensions.get('screen');
//TODO: IMAGE PICKER
const options = {
  title: 'Select Image',
  takePhotoButtonTitle: 'Take Photo with camera',
  chooseFromLibraryButtonTitle: 'Choose Photo from Library',
};
// TODO: Carousel
const renderCarousel = (image) => (
  <Carousel style={{width: width, height: height}}>
    <Image style={{flex: 1}} resizeMode="contain" source={image} />
  </Carousel>
);

export default function MapScreen() {
  const [position, setPosition] = useState({latitude: 0, longitude: 0});
  const [markers, setMarkers] = useState([{
    latitude: 37.37513118778555,
    longitude: -122.07318753004073,
    title: 'Default 2',
  }]);

  //TODO: GET CURRENT POSISION
  const getLocationPermission = async () => {
    let response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    if (response === RESULTS.GRANTED) {
      getCurrentLocation();
    } else {
      console.log('ERROR!');
    }
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition((info) => {
      let {latitude, longitude} = info.coords;
      setPosition({latitude, longitude});
    });
  };

  //TODO: IMAGE PICKER
  const getCameraAndStorage = async () => {
    let resStorage = await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
    if (resStorage === RESULTS.GRANTED) {
      console.log('Store:', resStorage);
    }
    let resCamera = await request(PERMISSIONS.ANDROID.CAMERA);
    if (resCamera === RESULTS.GRANTED) {
      console.log('Camera:', resCamera);
    }
  };

  const handlerImgPicker = () => {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        console.log(response.uri);
      }
    });
  };
  //TODO: SAVE DATA
  // const getMarkers= async()=>{
  //   try {
  //     let oldMarker = await AsyncStorage.getItem("markers");
  //     oldMarker = oldMarker != null ? JSON.parse(oldMarker) : [];
  //     setMarkers(oldMarker);
  //   } catch (error) {
  //     //ERROR
  //   }
  // }
  const handlerLongPress= async (e) => {
      console.log(e.nativeEvent.coordinate);
      const newMakerLocation=e.nativeEvent.coordinate;
      const newMarker = {...newMakerLocation,title:'My Marker'};
      const newMarkers=[...markers, newMarker] ;
      //await AsyncStorage.setItem("markers",JSON.stringify(newMarkers));
      setMarkers(newMarkers);  
  }

  useEffect(() => {
    getLocationPermission();
  }, []);

  // useEffect(() => {
  //   getMarkers();
  // }, []);


  useEffect(() => {
    getCameraAndStorage();
  }, []);

  

  return (
    <MapView
      onLongPress={(e)=>handlerLongPress(e)}
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
      initialRegion={{
        latitude: position.latitude, //37.4218846
        longitude: position.longitude, //-122.0837918
        latitudeDelta: 0.09,
        longitudeDelta: 0.05,
      }}>
      {markers.length > 0 &&
        markers.map((item, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: item.latitude,
              longitude: item.longitude,
            }}
            image={require('../assets/locationx256.png')}>
            <Callout onPress={handlerImgPicker}>
              <CustomCallout
                title={item.title}
                image="test!"
              />
            </Callout>
          </Marker>
        ))}
    </MapView>
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
  imgCallout: {
    width: 100,
    height: 100,
  },
});

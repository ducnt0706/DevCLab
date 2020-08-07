import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import useStyle from './useStyle';


function CustomCallout({title, image}) {
  const styles = useStyle();
  return (
      <TouchableOpacity style={styles.container}>
      <Image
                  style={styles.imgCallout}
                  source={require('../../assets/iu.jpg')}
                  resizeMode="cover"
                />
        <Text style={styles.titleCallout}>{title}</Text>
      </TouchableOpacity>
  );
}
export default React.memo(CustomCallout);

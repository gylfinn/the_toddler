import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import styles from './styles';

const ImageThumbnail = ({ name, thumbnailPhoto, isSelected}) => (
  <View>
    <Image
      style={styles.image}
      resizeMode="cover"
      source={{ uri: thumbnailPhoto }}
    />
    {
            isSelected ? <AntDesign name="checkcircleo" style={styles.checkmark} />
              : <></>
      }
  </View>
);

export default ImageThumbnail;

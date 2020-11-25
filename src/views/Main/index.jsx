import React from 'react';
import {
  View, Text, Image, TouchableHighlight,
} from 'react-native';
import logo from '../../resources/logo.png';
import styles from './styles';

const Main = ({ navigation: { navigate } }) => (
  <View style={styles.container}>
    <Image style={styles.image} source={logo} />
    <Text style={styles.paragraph}>The New and MUCH IMPROVED Toddler Application! Welcome!!!!</Text>
    <TouchableHighlight style={styles.button} onPress={() => navigate('Boards')}>
      <Text style={styles.buttontext}>Board</Text>
    </TouchableHighlight>
    <TouchableHighlight style={styles.button}>
      <Text style={styles.buttontext}>Lists</Text>
    </TouchableHighlight>
    <TouchableHighlight style={styles.button}>
      <Text style={styles.buttontext}>Tasks</Text>
    </TouchableHighlight>
  </View>
);

export default Main;

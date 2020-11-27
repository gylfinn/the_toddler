import React from 'react';
import { View, FlatList, Text, TouchableHighlight } from 'react-native';
import ImageThumbnail from '../ImageThumbnail';
import styles from './styles';

const BoardsList = ({ boards, navigation }) => (
  <View style={styles.boardlist}>
    <FlatList
      numColumns={3}
      data={boards}
      renderItem={({ item: { name, thumbnailPhoto, id } }) => (
        <TouchableHighlight onPress={() => navigation.navigate('Lists', { ID: id })}>
          <View style={styles.carditem}>
            <ImageThumbnail name={name} thumbnailPhoto={thumbnailPhoto} />
            <Text>{name}</Text>
          </View>
        </TouchableHighlight>
      )}
      keyExtractor={(board) => board.id}
    />
  </View>
);

export default BoardsList;

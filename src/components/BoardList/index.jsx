import React from 'react';
import { View, FlatList } from 'react-native';
import ImageThumbnail from '../ImageThumbnail';

const BoardsList = ({ boards }) => (
  <View style={{ flex: 1 }}>
    <FlatList
      numColumns={3}
      data={boards}
      renderItem={({ item: { name, thumbnailPhoto } }) => (
        <ImageThumbnail name={name} thumbnailPhoto={thumbnailPhoto} />
      )}
      keyExtractor={(board) => board.name}
    />
  </View>
);

export default BoardsList;

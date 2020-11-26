import React from 'react';
import {
  View, FlatList, Text, TouchableHighlight,
} from 'react-native';
import styles from './styles';

const getColor = function (color) {
  return {
    margin: 15,
    color,
  };
};

const Listslist = ({ lists, navigation }) => (
  <View style={styles.listList}>
    <FlatList
      numColumns={1}
      data={lists}
      renderItem={({ item: { name, color, id } }) => (
        <TouchableHighlight onPress={() => navigation.navigate('Tasks', { ID: id })}>
          <View style={styles.list}>
            <Text style={getColor(color)}>
              {name}
            </Text>
          </View>
        </TouchableHighlight>
      )}
      keyExtractor={(list) => list.id}
    />
  </View>
);

export default Listslist;

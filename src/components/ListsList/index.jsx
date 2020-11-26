import React from 'react';
import { View, FlatList, Text} from 'react-native';
import styles from './styles.jsx';

const Listslist = ({ lists }) => (
  <View style={styles.listList}>
    <FlatList
      numColumns={1}
      data={lists}
      renderItem={({ item: { name, color } }) => (
        <View style={{ color: { color } }}>
          <Text>{name}</Text>
        </View>
      )}
      keyExtractor={(list) => list.name}
    />
  </View>
);

export default Listslist;

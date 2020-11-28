import React, { useState } from 'react';
import {
  View, FlatList, Text, TouchableHighlight, Button
} from 'react-native';
import AddModal from '../AddModal';
import AddListForm from '../AddListForm';
import styles from './styles';

const getColor = function (color) {
  return {
    margin: 15,
    color,
  };
};

const Listslist = ({
  lists, navigation, onLongPress, edit
}) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOnSelectItem = (item) => {
    setSelectedItem(item);
  };

  const handleOnCloseModal = () => {
    console.log(selectedItem)
    setSelectedItem(null);
  };
  return (
    <View style={styles.listList}>
      <FlatList
        numColumns={1}
        data={lists}
        renderItem={({ item: { name, color, id } }) => (
          <TouchableHighlight onLongPress={() => { console.log('hello'); onLongPress(id); }} onPress={() => navigation.navigate('Tasks', { ID: id })}>
            <View style={styles.list}>
              <Text style={getColor(color)}>
                {name}
              </Text>
              <Button style={{ width: 115 }} onPress={() => handleOnSelectItem({ name, color, id })} title="edit"> edit </Button>
            </View>
          </TouchableHighlight>
        )}
        keyExtractor={(list) => list.id}
      />
      <AddModal
        isOpen={selectedItem}
        selectedItem={selectedItem}
        closeModal={handleOnCloseModal}
        formtype={<AddListForm item={selectedItem} add={edit} />}
      />
    </View>
  );
};


export default Listslist;

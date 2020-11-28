import React, { useState } from 'react';
import { View, FlatList, Text, TouchableHighlight, Button } from 'react-native';
import ImageThumbnail from '../ImageThumbnail';
import styles from './styles';
import AddModal from '../AddModal';
import AddBoardForm from '../addBoardForm';

const BoardsList = ({boards, navigation, onLongPress, selectedBoards, editOpen, editClose, isOpen, edit }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOnSelectItem = (item) => {
    setSelectedItem(item);
  };

  const handleOnCloseModal = () => {
    console.log(selectedItem)
    setSelectedItem(null);
  };

  return (
    <View style={styles.boardlist}>
      <FlatList
        numColumns={3}
        data={boards}
        renderItem={({ item: { name, thumbnailPhoto, id } }) => (
          <TouchableHighlight onLongPress={() => onLongPress(id)} onPress={() => navigation.navigate('Lists', { ID: id })}>
            <View style={styles.carditem}>
              <ImageThumbnail style={{opacity: selectedBoards.indexOf(id) !== -1 ? 0.5 : 1}} isSelected={selectedBoards.indexOf(id) !== -1} name={name} thumbnailPhoto={thumbnailPhoto} />
              <Text>{name}</Text>
              <Button style={{ width: 115 }} onPress={() => handleOnSelectItem({ name, thumbnailPhoto, id })} title="edit"> edit </Button>

            </View>
          </TouchableHighlight>
        )}
        keyExtractor={(board) => board.id}
      />
      <AddModal
        isOpen={selectedItem}
        selectedItem={selectedItem}
        closeModal={handleOnCloseModal}
        formtype={<AddBoardForm item={selectedItem} add={edit} />}
      />
    </View>

  );
};

export default BoardsList;

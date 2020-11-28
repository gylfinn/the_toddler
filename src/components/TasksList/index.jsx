import React, { useState } from 'react';
import {
  View, FlatList, Text, TouchableHighlight, Button
} from 'react-native';
import AddModal from '../AddModal';
import AddTaskForm from '../AddTaskForm';
import styles from './styles';

const isDone = function (task) {
  if (task) {
    return {
      margin: 10,
      backgroundColor: '#ddaaaa',
      alignItems: 'center',
    };
}
  return {
    margin: 10,
    backgroundColor: '#aaddaa',
    alignItems: 'center',
  };
};

const changeState = function (index, tasks, instance) {
  tasks[index].isFinished = !tasks[index].isFinished;
  instance.setState({
    yes: 'yes',
  });
  console.log(tasks[index].isFinished)
};

const TasksList = ({ tasks, instance, onLongPress, edit }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOnSelectItem = (item) => {
    console.log(item)
    setSelectedItem(item);
  };

  const handleOnCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <View>
      <FlatList
        numColumns={1}
        data={tasks}
        renderItem={({ item: { name, description, isFinished, id }, index }) => (
          <TouchableHighlight onLongPress={() => onLongPress(id)} onPress={(id) => changeState(index, tasks, instance)}>
            <View style={isDone(isFinished)}>
              <Text style={styles.title}>
                {name}
              </Text>
              <Text style={styles.description}>
                {description}
              </Text>
              <Button style={{ width: 115 }} onPress={() => handleOnSelectItem({ name, description, isFinished, id })} title="edit"> edit </Button>
            </View>
          </TouchableHighlight>
        )}
        keyExtractor={(task) => task.id}
      />
      <AddModal
        isOpen={selectedItem}
        selectedItem={selectedItem}
        closeModal={handleOnCloseModal}
        formtype={<AddTaskForm item={selectedItem} add={edit} />}
      />
    </View>
  );
}

export default TasksList;

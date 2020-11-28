import React from 'react';
import {
  View, FlatList, Text, TouchableHighlight
} from 'react-native';
import styles from './styles';

const isDone = function (task) {
  if (task) {
    return {
      textDecorationLine: 'line-through',
      textDecorationStyle: 'solid',
    };
}
  return {};
};

const changeState = function (index, instance) {
  tasks[index].isFinished = !tasks[index].isFinished;
  console.log(index)
};

const TasksList = ({ tasks, instance }) => (
  <View>
    <FlatList
      numColumns={1}
      data={tasks}
      renderItem={({ item: { name, description, isFinished }, index }) => (
        <TouchableHighlight onPress={(name) => changeState(index, instance)}>
          <View style={styles.list}>
            <Text style={isDone(isFinished)}>
              {name}
              {description}
            </Text>
          </View>
        </TouchableHighlight>
      )}
      keyExtractor={(task) => task.name}
    />
  </View>
);

export default TasksList;

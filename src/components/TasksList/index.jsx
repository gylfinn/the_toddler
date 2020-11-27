import React from 'react';
import {
  View, FlatList, Text, TouchableHighlight
} from 'react-native';
import styles from './styles';

const isDone = function (task) {
  if (task)
  {return {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  }}
  else{
    return {};
  }
};

const TasksList = ({ tasks }) => (
  <View>
    <FlatList
      numColumns={1}
      data={tasks}
      renderItem={({ item: { name, description, isFinished } }) => (
        <View style={styles.list}>
          <Text style={isDone(isFinished)}>
            {name}
            {description}
          </Text>
        </View>
      )}
      keyExtractor={(task) => task.id}
    />
  </View>
);

export default TasksList;

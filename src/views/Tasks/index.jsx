import React from 'react';
import { View } from 'react-native';
import Toolbar from '../../components/Toolbar';
import TasksList from '../../components/TasksList';
import data from '../../resources/data.json';

class Tasks extends React.Component {
  render() {
    this.listId = this.props.navigation.state.params.ID;
    console.log(this.listId)
    return (
      <View style={{ flex: 1 }}>
        <Toolbar />
        <TasksList
          tasks={data.tasks.filter((item) => item.listId === this.listId)}
        />
      </View>
    );
  }
}

export default Tasks;

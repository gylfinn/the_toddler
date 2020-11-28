import React from 'react';
import { View } from 'react-native';
import Toolbar from '../../components/Toolbar';
import TasksList from '../../components/TasksList';
import data from '../../resources/data.json';
import AddModal from '../../components/AddModal';
import AddTaskForm from '../../components/AddTaskForm';

class Tasks extends React.Component {
  state = {
    tasks: data.tasks,
    selectedTasks: [],
    isAddModalOpen: false,
  }

  addTask(instance, list, task){
    task.id = instance.state.tasks.length+1
    task.listId = list
    instance.setState({
      tasks: [...instance.state.tasks,task]
    });
    console.log(task)
    instance.state.isAddModalOpen = false;
  }

  render() {
    this.listId = this.props.navigation.state.params.ID;
    const { selectedtasks, tasks, isAddModalOpen } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Toolbar
          onAdd={() => this.setState({ isAddModalOpen: true })}
          onRemove={() => {}}
        />
        <TasksList
          tasks={tasks.filter((item) => item.listId === this.listId)}
        />
        <AddModal
          isOpen={isAddModalOpen}
          closeModal={() =>  this.setState({ isAddModalOpen: false })}
          takePhoto={() => this.takePhoto()}
          formtype={(<AddTaskForm add={(list) => this.addTask(this, this.listId, list)} />)}
          selectFromCameraRoll={() => this.selectFromCameraRoll()}
        />
      </View>
    );
  }
}

export default Tasks;

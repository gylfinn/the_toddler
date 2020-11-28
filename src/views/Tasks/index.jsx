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

  onTaskLongPress(id){
    const { selectedTasks } = this.state;
    if (selectedTasks.indexOf(id) !== -1){
      //The board is alreadyu withiin the Lists

      this.setState({
        selectedTasks: selectedTasks.filter(list => list !== id),
      });
    } else {

      this.setState({
        selectedTasks: [ ...selectedTasks, id ]
      });
    }

  }

  async deleteSelectedTasks(){
    const {selectedTasks, tasks} = this.state;
    this.setState({
      selectedTasks: [],
      tasks: tasks.filter(task => selectedTasks.indexOf(task.id) === -1)
    });
  }

  addTask(instance, list, task){
    task.id = instance.state.tasks.length+1
    task.listId = list
    instance.setState({
      tasks: [...instance.state.tasks,task]
    });
    instance.state.isAddModalOpen = false;
  }

  editTask(instance, list, ctask){
    ctask.listId = list
    console.log(ctask)
    instance.setState({
      tasks: [...instance.state.tasks.filter(task => parseInt(task.id) !== parseInt(ctask.id)),ctask]
    });
  }

  render() {
    this.listId = this.props.navigation.state.params.ID;
    const { selectedtasks, tasks, isAddModalOpen } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Toolbar
          onAdd={() => this.setState({ isAddModalOpen: true })}
          onRemove={() => {this.deleteSelectedTasks()}}
        />
        <TasksList
          instance={this}
          tasks={tasks.filter((item) => parseInt(item.listId) === parseInt(this.listId))}
          onLongPress={(name) => this.onTaskLongPress(name)}
          edit={(task) => this.editTask(this, this.listId, task)}
        />
        <AddModal
          isOpen={isAddModalOpen}
          closeModal={() =>  this.setState({ isAddModalOpen: false })}
          takePhoto={() => this.takePhoto()}
          formtype={(<AddTaskForm add={(task) => this.addTask(this, this.listId, task)} />)}
          selectFromCameraRoll={() => this.selectFromCameraRoll()}
        />
      </View>
    );
  }
}

export default Tasks;

import React from 'react';
import { View } from 'react-native';
import Toolbar from '../../components/Toolbar';
import ListsList from '../../components/ListsList';
import data from '../../resources/data.json';
import AddModal from '../../components/AddModal';
import AddListForm from '../../components/AddListForm';


class Lists extends React.Component {
  state = {
    lists: data.lists,
    selectedLists: [],
    isAddModalOpen: false,
  }

addList(instance, board, list){
  list.id = instance.state.lists.length+1
  list.boardId = board
  instance.setState({
    lists: [...instance.state.lists,list]
  });
  console.log(instance.state.lists)
  instance.state.isAddModalOpen = false;
}

  render() {
    this.boardId = this.props.navigation.state.params.ID
    const { selectedLists, lists, isAddModalOpen } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Toolbar
          onAdd={() => this.setState({ isAddModalOpen: true })}
          onRemove={() => {}}
         />
        <ListsList
          navigation={this.props.navigation}
          lists={lists.filter((item) => item.boardId === this.boardId)}
        />
        <AddModal
          isOpen={isAddModalOpen}
          closeModal={() =>  this.setState({ isAddModalOpen: false })}
          takePhoto={() => this.takePhoto()}
          formtype={(<AddListForm add={(list) => this.addList(this, this.boardId, list)} />)}
          selectFromCameraRoll={() => this.selectFromCameraRoll()}
        />
      </View>
    );
  }
}

export default Lists;

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
    isEditModalOpen: false,
  }

  onListsLongPress(id){
    const { selectedLists } = this.state;
    if (selectedLists.indexOf(id) !== -1){
      //The board is alreadyu withiin the Lists

      this.setState({
        selectedLists: selectedLists.filter(list => list !== id),
      });
    } else {

      this.setState({
        selectedLists: [ ...selectedLists, id ]
      });
    }

  }

  async deleteSelectedLists(){
    const {selectedLists, lists} = this.state;
    this.setState({
      selectedLists: [],
      lists: lists.filter(list => selectedLists.indexOf(list.id) === -1)
    });
  }

addList(instance, board, list){
  list.id = instance.state.lists.length+1
  list.boardId = board
  instance.setState({
    lists: [...instance.state.lists,list]
  });
  instance.state.isAddModalOpen = false;
}

editList(instance, board, clist){
  clist.boardId = board
  instance.setState({
    lists: [...instance.state.lists.filter(list => list.id !== parseInt(clist.id)),clist]
  });
  console.log(instance.state.lists.filter(list => list.id !== parseInt(clist.id)))
}

  render() {
    this.boardId = this.props.navigation.state.params.ID
    console.log(this.boardId)
    const { selectedLists, lists, isAddModalOpen } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Toolbar
          onAdd={() => this.setState({ isAddModalOpen: true })}
          onRemove={() => {this.deleteSelectedLists()}}
         />
        <ListsList
          navigation={this.props.navigation}
          lists={lists.filter((item) => parseInt(item.boardId) === parseInt(this.boardId))}
          onLongPress={(name) => this.onListsLongPress(name)}
          edit={(list) => this.editList(this, this.boardId, list)}
        />
        <AddModal
          isOpen={isAddModalOpen}
          closeModal={() =>  this.setState({ isAddModalOpen: false })}
          formtype={(<AddListForm add={(list) => this.addList(this, this.boardId, list)} />)}
          selectFromCameraRoll={() => this.selectFromCameraRoll()}
        />
      </View>
    );
  }
}

export default Lists;

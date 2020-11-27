import React from 'react';
import { View } from 'react-native';
import Toolbar from '../../components/Toolbar';
import BoardList from '../../components/BoardList';
import AddModal from '../../components/AddModal';
import data from '../../resources/data.json';

class Boards extends React.Component {
  state = {
    boards: data.boards,
    selectedBoards: [],
    isAddModalOpen: false,
  }
  onBoardsLongPress(name){
    const { selectedBoards } = this.state;
    if (selectedBoards.indexOf(name) !== -1){
      //The board is alreadyu withiin the Lists
      this.setState({
        selectedBoards: selectedBoards.filter(board => board !== name)
      });
    } else {
      this.setState({
        selectedBoards: [ ...selectedBoards, name ]
      });
    }

  }
  takePhoto() {

  }
  render() {
    const { selectedBoards, boards, isAddModalOpen } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Toolbar
        onAdd={() => this.setState({ isAddModalOpen: true })}
        onRemove={() => {}}
        hasSelectedBoards={selectedBoards.length>0}/>
        <BoardList
          navigation={this.props.navigation}
          onLongPress={(name) => this.onBoardsLongPress(name)}
          boards={boards}
          selectedBoards= {selectedBoards} />
        <AddModal
          isOpen={isAddModalOpen}
          closeModal={() =>  this.setState({ isAddModalOpen: false })}
          takePhoto={() => this.takePhoto()}
          selectFromCameraRoll={() => this.selectFromCameraRoll()}
        />
    );
  }
}

export default Boards;

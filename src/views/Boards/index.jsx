import React from 'react';
import { View } from 'react-native';
import Toolbar from '../../components/Toolbar';
import BoardList from '../../components/BoardList';
import AddModal from '../../components/AddModal';
import data from '../../resources/data.json';
import AddBoardForm from '../../components/addBoardForm';

class Boards extends React.Component {
  state = {
    boards: data.boards,
    selectedBoards: [],
    isAddModalOpen: false,
  }
  onBoardsLongPress(id){
    const { selectedBoards } = this.state;
    if (selectedBoards.indexOf(id) !== -1){
      //The board is alreadyu withiin the Lists

      this.setState({
        selectedBoards: selectedBoards.filter(board => board !== id),
      });
    } else {

      this.setState({
        selectedBoards: [ ...selectedBoards, id ]
      });
    }

  }
  addBoard(instance, board){
    board.id = instance.state.boards.length+1
    console.log(instance.state.boards)
    instance.setState({
      boards: [...instance.state.boards,board]
    });
    instance.state.isAddModalOpen = false;
  }

  editBoard(instance, cboard){
    console.log(cboard)
    instance.setState({
      boards: [...instance.state.boards.filter(board => board.id !== parseInt(cboard.id)),cboard]
    });
  }

  async deleteSelectedBoards(){
    const {selectedBoards, boards} = this.state;
    this.setState({
      selectedBoards: [],
      boards: boards.filter(board => selectedBoards.indexOf(board.id) === -1)
    });
  }


  render() {
    const { selectedBoards, boards, isAddModalOpen, isEditModalOpen } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Toolbar
        onAdd={() => this.setState({ isAddModalOpen: true })}
        onRemove={() => {this.deleteSelectedBoards();}}
        hasSelectedBoards={selectedBoards.length>0}/>
        <BoardList
          navigation={this.props.navigation}
          onLongPress={(name) => this.onBoardsLongPress(name)}
          boards={boards}
          edit={(board) => this.editBoard(this, board)}
          selectedBoards={selectedBoards}
        />
        <AddModal
          isOpen={isAddModalOpen}
          closeModal={() =>  this.setState({ isAddModalOpen: false })}
          formtype={(<AddBoardForm add={(board) => this.addBoard(this, board)} />)}
          selectFromCameraRoll={() => this.selectFromCameraRoll()}
        />
      </View>
    );
  }
}

export default Boards;

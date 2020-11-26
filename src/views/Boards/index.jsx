import React from 'react';
import { View } from 'react-native';
import Toolbar from '../../components/Toolbar';
import BoardList from '../../components/BoardList';
import data from '../../resources/data.json';

class Boards extends React.Component {
  render() {
    console.log(this.props)
    return (
      <View style={{ flex: 1 }}>
        <Toolbar />
        <BoardList navigation={this.props.navigation} boards={data.boards} />
      </View>
    );
  }
}

export default Boards;

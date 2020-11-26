import React from 'react';
import { View } from 'react-native';
import Toolbar from '../../components/Toolbar';
import ListsList from '../../components/ListsList';
import data from '../../resources/data.json';

class Lists extends React.Component {
  render() {
    this.boardId = this.props.navigation.state.params.ID
    console.log(this.props.navigation.state)
    return (
      <View style={{ flex: 1 }}>
        <Toolbar />
        <ListsList
          navigation={this.props.navigation}
          lists={data.lists.filter((item) => item.boardId === this.boardId)}
        />
      </View>
    );
  }
}

export default Lists;

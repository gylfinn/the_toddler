import React from 'react';
import { View, TextInput, Button } from 'react-native';

class AddBoardForm extends React.Component {
  constructor(props) {
    console.log(props)
    super(props)
    this.add = props.add;

    let name = '';
    let thumbnailPhoto = '';
    let id = '';

    if (props.item !== undefined) {
      name = (props.item.name !== undefined) ? props.item.name : '';
      thumbnailPhoto = (props.item.thumbnailPhoto !== undefined) ? props.item.thumbnailPhoto : 'hwllo';
      id = (props.item.id !== undefined) ? props.item.id : '';
    }

    this.state = {
      name,
      thumbnailPhoto,
      id,
    }
  }

  handleChange(name, value) {
    console.log(name, value)
    this.setState({
      [name]: value,
    })
    console.log(this.state)
  }


  render() {
    return (
      <View>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          type="text"
          value={this.state.name}
          onChangeText={(text) => this.handleChange('name', text)}
        />
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          type="text"
          value={this.state.thumbnailPhoto}
          onChangeText={(text) => this.handleChange('thumbnailPhoto', text)}
        />
        <Button title="press me" onPress={() => this.add(this.state)}>press me</Button>
      </View>
    );
  }
}

export default AddBoardForm;

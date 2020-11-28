import React from 'react';
import { View, TextInput, Button } from 'react-native';

class EditBoardForm extends React.Component {
  constructor(props) {
    super(props)
    this.add = props.add;
    this.state = {
      name: '',
      thumbnailPhoto: '',
      id: '',
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
          value={this.state.image}
          onChangeText={(text) => this.handleChange('thumbnailPhoto', text)}
        />
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          type="text"
          value={this.state.id}
          onChangeText={(text) => this.handleChange('id', text)}
        />
        <Button title="press me" onPress={() => this.add(this.state)}>press me</Button>
      </View>
    );
  }
}

export default EditBoardForm;

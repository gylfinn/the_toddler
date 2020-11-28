import React from 'react';
import { View, TextInput, Button } from 'react-native';

class AddListForm extends React.Component {
  constructor(props) {
    super(props)
    this.add = props.add;
    this.state = {
      name: '',
      color: '',
    }
  }

  handleChange(name, value) {
    this.setState({
      [name]: value,
    })
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
          onChangeText={(text) => this.handleChange('color', text)}
        />
        <Button title="press me" onPress={() => this.add(this.state)}>press me</Button>
      </View>
    );
  }
}

export default AddListForm;

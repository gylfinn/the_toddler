import React from 'react';
import { View, TextInput, Button, Switch } from 'react-native';

class AddTaskForm extends React.Component {
  constructor(props) {
    super(props)
    this.add = props.add;
    let name = '';
    let description = '';
    let isFinished = '';
    if (props.item !== undefined) {
      name = (props.item.name !== undefined) ? String(props.item.name) : '';
      description = (props.item.description !== undefined) ? String(props.item.description) : '';
      isFinished = (props.item.isFinished !== undefined) ? String(props.item.isFinished) : '';
    }
    console.log(isFinished)
    const id = (props.item.id !== undefined) ? String(props.item.id) : '';
    this.state = {
      name,
      isFinished,
      description,
      id,
    }
  }

  handleChange(name, value) {
    console.log(value)
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
          value={this.state.description}
          onChangeText={(text) => this.handleChange('description', text)}
        />
        <Button title="press me" onPress={() => {this.add(this.state); console.log(this.state); }}>press me</Button>
      </View>
    );
  }
}

export default AddTaskForm;

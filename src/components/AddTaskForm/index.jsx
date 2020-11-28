import React from 'react';
import { View, TextInput, Button, Switch } from 'react-native';

class AddTaskForm extends React.Component {
  constructor(props) {
    super(props)
    this.add = props.add;
    this.state = {
      name: '',
      isFinished: false,
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
        <Switch value={this.state.isFinished} onValueChange={(text) => this.handleChange('isFinished', text)} />
        <Button title="press me" onPress={() => this.add(this.state)}>press me</Button>
      </View>
    );
  }
}

export default AddTaskForm;

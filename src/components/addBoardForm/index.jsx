import React from 'react';
import { View, TextInput, Button } from 'react-native';

class AddBoardForm extends React.Component {
  constructor(props) {
    console.log(props)
    super(props)
    this.add = props.add;
    this.state = {
      name: "",
      thumbnailPhoto: "",
    }
  }

  handleChange (name, value){
    console.log(name, value)
    this.setState({
      [name]:value,
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
        <Button title="press me" onPress={() => this.add(this.state)}>press me</Button>
      </View>
    );
  }
}

export default AddBoardForm;

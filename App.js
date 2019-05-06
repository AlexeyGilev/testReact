import React, { Component } from 'react';
import { Text, View, StyleSheet, Picker } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: 'Java'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Picker
          style={{
          width: 200,
          height: 50,
          borderWidth: 10,
          borderColor: 'black',
          borderRadius: 8,
           }}
          selectedValue={this.state.language}
          onValueChange={(lang) => this.setState({language: lang})}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="C#" value="C#" />
          <Picker.Item label="С++" value="С++" />
          <Picker.Item label="Python" value="Python" />
          <Picker.Item label="Ruby" value="Ruby" />
          <Picker.Item label="Swift" value="Swift" />
          <Picker.Item label="Objective-C" value="Objective-C" />
          <Picker.Item label="PHP" value="PHP" />
          <Picker.Item label="Perl" value="Perl" />
          <Picker.Item label="F#" value="F#" />
          <Picker.Item label="Haskell" value="Haskell" />
          <Picker.Item label="Ada" value="Ada" />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});

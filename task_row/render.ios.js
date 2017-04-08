import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

var Swipeout = require('react-native-swipeout')

export default function render(styles) {

  const buttons = [
    {
      text: 'Done',
      backgroundColor: '#05A5D1',
      underlayColor: '#273539',
      onPress: this.onDonePressed.bind(this),
    },
  ];

  // <Swipeout
  //   backgroundColor='#fff'
  //   right={buttons}
  //   >

  return (

      <View style={styles.container}>
        <Text style={styles.label}>ios: {this.props.todo.task}</Text>

        <TouchableHighlight
          onPress={this.onDonePressed.bind(this)}
          style={styles.doneButton}
          >
          <Text>
            Done
          </Text>
        </TouchableHighlight>
      </View>
  );
}

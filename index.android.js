import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';

export default class PluralTodo extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      todos: [
        {
          task: 'Learn React Native',
        },
      ],
    };
  }

  render() {
    return (
      <Text>Hello World!!! and other text</Text>
    );
  }
}

AppRegistry.registerComponent('PluralTodo', () => PluralTodo);

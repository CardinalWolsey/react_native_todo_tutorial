import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  DrawerLayoutAndroid,
} from 'react-native';

import TaskList from './task_list.js';
import Drawer from './drawer.js';

export default class PluralTodo extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      todos: [
        {
          task: 'Learn React Native',
        },
        {
          task: 'Learn Reduxxx',
        },
        {
          task: 'Figure out what is going on here ... check!',
        },
      ],
    };

  }

  render() {
    return (
      <TaskList
        todos={this.state.todos}
        >

      </TaskList>
    );
  }
}

AppRegistry.registerComponent('PluralTodo', () => PluralTodo);

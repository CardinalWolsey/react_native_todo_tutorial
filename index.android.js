import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  DrawerLayoutAndroid,
  Navigator,
} from 'react-native';

import TaskList from './task_list.js';
import Drawer from './drawer.js';

export default class PluralTodo extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      todos: [
        {
          task: 'Learn React Native ...',
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

  onAddStarted() {
    console.log('on add started');
  }

  renderScene(route, nav) {
    //redo this to not use a switch statement
    switch (route.name) {
      case 'taskform':
        return (
          <Text>Add form comes here!</Text>
          );
      default:
        return (
          <TaskList
            onAddStarted={this.onAddStarted.bind(this)}
            todos={this.state.todos}
            >

          </TaskList>
        );
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ name: 'tasklist', index: 0}}
        renderScene={this.renderScene.bind(this)}
        >

      </Navigator>

    );
  }
}

AppRegistry.registerComponent('PluralTodo', () => PluralTodo);

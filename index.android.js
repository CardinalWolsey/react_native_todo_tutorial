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
import TaskForm from './task_form.js';

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
    this.nav.push({
      name: 'taskform'
    });
  }

  renderScene(route, nav) {
    //redo this to not use a switch statement
    switch (route.name) {
      case 'taskform':
        return (
          <TaskForm />
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

  configureScene() {
    return Navigator.SceneConfigs.FloatFromBottom;
  }

  render() {
    return (
      <Navigator
        configureScene={this.configureScene}
        initialRoute={{ name: 'taskform', index: 0}}
        ref={((nav) => {
          this.nav = nav;
        })}
        renderScene={this.renderScene.bind(this)}
        >

      </Navigator>

    );
  }
}

AppRegistry.registerComponent('PluralTodo', () => PluralTodo);

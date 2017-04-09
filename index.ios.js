import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  DrawerLayoutAndroid,
  Navigator,
} from 'react-native';

import TaskList from './task_list.js';
import Drawer from './drawer.js';
import TaskForm from './task_form.js';
import store from './todo_store';

export default class PluralTodo extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = store.getState();

    store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  onAddStarted() {
    this.nav.push({
      name: 'taskform'
    });
  }

  onCancel() {
    this.nav.pop();
  }

  onAdd(task) {
    // this.state.todos.push({task: task,});
    // this.setState({todos: this.state.todos});
    store.dispatch({
      type: 'ADD_TODO',
      task,
    });
    this.nav.pop();
  }

  onDone(todo) {
    // const filteredTodos = this.state.todos.filter((filterTodo) => {
    //   return filterTodo !== todo;
    // });
    // this.setState({ todos: filteredTodos });
    store.dispatch({
      type: 'DONE_TODO',
      todo,
    });
  }

  renderScene(route, nav) {
    //redo this to not use a switch statement
    switch (route.name) {
      case 'taskform':
        return (
          <TaskForm
            onAdd={this.onAdd.bind(this)}
            onCancel={this.onCancel.bind(this)}
            />
          );
      default:
        return (
          <TaskList
            onAddStarted={this.onAddStarted.bind(this)}
            todos={this.state.todos}
            onDone={this.onDone.bind(this)}
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
        initialRoute={{ name: 'tasklist', index: 0}}
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

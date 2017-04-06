import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ListView,
} from 'react-native';

import TaskRow from './task_row.js';

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: '#F7F7F7',
    flex: 1,
    justifyContent: 'flex-start',
  },
});

class TaskList extends Component {
  constructor(props, context) {
    super(props, context);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      dataSource: ds.cloneWithRows(props.todos),
    };

  }

  renderRow(todo) {
    console.log(todo);
    return (
      <TaskRow todo={todo} />
    );
  }

  render() {
    console.log(this.state.dataSource);
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
      </View>
    );
  }
}

TaskList.propTypes = {
  todos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default TaskList;

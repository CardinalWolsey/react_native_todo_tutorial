# react_native_todo_tutorial

TODO: when a todo item in ios is slid, and marked as done, the item below it moves up into its position but in the slid state.  Decide if I want it to be in the slid or un-slid state when it moves up.

Had to make manual changes to index.js in react-native-swipeout module as follows

```javascript
import React, {Component} from 'react';
import {
  PanResponder,
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
} from 'react-native';

var tweenState = require('react-tween-state')
var styles = require('./styles.js')

var SwipeoutBtn = React.createClass({
```

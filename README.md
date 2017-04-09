TODO: when implementing redux to store the state after an item was marked done, it introduced a bug. Now, when an item is slid, and marked as done, the item below it moves up into its position but in the slid state.

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

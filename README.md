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

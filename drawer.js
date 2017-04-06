import React, {Component} from 'react';
import {
  Text,
  View,
  DrawerLayoutAndroid,
} from 'react-native';


class Drawer extends Component {
  constructor(props, context) {
    super(props, context);

    this.navigationView = (
      <View style={{flex: 1, backgroundColor: '#EEE'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
      </View>
    );
  }

  render() {
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => this.navigationView}
      >
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
        </View>
      </DrawerLayoutAndroid>
    );
  }

}

export default Drawer;

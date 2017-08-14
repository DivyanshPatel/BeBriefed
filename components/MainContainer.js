

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import StatusScreen from './StatusScreen'
import TabBarComponent from './TabBarComponent'

class MainContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
     <StatusScreen isUp={this.props.isUp} lastUpTime={this.props.lastUpTime}/>
     <TabBarComponent />
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainContainer
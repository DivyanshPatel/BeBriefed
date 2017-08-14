

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import moment from 'moment'

import StatusIndicator from './StatusIndicator'

class StatusScreen extends Component {
  render() {
    var relativeTime = moment().to(this.props.lastUpTime)
    let lastUpComponent
    if(!this.props.isUp){
      lastUpComponent = 'Last Up: ' + relativeTime;
    }
    return (


      <View style={styles.container}>

   
      <StatusIndicator isUp={this.props.isUp}/>
      <Text style={styles.statusText}> Service {this.props.isUp? 'Up' : 'Down!'}</Text>
      <Text style={styles.lastUpTime}>{lastUpComponent} </Text>
     </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  statusText: {
    fontSize: 30,
  },
  lastUpText: {
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
    color: '#b1b3b6',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  
});

export default StatusScreen
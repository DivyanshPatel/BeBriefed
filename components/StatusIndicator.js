

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  PropTypes,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'

class StatusIndicator extends Component {
  render() {
    return(
      <View style={[styles.border, this.props.isUp && styles.isUpBorderColor]}>
     <Text style={[styles.character, this.props.isUp && styles.isUpCharacterColor]}>
     <Icon name={this.props.isUp? 'check' : 'times'} size={180} / >
     </Text>
     
     </View>
      );
  }
}
  
      



const styles = StyleSheet.create({
  border: {
    borderWidth: 20,
    borderColor: '#F21D44',
    borderRadius: 200,
    width: 240,
    height: 240,
    justifyContent: 'center',
    // backgroundColor: '#F5FCFF',
  },
  character: {
    fontSize: 160,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#F21D44',
  },
  isUpBorderColor: {
    borderColor: '#006400',

  },
  isUpCharacterColor: {
    color: '#006400',

  },
  
});

export default StatusIndicator


import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import StatusScreen from './StatusScreen'
import TabBarComponent from './TabBarComponent'

import LinearGradient from 'react-native-linear-gradient'

class MainContainer extends Component {
  _renderTab(selected, services) {
    const thisService = services.find(s => s.key === selected)
    return (
      <StatusScreen isUp = {thisService.isUp} lastUpTime = {thisService.lastUpTime} />
      )
  }

  render() {
    return (
      <LinearGradient colors={['#ffffff','#4a787a']} style={styles.container}>
     {this._renderTab(this.props.selectedService,this.props.services)}
     <TabBarComponent onTabChange={this.props.onServiceChange} selectedService={this.props.selectedService}/>
     </LinearGradient>
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
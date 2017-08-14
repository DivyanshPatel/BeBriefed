import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Tabs from 'react-native-tabs';
import TabBarItems from './TabBarItems';

class TabBarComponent extends Component{
	render(){
		return(
			<Tabs iconStyle={{height: 72}} style={styles.tabContainer} onSelect={comp => {this.props.onTabChange(comp.props.name)}} selected={this.props.selectedService} >
			<TabBarItems name='web' lable='Web' icon='server'/  >
			<TabBarItems name='db' lable='DB Server' icon='database'/  >
			<TabBarItems name='mail' lable='Mail Server' icon='envelope-o'/  >
			</Tabs>
			);
	}

}


const styles = StyleSheet.create({
  tabContainer: {
  	backgroundColor: '#343434',
  	borderTopWidth: 1,
  	borderTopColor: '#262626',
  	height: 96,
    
  },
});

export default TabBarComponent;
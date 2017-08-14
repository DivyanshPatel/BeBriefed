import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Tabs from 'react-native-tabs';

class TabBarComponent extends Component{
	render(){
		return(
			<Tabs style={styles.tabContainer}>
			<Text>Web</Text>
			<Text>DB</Text>
			<Text>Mail</Text>
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
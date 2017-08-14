import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

class TabBarItems extends Component{
	render(){
		return(
			<View style={styles.container}>
			<Icon name={this.props.icon} style={[styles.icons, this.props.selected && styles.selectedLable]}/>
			<Text style={[styles.lable, this.props.selected && styles.selectedLable]}>{this.props.lable}</Text>
			</View>
			);
	}

}


const styles = StyleSheet.create({
  container: {
  	flexDirection: 'column',
  	justifyContent: 'center',
  	alignItems: 'center',
    
  },

  icons: {
  	color: '#ffffff',
  	fontSize: 32,
  	paddingVertical: 4,

  },
  lable: {
  	color: '#ffffff',
  	paddingTop: 5,
  },
  selectedLable: {
  	color: '#cc9766',
  },
});

export default TabBarItems;
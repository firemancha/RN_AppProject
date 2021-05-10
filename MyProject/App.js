import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './src/screen/Main';

const Stack = createStackNavigator();

class App extends Component{
	render() {
		return (
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Main">
					<Stack.Screen name="Main" component={MainScreen} />
				</Stack.Navigator>
			</NavigationContainer>
			
		)
	};
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
	}
})

export default App;

import React, { Component } from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './src/screen/Main';

const Stack = createStackNavigator();

class App extends Component{
	render() {
		return (
			<NavigationContainer>
				<Stack.Navigator 
					screenOptions={{ headerShown: false }}
					initialRouteName="Main"
				>
					<Stack.Screen name="Main" component={MainScreen} />
				</Stack.Navigator>
			</NavigationContainer>
			
		);
	};
};

export default App;

import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './src/screen/Main';
import SignScreen from './src/screen/Sign';


const Stack = createStackNavigator();

class App extends Component{

	componentDidMount(){
		StatusBar.setBackgroundColor("transparent");
  	StatusBar.setTranslucent(true);
  	StatusBar.setBarStyle("dark-content");
	}
	render() {
		return (
			<NavigationContainer>
				<Stack.Navigator 
					screenOptions={{ headerShown: false }}
					initialRouteName="Sign"
				>
					<Stack.Screen name="Main" component={MainScreen} />
					<Stack.Screen name="Sign" component={SignScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		);
	};
};

export default App;
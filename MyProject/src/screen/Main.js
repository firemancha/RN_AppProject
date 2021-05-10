import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

class MainScreen extends Component {
    render(){
        return(
            <View style = {styles.container}>
                <Text>This is Main Screen</Text>
            </View>
        );
    };
};

export default MainScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ff00ff',
	}
})
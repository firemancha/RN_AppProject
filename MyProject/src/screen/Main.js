import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Container from '../component/Container';

class MainScreen extends Component {
    render(){
        return(
            // <View style = {styles.container}>
            //     <Text>This is Main Screen</Text>
            // </View>
            <LinearGradient
                locations={[0.01, 0.2, 0.7, 1]}
                colors={['#ffce83', '#97e274',  '#4ae4f2', '#d392fc']}
                useAngle={true}
                angle={45}
                angleCenter={{x: 0.5, y: 0.5}}
                style={styles.container}
            >
                <Text>Main Screen!</Text>
            </LinearGradient>
        );
    };
};

export default MainScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
	}
})
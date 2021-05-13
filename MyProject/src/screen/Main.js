import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import Container from '../component/DefaultStyle';

class MainScreen extends Component {
    
    render(){
        // console.log("MainScreen");
        return(
            <LinearGradient
                locations={[0.01, 0.2, 0.7, 1]}
                colors={['#fffbea', '#fff6d0',  '#fff1b6', '#d392fc']}
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
        // width: '100%',
        // height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#ff0000',
        // position: 'absolute',
        // zIndex: 101,
        
	}
})
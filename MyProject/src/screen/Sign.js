import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
		TextInput,
		TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import DStyle from '../component/DefaultStyle';
import FindPassWord from '../component/FindPW';
import Join from '../component/Join';

class SignScreen extends Component {
	render(){
		// console.log(WIDTH);
		// console.log(HEIGHT);
		return(
			<View style={DStyle.container}>
				<View style={DStyle.header} />
				<View style={DStyle.content}>
					<LinearGradient
						locations={[0.1, 0.99, 1]}
						// colors={['#ffce83', '#97e274',  '#4ae4f2', '#d392fc']}
						colors={['#fffbea', '#fff5cd',  '#fff4c7']}
						// useAngle={true}
						// angle={45}
						// angleCenter={{x: 0.5, y: 0.5}}
						style={styles.gradient}
					>
						<View style={styles.title}>
							<Text style={styles.title_font}>로그인 페이지</Text>
						</View>
						<View style={styles.content}>

						</View>
						<View style={styles.footer}>
							<FindPassWord />
							<Join />
						</View>
					</LinearGradient>
				</View>
				<View style={DStyle.footer} />
				
			</View>

		);
	};
};

export default SignScreen;

const styles = StyleSheet.create({
	gradient:{
		width: "90%",
		height: "100%",
		alignItems: 'center',
		justifyContent: 'space-around',
		borderRadius: 10,
		padding: 15,
	},
	title:{
		width:'100%',
		height:'10%',
		// backgroundColor: '#ff0000',
		justifyContent: 'center',
		margin: 10,
	},
	title_font: {
		// color: 'white',
		fontSize: 30,
		fontWeight: 'bold',
	},
	content:{
		flex: 1,
		width: '100%',
		backgroundColor: '#0000ff',
		// paddingVertical: 100,
		justifyContent: 'space-around',
	},

	footer:{
		width:'100%',
		height:'30%',
		alignItems: 'center',
		justifyContent: 'space-around',
		// backgroundColor: '#00ffff',
		margin: 10,
	}
})
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
		TextInput,
		// TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import DStyle from '../component/DefaultStyle';
import FindPassWord from '../component/FindPW';
import Join from '../component/Join';
import Login from '../component/Login';
import { observer, inject } from 'mobx-react';

@inject("userInfoStore")
@observer
class SignScreen extends Component {
	render(){
		// console.log(WIDTH);
		// console.log(HEIGHT);
		console.log(this.props.userInfoStore.userID);
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
							<View style={styles.text_container}>
								<View style={styles.content_text}>
									<View style={styles.id_container}>
										<Text style={styles.content_font}>아이디</Text>
									</View>
									<View style={styles.pw_container}>
										<Text style={styles.content_font}>비밀번호</Text>
									</View>
								</View>
								<View style={styles.content_input}>
									<View style={styles.id_container}>
										<TextInput
											style={styles.content_inputbox}
											placeholder="ID"
											autoCapitalize="none"
											type="text"
											returnKeyType="next"
											autoFocus={true}
											blurOnSubmit={false}
											onChangeText={this.props.userInfoStore.handleUserID}
											onSubmitEditing={()=>{this.pwInput.focus();}}
										/>
									</View>
									<View style={styles.pw_container}>
										<TextInput
											style={styles.content_inputbox}
											placeholder="PassWord"
											autoCapitalize="none"
											type="text"
											ref={(input) => {this.pwInput = input;}}
											secureTextEntry={true}
											onChangeText={this.props.userInfoStore.handleUserPW}
										/>
									</View>
								</View>
							</View>
							<View style={styles.button_container}>
									<Login />
							</View>
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
		// flexDirection: 'row',
		flex: 1,
		width: '100%',
		// backgroundColor: '#0000ff',
		// paddingVertical: 100,
		justifyContent: 'space-around',
	},
	text_container:{
		flexDirection: 'row',
		height:'80%',
		width: '100%',
		// backgroundColor: '#ff0000',
	},
	content_text:{
		// flex:1,
		height: '100%',
		width:'30%',
		// backgroundColor: '#ff0000',
	},
	content_input:{
		// flex:1,
		height:'100%',
		width: '70%',
		// backgroundColor: '#ff00ff',
	},
	id_container:{
		height: '50%',
		width:'100%',
		// backgroundColor: '#f0ff0f',
		alignItems: 'center',
		justifyContent: 'center',
	},
	pw_container:{
		height: '50%',
		width: '100%',
		// backgroundColor: '#00f0ff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	content_font:{
		fontSize: 25,
		fontWeight: 'bold',
	},
	content_inputbox:{
		width: '80%',
		height: 40,
		borderWidth: 2,
		borderColor: '#fff4c7',
		fontSize: 15,
		// alignItems: 'center',
		// justifyContent: 'center',
	},
	button_container:{
		// flex: 1,
		height:'20%',
		width:'100%',
		// backgroundColor: '#ffffff',
		justifyContent: 'center',
		alignItems: 'flex-end',
		paddingHorizontal: 30,
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
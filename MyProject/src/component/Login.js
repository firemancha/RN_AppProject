import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class Login extends Component{
  render(){
    return(
      <TouchableOpacity style={styles.button}>
        {/* <Text>HI</Text>
         */}
         <LinearGradient
          locations={[0.4, 1]}
          colors={['#fff5cd', '#fff42a']}
          useAngle={true}
          angle={170}
          style={styles.button}
         >
          <Text>로그인</Text>
         </LinearGradient>
      </TouchableOpacity>
    );
  };
};

export default Login;

const styles = StyleSheet.create({
  button:{
    height: 30,
    width: 60,
    // backgroundColor: '#ff0000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#fff200',
  }
})
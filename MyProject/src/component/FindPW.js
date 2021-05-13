import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

class FindPassWord extends Component{
  render(){
    return(
      <TouchableOpacity style={styles.button}>
        <View style={styles.icon_container}>
          <Icon name="questioncircle" size={45} color={'#ffea93'}></Icon>
        </View>
        <View style={styles.text_container}>
          <Text style={styles.text_font}>비밀번호 찾기</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default FindPassWord;

const styles = StyleSheet.create({
  button:{
    flexDirection: 'row',
    width: "80%",
    height: "40%",
    backgroundColor: "#fffbea",
  },
  icon_container:{
    height: '100%',
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#ff0000',
  },
  text_container:{
    height: '100%',
    width: '75%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_font:{
    fontSize: 30,
    fontWeight: 'bold',
  }
})
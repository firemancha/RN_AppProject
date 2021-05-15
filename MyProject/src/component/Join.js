import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

class Join extends Component{
  render(){
    return(
      <TouchableOpacity style={styles.button}>
        <View style={styles.icon_container}>
          <Icon name="play" size={45} color={"#fffbea"}></Icon>
        </View>
        <View style={styles.text_container}>
          <Text style={styles.text_font}>회원가입</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default Join;

const styles = StyleSheet.create({
  button:{
    flexDirection: 'row',
    width: "80%",
    height: "40%",
    borderRadius: 8,
    backgroundColor: "#ffea93",
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
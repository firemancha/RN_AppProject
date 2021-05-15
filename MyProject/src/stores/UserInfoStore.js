import { observable, action, computed } from 'mobx';
import { Keyboard, Alert } from 'react-native';

class UserInfoStore {
  @observable userID = ""
  @observable userPW = ""

  @action handleUserID = ID => {
    this.userID = ID;
    // console.log("Called handleUserID: ", this.userID);
  }

  @action handleUserPW = PW => {
    this.userPW = PW;
    // console.log("Called handleUserPW: ", this.userPW);
  }

  checkUserInfoHandler = () => {
    const alertMessage = `아이디: ${this.userID}\n비밀번호: ${this.userPW}`;
    Alert.alert(
      // 회원 정보 확인`,
      // `아이디: ${this.userID}\비밀번호: ${this.userPW}`
      "회원 정보 확인",
      `아이디: ${this.userID}\n비밀번호: ${this.userPW}`,
      [
        {
          text: "확인",
          // onPress: () => console.log('Close Alert'),
        }
      ],
      // { cancelable: false }
    );
    Keyboard.dismiss();
  }
}

export default UserInfoStore;
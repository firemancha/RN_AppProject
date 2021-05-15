import { observable, action, computed } from 'mobx';
import { Keyboard } from 'react-native';

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
    alert(`UserID: ${this.userID}\nUserPW: ${this.userPW}`);
    Keyboard.dismiss();
  }
}

export default UserInfoStore;
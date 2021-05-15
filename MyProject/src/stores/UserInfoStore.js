import { observable, action, computed } from 'mobx';

class UserInfoStore {
  @observable userID = ""
  @observable userPW = ""

}

export default UserInfoStore;
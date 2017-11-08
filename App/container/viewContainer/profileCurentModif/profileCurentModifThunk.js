import FBSDK, {
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager
} from 'react-native-fbsdk';
import User_class from '../../../classes/user';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import { setCurentUser } from './profileCurentModifAction';
import { AsyncStorage } from 'react-native';

export const _setUser = function (currentUser, bio, work, pictures) {
  return (dispatch) => {
    //reattribut new data 
    currentUser.pictures = pictures;
    currentUser.bio = bio;
    currentUser.work = work;
    console.log("after update ----", currentUser)

    //update firebase
    firebase.database().ref('/users/' + currentUser.uid).set(currentUser).then(function (res) {
      const SETTINGS_KEY = 'current_user'
      const settingsObj = { user: currentUser }
      //update local base
      AsyncStorage.setItem(SETTINGS_KEY, JSON.stringify(settingsObj))
      console.log(currentUser)
      Actions.swiper({index: 0, isEnable:true})
    })
  }
}



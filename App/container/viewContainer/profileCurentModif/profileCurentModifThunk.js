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

export const _setUser = function (currentUser, bio, work) {
  return (dispatch) => {
    //restructure object
    if (currentUser.email == undefined) {
      currentUser.email = null
    }
    let user = new User_class(
      currentUser.email,
      currentUser.birthday,
      currentUser.avatarUrl,
      currentUser.id,
      currentUser.firstName,
      currentUser.lastName,
      currentUser.gender,
      currentUser.uid,
      currentUser.picture,
      currentUser.lat,
      currentUser.long,
    );
    user.bio = bio;
    user.work = work;
    //--------------------
    //check firebase, then
    firebase.database().ref('/users/' + currentUser.uid).child('bio').set(bio).then(function (res) {
      firebase.database().ref('/users/' + currentUser.uid).child('work').set(work).then(function (res) {
        // console.log("-------------in curentModifThunk---------", bio)
        const SETTINGS_KEY = 'current_user'
        const settingsObj = { user: user }
        //check local storage
        AsyncStorage.setItem(SETTINGS_KEY, JSON.stringify(settingsObj))
        // dispatch(setCurentUser());
        Actions.swiper(user)
      })
    })
  }
}



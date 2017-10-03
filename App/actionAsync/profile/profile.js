import firebase from 'firebase';
import {
   getCurentUser
} from '../../actions/profileActions';
import Home from '../../components/home';
import User_class from '../../classes/user';
import { Actions } from 'react-native-router-flux';
import {AsyncStorage} from 'react-native'

export const _currentUser = function () {
   console.log('----- in asynchrone get current user ----- ')
   return (dispatch) => {
      AsyncStorage.getItem("current_user").then((value) => {
         console.log(" ----- current user uid ----" , JSON.parse(value))
         if(value != null){
            dispatch(getCurentUser(JSON.parse(value).user));
         }
     }).done();
      // dispatch(setCurrentUser(user));
   }
}
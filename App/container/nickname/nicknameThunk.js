import firebase from 'firebase';
import {
    setNicknamePending,
    setNicknameSucess,
    setNicknameErorr
} from './nicknameActions';
import { Actions } from 'react-native-router-flux';
import {AsyncStorage} from 'react-native'

export const _nickname = function (nickname, data) {
    //Attempt a login using the Facebook login dialog asking for default permissions.
    console.log("in actions", data)
    return (dispatch) => {
        dispatch(setNicknamePending(true));
        var userFirebase = firebase.auth().currentUser;
        if(userFirebase){
            console.log("user current,", userFirebase)
            firebase.database().ref().child('users').orderByChild('nickname').equalTo(nickname).once('value').then(function (snapshot) {
                let exists = snapshot.val() != null;
                console.log(" ---- nickname-value-exist ----- ",snapshot.val())
                if(!exists){
                    firebase.database().ref('/users/' + userFirebase.uid).child('nickname').set(nickname).then(function(res){
                        console.log("nickname done");
                        //stockage profil localstorage
                        const SETTINGS_KEY = 'current_user'
                        data.nickname = nickname
                        console.log(data.user)
                        const settingsObj = {user: data}
                        AsyncStorage.setItem(SETTINGS_KEY, JSON.stringify(settingsObj))
                        Actions.home()
                    }, (error) => {
                        console.log(error)
                    })
                }else{
                    dispatch(setNicknameErorr());
                    console.log("nickname exist")
                }
            })
        }
    }
}
import firebase from 'firebase';
import {
    setNicknamePending,
    setNicknameSucess,
    setNicknameErorr
} from '../../actions/nicknameActions';
import Home from '../../components/home';
import User_class from '../../classes/user';
import { Actions } from 'react-native-router-flux';

export const _nickname = function (nickname) {
    //Attempt a login using the Facebook login dialog asking for default permissions.
    console.log("in actions", nickname)
    return (dispatch) => {
        dispatch(setNicknamePending(true));
        var userFirebase = firebase.auth().currentUser;
        if(userFirebase){
            console.log("user current,", userFirebase)
            firebase.database().ref().child('users').orderByChild('nickname').equalTo(nickname).once('value').then(function (snapshot) {
                let exists = snapshot.val() != null;
                console.log("nickname value exist",snapshot.val())
                if(!exists){
                    firebase.database().ref('/users/' + userFirebase.uid).child('nickname').set(nickname).then(function(res){
                        console.log("nickname done");
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
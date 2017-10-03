import firebase from 'firebase';
import {
    setNicknamePending,
    setNicknameSucess,
    setNicknameErorr
} from '../../actions/nicknameActions';
import User_class from '../../classes/user';

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
                    }, (error) => {
                        console.log(error)
                    })
                }else{
                    console.log("nickname exist")
                }
            })
        }
    }
}
import FBSDK, {
    LoginManager,
    AccessToken,
    GraphRequest,
    GraphRequestManager
} from 'react-native-fbsdk';
import { Actions } from 'react-native-router-flux';
import Nickname from '../../components/nickname';
import Home from '../../components/home';
import firebase from 'firebase';
import { setLoginPending, setLoginSuccess, setLoginError, setLoginCanceled } from '../../actions/authActions';
import User_class from '../../classes/user';
import {AsyncStorage} from 'react-native'


export const _fb_Auth = function () {

    //Attempt a login using the Facebook login dialog asking for default permissions.

    return (dispatch) => {

        dispatch(setLoginPending(true));

        LoginManager.logInWithReadPermissions(['public_profile']).then(
            (result) => {
                if (result.isCancelled) {
                    alert("Connexion annulée \r Connectez vous pour entrer dans STORY")
                    dispatch(setLoginCanceled(true, "login cancel"));
                } else {

                    ///  -----------------   Authentification process   ---------------------- 
                    /// Get facebook Access Token
                    AccessToken.getCurrentAccessToken().then(
                        (data) => {
                            if (data) {
                                const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
                                firebase.auth().signInWithCredential(credential).then((connexion) => {

                                    /// Call Facebook Graph API 
                                    
                                    /// Callback facebook call API
                                    const responseInfoCallback = (error, result) => {
                                        if (error) {
                                            console.log(" ---- erreur lors de la connexion -----")
                                            alert("Erreur lors de la connexion");
                                        } else {
                                            /// Create user 
                                            let user = new User_class(result.id, result.email,result.name, result.first_name, result.last_name, data.accessToken, result.picture, 0, "Type1", null)

                                            /// Check if user is in firebase database 

                                            firebase.database().ref('/users/' + connexion.uid).once('value').then(function (snapshot) {

                                                let exists = snapshot.val() != null;
                                                if (!exists) {
                                                    /// Save user in firebase database 
                                                    console.log("User doesn't exist :" , user)
                                                    if(user.email == undefined){
                                                        user.email = null
                                                    }
                                                    firebase.database().ref('/users/' + connexion.uid).set(user).then(function(res){
                                                        console.log(" ---- user is save ----- ")
                                                        const SETTINGS_KEY = 'facebook_token'
                                                        const settingsObj = {lastUpdate: Date.now(), token: data.accessToken, uid: connexion.uid}
                                                        AsyncStorage.setItem(SETTINGS_KEY, JSON.stringify(settingsObj))
                                                        console.log("---- lolal storage plug ----- ")
                                                        dispatch(setLoginSuccess(true, res));
                                                        Actions.nickname()
                                                    }, (error) => {
                                                        alert("Erreur lors de la connexion \r si cela persite contacter nous \r story@contact.com");
                                                        console.log(" ---- error in user save ----- ", error)
                                                    })
                                                }else{
                                                    console.log(" ---- user exist ------ " , user)
                                                    const SETTINGS_KEY = 'facebook_token'
                                                    const settingsObj = {lastUpdate: Date.now(), token: data.accessToken, uid: connexion.uid}
                                                    AsyncStorage.setItem(SETTINGS_KEY, JSON.stringify(settingsObj))
                                                    console.log("---- lolal storage plug ----- ")
                                                    dispatch(setLoginSuccess(true, result));
                                                    Actions.home()
                                                }
                                            }, (error) => {
                                                alert("Erreur lors de la connexion \r si cela persite contacter nous \r story@contact.com");
                                                console.log(error + "----- Erreur de connection firebase database -----")
                                            })
                                        }
                                    }

                                    /// Construct Graph request

                                    const infoRequest = new GraphRequest('/me', {
                                        parameters: {
                                            fields: {
                                                string: 'email,name,first_name,last_name,picture.type(large)'
                                            }
                                        }
                                    }, responseInfoCallback);

                                    new GraphRequestManager().addRequest(infoRequest).start()

                                }, (error) => {
                                    console.log(error + " ----- Erreur de connection firebase credential ----- ")
                                    alert(error)
                                })
                            }
                        }, (error) => {
                            console.log(error + "----- Erreur de connection facebook credential ----- ")
                        }
                    )
                }
            },
            (error) => {
                dispatch(setLoginError(true, "error connection"));
            }
        );
    }
};

export const _tchek_user = function(){
    console.log("tcheck user")
    return (dispatch) => {
        AsyncStorage.getItem("facebook_token").then((value) => {
            console.log("tcheck user" , value)
            if(value != null){
                console.log(value)
                Actions.home()
            }
        }).done();
    }
}





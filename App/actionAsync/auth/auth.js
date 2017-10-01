import FBSDK, {
    LoginManager,
    AccessToken,
    GraphRequest,
    GraphRequestManager
} from 'react-native-fbsdk';
import { Actions } from 'react-native-router-flux';
import Home from '../../components/home';
import firebase from 'firebase';
import { setLoginPending, setLoginSuccess, setLoginError, setLoginCanceled } from '../../actions/authActions';
import User_class from '../../classes/user';

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
                                            console.log(error)
                                            alert("Erreur lors de la connexion");
                                        } else {
                                            /// Create user 
                                            let user = new User_class(result.email, result.name, result.first_name, result.last_name, data.accesToken, result.id)
                                            /// Check if user is in firebase database 
                                            firebase.database().ref('/users/' + connexion.uid).once('value').then(function (snapshot) {
                                                let exists = snapshot.val() != null;

                                                if (!exists) {
                                                    /// Save user in firebase database 
                                                    firebase.database().ref('/users/' + connexion.uid).set(result);
                                                    dispatch(setLoginSuccess(true, result.name));
                                                    Actions.home({user: user})
                                                    console.log(user)
                                                    // alert("hello  - " + result.name)
                                                }else{
                                                    dispatch(setLoginSuccess(true, result.name));
                                                    Actions.home({user: user})
                                                    console.log(user)
                                                    // alert("hello  - " + result.name)
                                                }
                                            }, (error) => {
                                                console.log(error + "----- Erreur de connection firebase database -----")
                                            })
                                        }
                                    }
                                    /// Construct Graph request
                                    const infoRequest = new GraphRequest('/me', {
                                        parameters: {
                                            fields: {
                                                string: 'email, name, first_name, middle_name, last_name, picture.type(large), cover, birthday, location, friends'
                                            }
                                        }
                                    }, responseInfoCallback);
                                    new GraphRequestManager().addRequest(infoRequest).start()
                                }, (error) => {
                                    console.log(error + " ----- Erreur de connection firebase credential ----- ")
                                    reject(error)
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



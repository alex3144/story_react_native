import FBSDK, {
    LoginManager,
    AccessToken,
    GraphRequest,
    GraphRequestManager
} from 'react-native-fbsdk';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import { setLoginPending, setLoginSuccess, setLoginError, setLoginCanceled } from './authActions';
import User_class from '../../classes/user';
import { AsyncStorage } from 'react-native'


export const _fb_Auth = function (long, lat) {

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
                                    firebase.database().ref('/users/' + connexion.uid).once('value').then(function (snapshot) {
                                        let exists = snapshot.val() != null;
                                        if (!exists) {
                                            console.log("------- no exist --------")
                                            const responseInfoCallback = (error, result) => {
                                                if (error) {
                                                    console.log(" ---- erreur lors de la connexion -----", error)
                                                    alert("Erreur lors de la connexion", error);
                                                } else {
                                                    const responseAlbumPhotoCallback = (error, resultPhoto) => {
                                                        let pictures = [];
                                                        pictures.push(resultPhoto.data[0], resultPhoto.data[1], resultPhoto.data[2])
                                                        
                                                        if(result.email == undefined){
                                                            result.email = null
                                                        }
                                                        
                                                        let user = new User_class(
                                                            result.email,
                                                            result.birthday,
                                                            result.picture.data.url,
                                                            result.id,
                                                            result.first_name,
                                                            result.last_name,
                                                            result.gender,
                                                            connexion.uid,
                                                            pictures,
                                                            lat,
                                                            long
                                                        )

                                                        console.log("---- User doesn't exist ----- ", user)
                                                        
                                                        firebase.database().ref('/users/' + connexion.uid).set(user).then(function (res) {
                                                            console.log(" ---- user is save ----- ")
                                                            const SETTINGS_KEY = 'current_user'
                                                            const settingsObj = { user: user }
                                                            AsyncStorage.setItem(SETTINGS_KEY, JSON.stringify(settingsObj))
                                                            dispatch(setLoginSuccess(true));
                                                            Actions.swipper(user)
                                                        }, (error) => {
                                                            console.log(" ---- error in user save ----- ", error)
                                                            alert("Erreur lors de la connexion \r si cela persite contacter nous \r story@contact.com");
                                                        })
                                                    }

                                                    const responseAlbumIdCallback = (error, result) => {

                                                        // CALL REQUEST FOR PROFIL PICTURE SOURCE

                                                        const albumPhotoRequest = new GraphRequest('/' + result.data[0].id +'/photos' , {
                                                            parameters: {
                                                                fields: {
                                                                    string: 'source',
                                                                    limit : '3'
                                                                    
                                                                }
                                                            }
                                                        }, responseAlbumPhotoCallback);
                                                        new GraphRequestManager().addRequest(albumPhotoRequest).start()   
                                                    }

                                                    const albumIdRequest = new GraphRequest('/me/albums', {
                                                    }, responseAlbumIdCallback);

                                                    new GraphRequestManager().addRequest(albumIdRequest).start()   
                                                } 
                                            }

                                            const infoRequest = new GraphRequest('/me', {
                                                parameters: {
                                                    fields: {
                                                        string: 'first_name, education, last_name,email,birthday,gender,picture'
                                                    }
                                                }
                                            }, responseInfoCallback);

                                            new GraphRequestManager().addRequest(infoRequest).start() 
                                            
                                      
                                        } else {
                                            console.log(" ---- user exist ------ ")
                                            const SETTINGS_KEY = 'current_user'
                                            const settingsObj = { user: snapshot.val() }
                                            AsyncStorage.setItem(SETTINGS_KEY, JSON.stringify(settingsObj))
                                            dispatch(setLoginSuccess(true));
                                            Actions.swipper(snapshot.val())
                                        }
                                    })
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

export const _tchek_user = function () {
    console.log(" ----- in tcheck user ------ ")
    return (dispatch) => {
        AsyncStorage.getItem("current_user").then((value) => {
            console.log("tcheck_user" , value)
            if (value != null) {
                console.log(value)
                Actions.swipper(value)
            }
        }).done();
    }
}





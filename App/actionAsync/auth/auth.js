import FBSDK, {
    LoginManager,
    AccessToken,
    GraphRequest,
    GraphRequestManager
} from 'react-native-fbsdk';
import {setLoginPending, setLoginSuccess, setLoginError, setLoginCanceled} from '../../actions/authActions';
import user_class from '../../classes/user';


export const _fb_Auth = function(){


    

    //Attempt a login using the Facebook login dialog asking for default permissions.
    return (dispatch) => {
        dispatch(setLoginPending(true));
        LoginManager.logInWithReadPermissions(['public_profile']).then(
            function (result) {
                if (result.isCancelled) {
                    dispatch(setLoginCanceled(true, "login cancel"));
                } else {
                    ///authentification process
                    AccessToken.getCurrentAccessToken().then(
                        (data) => {
                            if(data){
                                ///call back facebook calll
                                const responseInfoCallback = (error, result) => {
                                    if (error) {
                                        console.log(error)
                                        alert('Error fetching data: ' + error.toString());
                                    } else {
                                        console.log(result)
                                        var user = new user_class( result.email, result.name, result.first_name, result.last_name, data.accesToken, result.id)
                                        alert ("hello  - " + user.name)
                                        dispatch(setLoginSuccess(true,data.accessToken));
                                    }
                                }

                                ///graph request
                                   const infoRequest = new GraphRequest('/me', {
                                    parameters: {
                                        fields: {
                                            string: 'email,name,first_name,last_name'
                                        }
                                    }
                                }, responseInfoCallback);
                                
                                // Start the graph request for identification process
                                new GraphRequestManager()
                                    .addRequest(infoRequest)
                                    .start()
                            }
                        }
                    )
                }
            },
            function (error) {
                dispatch(setLoginError(true, "error connection"));
            }
        );
    }
};



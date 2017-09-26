import FBSDK, {
    LoginManager,
    AccessToken
} from 'react-native-fbsdk'


export default function _fb_Auth() {
    //Attempt a login using the Facebook login dialog asking for default permissions.
    LoginManager.logInWithReadPermissions(['public_profile']).then(
        function (result) {
            if (result.isCancelled) {
                alert('Login cancelled');
            } else {
                AccessToken.getCurrentAccessToken().then(
                    (data) => {
                        alert(data.accessToken.toString())
                    }
                )
            }
        },
        function (error) {
            alert('Login fail with error: ' + error);
        }
    );
};
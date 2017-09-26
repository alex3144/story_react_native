import React, { Component} from 'react';
import Actions from 'react-native-router-flux';
import { StackNavigator, Navigator } from 'react-navigation';
import { Text, TouchableOpacity, View, Button } from 'react-native';
import Cards from './cards';
import CardSections from './cardSections';
import Home from './home';
import Profile from './profile';
import Messages from './messages';
import Login from './commun/buttonLogin';
import FBSDK, {LoginManager} from 'react-native-fbsdk'
// import LinearGradient from 'react-native-linear-gradient';

const navigation = StackNavigator({
  home: { screen: Home },
  profile: { screen: Profile },
  messages: { screen: Messages },
});



export default class Connexion extends React.Component {
  _fb_Auth() {
    //Attempt a login using the Facebook login dialog asking for default permissions.
    console.log("test")
    LoginManager.logInWithReadPermissions(['public_profile']).then(
       function (result) {
          if (result.isCancelled) {
             alert('Login cancelled');
          } else {
             alert('Login success with permissions: '
                + result.grantedPermissions.toString());
          }
       },
       function (error) {
          alert('Login fail with error: ' + error);
       }
    );
  };

  static navigationOptions = {
   header : null
  };

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgb(54,54,54)'}}>
            <Text style= {styles.textTitle} >
                  Story
            </Text>
            <TouchableOpacity style= {styles.button} onPress={() => { this._fb_Auth()}}>
              {/* <LinearGradient colors={['rgb(15,131,222)', '#rgb(71,154,222)']}> */}
                <Text style= {styles.textButon} >
                    Login
                </Text>
              {/* </LinearGradient> */}
            </TouchableOpacity>

      </View>
    );
  }
}
const styles = ({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  button: {
    width: 200,
    height: 40,
    borderWidth: 2,
    backgroundColor:"#3b5998",
    borderColor: '#3b5998',
    borderRadius: 8,
    alignItems: 'center', 
    justifyContent: 'center',
  },
  textButon: {
    color:'white',
    fontSize: 20,
  },
  textTitle: {
    color: 'white',
    fontsize: 80
  }

});

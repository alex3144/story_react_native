import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { StackNavigator, Navigator
} from 'react-navigation';
import Home from '../home';
// import FBSDK, {LoginManager} from 'react-native-fbsdk'


export default class Login extends React.Component {

   _fb_Auth() {
      // Attempt a login using the Facebook login dialog asking for default permissions.
      console.log("test")
      // LoginManager.logInWithReadPermissions(['public_profile']).then(
      //    function (result) {
      //       if (result.isCancelled) {
      //          alert('Login cancelled');
      //       } else {
      //          alert('Login success with permissions: '
      //             + result.grantedPermissions.toString());
      //       }
      //    },
      //    function (error) {
      //       alert('Login fail with error: ' + error);
      //    }
      // );
   };
   render() {
      return (
         <View style = {style.container}>
            <TouchableOpacity onPress={() => { this._fb_Auth()}}>
               <Text style= {{color:'white'}} >
                  Login With Facebook
               </Text>
            </TouchableOpacity>
         </View>
      )
   };
}

const style = StyleSheet.create({
   container: {
      padding:20,
      borderRadius:3,
      justifyContent: 'center',
      alignItems : 'center',
      backgroundColor:'#3b5998',
   }
})
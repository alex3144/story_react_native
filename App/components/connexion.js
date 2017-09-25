import React, { Component } from 'react';
import Actions from 'react-native-router-flux';
import { StackNavigator, Navigator } from 'react-navigation';
import { Text, TouchableOpacity, View, Button } from 'react-native';
import Cards from './cards';
import CardSections from './cardSections';
import Home from './home';
import Profile from './profile';
import Messages from './messages';
import Login from './commun/buttonLogin';

const navigation = StackNavigator({
  home: { screen: Home },
  profile: { screen: Profile },
  messages: { screen: Messages },
});

export default class Connexion extends Component {
  static navigationOptions = {
    header: null

  };
  render() {
    return (
      <View style={{  flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Login/>
      </View>
    );
  }
}
// const styles = ({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   button: {
//     width: 200,
//     height: 40,
//     borderWidth: 2,
//     backgroundColor:"#3b5998",
//     borderColor: '#3b5998',
//     borderRadius: 8,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 600

//   }

// });

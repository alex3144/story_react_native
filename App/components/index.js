import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { StackNavigator, Navigator
} from 'react-navigation';
import Connexion from './connexion';
import Home from './home';
import Messages from './messages';
import Profile from './profile';



export default (navigation = StackNavigator({
      connexion: {screen: Connexion},
      home: { screen: Home },
      messages: { screen: Messages },
      profile: { screen: Profile },   
   }));
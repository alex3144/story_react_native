import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Connexion from './connexion';
import Home from './home';
import Messages from './messages';
import Profile from './profile';
import Nickname from './nickname';


const RouterComponent = () => {
      return (
            <Router
                  navigationBarStyle={styles.navBarStyle}
                  rightButtonTextStyle={styles.buttonTextStyle}
                  leftButtonTextStyle={styles.buttonTextStyle}
            >
                  <Scene >
                        <Scene
                              key="login"
                              component={Connexion} 
                              hideNavBar={true} 
                              initial={true}
                        />
                        <Scene
                              key="nickname"
                              component={Nickname} 
                              hideNavBar={true} 
                              panHandlers={null}
                        />
                        <Scene
                              onLeft={() => Actions.profile()}
                              leftTitle="Profile"
                              key="home"
                              component={Home}
                              panHandlers={null}
                        />
                        <Scene
                              key="profile"
                              component={Profile}
                        />
                  </Scene>
            </Router>
      );
};

export default RouterComponent;

const styles = {
      navBarStyle: {
            backgroundColor: 'rgb(54,54,54)',
      },
      buttonTextStyle: {
            color: 'white'
      }
}
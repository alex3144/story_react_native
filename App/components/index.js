import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Connexion from './connexion';
import Home from './home';
import Profile from './profile';
import Nickname from './nickname';
import Contact from './contact';


const RouterComponent = () => {
      return (
            <Router
                  navigationBarStyle={styles.navBarStyle}
                  leftButtonTextStyle={null}
            >
                  <Scene >
                        <Scene
                              key="login"
                              component={Connexion}
                              hideNavBar={true}
                        />
                        <Scene
                              key="nickname"
                              component={Nickname}
                              hideNavBar={true}
                              panHandlers={null}
                        />
                        <Scene
                              hideNavBar={true}
                              key="home"
                              component={Home}
                              panHandlers={null}
                              initial={true}
                        />
                        <Scene
                              hideNavBar={true}
                              key="profile"
                              component={Profile}
                        />
                        <Scene
                              hideNavBar={true}
                              key="contact"
                              component={Contact}
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
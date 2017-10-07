import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Connexion from './connexion';
import Home from './home';
import Profile from './profile';
import Nickname from './nickname';
import Contact from './contact';
import Points from './points';
import Reglages from './reglages';


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
                              initial={true} 
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
                              
                        />
                        <Scene
                              hideNavBar={false}
                              key="profile"
                              component={Profile}
                        />
                        <Scene
                              hideNavBar={true}
                              key="contact"
                              component={Contact}
                        />
                        <Scene
                              hideNavBar={true}
                              key="points"
                              component={Points} 
                        />
                        <Scene
                              hideNavBar={true}
                              key="reglages"
                              component={Reglages}
                              
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
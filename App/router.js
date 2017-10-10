import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Connexion from './container/connexion/connexion';
import Home from './container/home/home';
import Profile from './container/profile/profile';
import Nickname from './container/nickname/nickname';
import Contact from './container/contact/contact';
import Level from './container/level/level';
import Parameters from './container/parameters/parameters';
import Photo from './container/photo/photo'


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
                              hideNavBar={true}
                              key="nickname"
                              component={Nickname}
                              panHandlers={null}
                        />
                        <Scene
                              hideNavBar={true}
                              key="home"
                              component={Home}
                              panHandlers={null}
                              
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
                        <Scene
                              hideNavBar={true}
                              key="level"
                              component={Level}
                        />
                        <Scene
                              hideNavBar={true}
                              key="parameters"
                              component={Parameters}
                        />
                        <Scene
                              hideNavBar={true}
                              key="photo"
                              component={Photo}
                              
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
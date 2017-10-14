import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Connexion from './container/connexion/connexion';
import Home from './container/home/home';
import Profile from './container/profile/profile';
import Swipper from './container/swipper/swipper';
import Contact from './container/contact/contact';

import Parameters from './container/parameters/parameters';
import Photo from './container/photo/photo'
import Messagerie from './container/messagerie/messagerie';


const RouterComponent = () => {
      return (
            <Router
                  navigationBarStyle={styles.navBarStyle}
                  leftButtonTextStyle={null}
            >
                  <Scene>
                        <Scene
                              key="login"
                              component={Connexion}
                              hideNavBar={true}
                             
                        />
                        <Scene
                              hideNavBar={true}
                              key="swipper"
                              component={Swipper}
                              panHandlers={null}
                              initial={true}
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
                              direction='vertical'
                        />
                        <Scene
                              hideNavBar={true}
                              key="contact"
                              component={Contact}
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
                        <Scene
                              hideNavBar={true}
                              key="messagerie"
                              component={Messagerie}

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
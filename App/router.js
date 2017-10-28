import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Connexion from './container/viewContainer/connexion/connexion';
import Home from './container/viewContainer/home/home';
import ProfileCurrent from './container/viewContainer/profileCurrent/profileCurrent';
import ProfileCurentModif from './container/viewContainer/profileCurentModif/profileCurentModif';
import Swiper from './container/viewContainer/swiper/swiper';
import ProfileUser from './container/viewContainer/profileUser/profileUser';
import Parameters from './container/viewContainer/parameters/parameters';
import Messagerie from './container/viewContainer/messagerie/messagerie';


const RouterComponent = () => {
      return (
            <Router
                  navigationBarStyle={styles.navBarStyle}
                  leftButtonTextStyle={null}
            >
                  <Scene>
                        <Scene
                              key="connexion"
                              component={Connexion}
                              hideNavBar={true}
                              initial={true}
                        />
                        <Scene
                              hideNavBar={true}
                              key="swiper"
                              component={Swiper}
                              panHandlers={null}
                              
                        />
                        <Scene
                              hideNavBar={true}
                              key="profileCurrent"
                              component={ProfileCurrent}
                              
                        />
                        <Scene
                              hideNavBar={true}
                              key="profileUser"
                              component={ProfileUser}
                              
                        />
                        <Scene
                              hideNavBar={true}
                              key="parameters"
                              component={Parameters}
                        />
                        <Scene
                              hideNavBar={true}
                              key="messagerie"
                              component={Messagerie}
                        />
                        <Scene
                              hideNavBar={true}
                              key="profileCurentModif"
                              component={ProfileCurentModif}
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
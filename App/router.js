import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Connexion from './container/connexion/connexion';
import Home from './container/home/home';
import ProfileCurrent from './container/profileCurrent/profileCurrent';
import ProfileCurentModif from './container/profileCurentModif/profileCurentModif';
import Swiper from './container/swiper/swiper';
import Contact from './container/contact/contact';
import ProfileUser from './container/profileUser/profileUser';
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
                              key="home"
                              component={Home}
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
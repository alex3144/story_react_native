import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Animated,
  Image,
  ScrollView,
  StatusBar
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Swiper from 'react-native-swiper';
import StyleDimention from '../style/dimention';
import { _currentUser, } from '../actionAsync/profile/profile';
import Profil from './profile';
import Contact from './contact';
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {scrollY: new Animated.Value(0), springValue: new Animated.Value (0.3) };
  }

  render() {

    return (
      <View>
      <Swiper
      style={styles.wrapper}
      horizontal={false}
      showsPagination={false}
      loop={false}
      index={1}
      ref='swiper'
      > 

        {/* Profil View */}
        <View style={[styles.containerProfile]}>
          <Profil />
          <TouchableOpacity style= {styles.buttonProfile} onPress={() => this.refs.swiper.scrollBy(1)} />
        </View>

        {/* Home View */}
        <View style={[styles.containerHome]}>
          <StatusBar
            backgroundColor="transparent"
            barStyle="light-content"
          />
          <View style={styles.containerSection}>
            <TouchableOpacity style= {styles.buttonProfile} onPress={() => this.refs.swiper.scrollBy(-1)} />
            <Text style= {styles.textPseudo} >
              CaroleZer
            </Text>
          </View>
          <View>
            <TouchableOpacity style= {styles.buttonContact} onPress={() => this.refs.swiper.scrollBy(1)}>
            </TouchableOpacity>
          </View>
        </View>

        {/* Contact View */}
        <View style={styles.containerContact}>
          <Contact />
        </View>
      </Swiper>
      <View>
        <TouchableOpacity style= {styles.buttonCreate}>
          <Text style= {styles.textButtonCreate} >
            Creer
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style= {styles.buttonJoin}>
          <Text style= {styles.textButtonJoin} >
            Rejoindre
          </Text>
        </TouchableOpacity>
      </View>
      </View>
    );
  }
}


const HEADER_MAX_HEIGHT = 500;
const HEADER_MIN_HEIGHT = 0;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const styles = {
  //main layout container
  containerProfile: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgb(54,54,54)',
  },
  containerHome: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgb(54,54,54)',
    width: StyleDimention.DEVICE_WIDTH,
    height: StyleDimention.DEVICE_HEIGHT,
    padding: StyleDimention.CARD_PADDING_X,
    paddingTop: StyleDimention.CARD_PADDING_Y,
    paddingBottom: StyleDimention.CARD_PADDING_Y,
  },
  containerContact: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgb(54,54,54)',
    width: StyleDimention.DEVICE_WIDTH,
    height: StyleDimention.DEVICE_HEIGHT,
    padding: StyleDimention.CARD_PADDING_X,
    paddingTop: StyleDimention.CARD_PADDING_Y,
    paddingBottom: StyleDimention.CARD_PADDING_Y,
  },
  containerSection: {
    alignItems: 'center',
    marginBottom: 110,
  },
  //--------------------------------

  //button swipper
  buttonProfile: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
    borderRadius: 100,
    opacity: 1,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginBottom: 5,
  },
  buttonContact: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
    borderRadius: 100,
    opacity: 1,
    backgroundColor: 'rgb(248,194,28)',
  },
  //--------------------------------
  //main content page
  textPseudo: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    fontFamily: "ProximaNovaSoft-Semibold",
  },
  buttonCreate: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 59,
    width: 180,
    borderRadius: 100,
    opacity: 1,
    backgroundColor: '#BB62CB',
    marginBottom: 33,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 7,
  },
  buttonJoin: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 59,
    width: 180,
    borderRadius: 100,
    opacity: 1,
    backgroundColor: 'white',
    marginBottom: 33,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 7,
  },
  textButtonCreate: {
    color: 'white',
    fontSize: 24,
    fontFamily: "ProximaNovaSoft-Semibold",
    paddingTop: 5,
  },
  textButtonJoin: {
    color: '#95DDFB',
    fontSize: 24,
    fontFamily: "ProximaNovaSoft-Semibold",
    paddingTop: 5,
  },
  //-----------------------------------------
}




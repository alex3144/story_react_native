import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Animated,
  Image,
  ScrollView,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Swiper from 'react-native-swiper';
import StyleDimention from '../style/dimention';
import { _currentUser, } from '../actionAsync/profile/profile';
import Profil from './profile';
import Contact from './contact';
import { connect } from 'react-redux';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { opacity: new Animated.Value(1) }
  }

  onSwipperOn(index) {
    console.log(" ---- swippe start", index)
  }
  opacityAnime(index) {

      console.log(" ---- swippe start", index)
    this.state.opacity.interpolate({
      inputRange: [1, 1],
      outputRange: [1, 0]  // 0 : 150, 0.5 : 75, 1 : 0
    })
    console.log(this.state.opacity)
  }

  render() {
    // const opacityAnime = this.state.opacity.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: [150, 0]  // 0 : 150, 0.5 : 75, 1 : 0
    // });
    return (
      <Swiper
        style={styles.wrapper}
        horizontal={false}
        showsPagination={false}
        loop={false}
        /* onIndexChanged={(index) => this.opacityAnime(index)} */
        index={1}
        ref='swiper'
        onScrollBeginDrag={() => this.opacityAnime()}
      >
        <View style={styles.container}>
          <Profil />
        </View>
        <View style={[styles.container]}>
          <View style={styles.containerSection}>
            <TouchableOpacity style= {styles.buttonProfil} onPress={() => this.refs.swiper.scrollBy(-1)}>

            </TouchableOpacity>
            <Text style= {styles.textPseudo} >
              CaroleZer
              </Text>
          </View>
          <TouchableOpacity style= {styles.buttonListe}>
            <Text style= {styles.textButtonJoin} >
              Mes scénarios
                    </Text>
          </TouchableOpacity>
          <View style={styles.containerSection}>
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
          <View>
            <TouchableOpacity style= {styles.buttonContact} onPress={() => this.refs.swiper.scrollBy(1)}>

            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container}>
          <Contact />
        </View>

      </Swiper>
    );
  }
}

const styles = {
  container: {
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
  buttonProfil: {
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
  },
  textPseudo: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    fontFamily: "ProximaNovaSoft-Regular",
  },
  buttonContact: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
    borderRadius: 100,
    opacity: 1,
    backgroundColor: 'rgb(248,194,28)',
    marginBottom: 33,
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
    shadowOpacity: 0.3,
    shadowRadius: 2,
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
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  buttonListe: {
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
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  textButtonCreate: {
    color: 'white',
    fontSize: 24,
    fontFamily: "ProximaNovaSoft-Regular",
  },
  textButtonJoin: {
    fontWeight: 'bold',
    color: '#95DDFB',
    fontSize: 24,
    fontFamily: "ProximaNovaSoft-Regular",
  },
}


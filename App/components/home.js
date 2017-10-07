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
import * as Animatable from 'react-native-animatable';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {scrollY: new Animated.Value(0), springValue: new Animated.Value (0.3) };
  }

  onSwipperOn(index) {
    console.log(" ---- swippe start", index)
  }
  opacityAnime(index) {
    console.log("index", index)
  }

  _onMomentumScrollEnd(e,state,context) {
    console.log("scroll finish")
  }

  handleScroll(event) {
    console.log("handel scroll")
    console.log(event.nativeEvent.contentOffset.y);
   }

  //  handleScrollDynamique(event) {
  //   console.log("handleScrollDynamique", event.nativeEvent.contentOffset.y);
  //   this.setState({margin: event.nativeEvent.contentOffset.y})
  //  }
   


  render() {

    // const imageTranslate = this.state.scrollY.interpolate({
    //   inputRange: [0, HEADER_SCROLL_DISTANCE],
    //   outputRange: [0, -50],
    //   extrapolate: 'clamp',
    // });

    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [100, StyleDimention.DEVICE_HEIGHT],
      extrapolate: 'clamp',
    });

    const imageOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 0.5, 0.2],
      extrapolate: 'clamp',
    });
    const imageTranslate = this.state.scrollY.interpolate({
      inputRange: [0, 500],
      outputRange: [100,500],
      extrapolate: 'clamp',
    });
    
    return (
      /* Global View */
      
        <Swiper
          style={[styles.wrapper]}
          horizontal={false}
          showsPagination={false}
          loop={false}
          onScroll={() => this.refs.test.transitionTo({marginTop: 500})}
          scrollEventThrottle={16}
          /* scrollResponderHandleTouchMove={this.handleScrollDynamique} */
          /* onIndexChanged={(index) => this.opacityAnime(index)} */
          index = {0}
          ref = 'swiper'
          onMomentumScrollEnd ={() => this._onMomentumScrollEnd()}
          onScrollBeginDrag={() => this.opacityAnime()}
        > 
          {/* Profil View */}
          {/* <View style={[styles.container]}> */}
            <Animatable.View style={[styles.container,{opacity: 1}]}>
                  {/* <Animated.Image
                style={[
                  styles.backgroundImage,
                  {transform: [{translateY: imageTranslate}]},
                ]}
                source={require('../images/chat.jpg')}
              /> */}
              <Animatable.View   ref= "test" delay={700} onAnimationEnd={{marginTop: 0}} style={[styles.container,{opacity: 1}]}>
                <TouchableOpacity  style= {[styles.buttonProfil, {position: 'absolute',  zIndex: 1}]} onPress={() => this.refs.swiper.scrollBy(-1)}>
                <View >
                  <Text style= {{color: this.state.colorText}} >
                        {this.state.margin}
                  </Text>
                </View>
              </TouchableOpacity>
              </Animatable.View >
            </Animatable.View>
          {/* </View> */}
            {/* <Profil /> */}
          
          {/* Home View */}
          <View style={styles.container}>
            <View style={[styles.containerSection] }>
            <TouchableOpacity style= {[styles.buttonProfil, {position: 'absolute',  zIndex: 1}]} onPress={() => this.refs.swiper.scrollBy(-1)}>
              <View >
                <Text style= {{color: this.state.colorText}} >
                      {this.state.margin}
                </Text>
              </View>
            </TouchableOpacity>
              <Text style= {styles.textPseudo} >
                {this.state.showText}
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
          {/* Contact View */}
          <View style={styles.container}>
            <Contact />
          </View>
        </Swiper>
    )
  }
}


const HEADER_MAX_HEIGHT = 500;
const HEADER_MIN_HEIGHT = 0;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const styles = {

  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: 50,
    borderRadius:100,
    resizeMode: 'cover',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#03A9F4',
    overflow: 'hidden',
  },

  // scrollViewContent: {
  //   marginTop: HEADER_MAX_HEIGHT,
  // },

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


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
import StyleDimention from '../../style/dimention';
import Profil from '../profile/profile';
import Contact from '../contact/contact';
import { connect } from 'react-redux';
import { _currentUser, } from '../home/homeThunk';

class Home extends Component {

  state = {
    progress: new Animated.Value(0),  // Initial value for opacity: 0
  }


  animeImage(){
    
  }
  


  componentDidMount() {
    console.log(" ------------ in home willMount view ----------------")
    this.props._currentUser();
    Animated.timing(
      this.state.progress, {toValue: 1, duration: 10000}
    ).start();
    const rotate =  this.state.progress.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });
    const styleRotate = { transform: [{ rotate }]};
  }
  buttonTopProfil(){
    if(this.props.user != null){
      return(
      <Text style= {styles.textPseudo} >
        {this.props.user.name}
      </Text>
      )
    }else{
      return(
      <Text style= {styles.textPseudo} >
      </Text>
      )
    }
  }

  PictureTopProfil(){
    const progress = new Animated.Value(0);
    Animated.timing(
      this.state.progress, {toValue: 1, duration: 1000}
    ).start();
    const rotate = this.state.progress.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
   });
   const style = { transform: [{ rotate }]};
    if(this.props.user != null){
      return(
        <Animated.View style={ style }>
          <Image style={[styles.photoStyle]} source={{uri: this.props.user.picture.data.data.url}} />
        </Animated.View>
      )
    }else{
      return(
        null
      )
    }
  }
  render() {

    return (
      <Swiper
        style={styles.wrapper}
        horizontal={false}
        showsPagination={false}
        loop={false}
        index={1}
        ref='swiper'
      >
      <View style={[styles.mainContainer]}>
         {this.PictureTopProfil()}
         {this.buttonTopProfil()}
        <Swiper
          style={styles.wrapper}
          horizontal={false}
          showsPagination={false}
          loop={false}
          index={1}
          ref='swiper'
        >
          <View style={[styles.containerProfile]}>
            <Profil user={this.props.user}/>
            {/* <TouchableOpacity style= {styles.buttonProfile} onPress={() => this.refs.swiper.scrollBy(1)} /> */}
          </View>
          <View style={[styles.containerHome]}>
            <StatusBar
              backgroundColor="transparent"
              barStyle="light-content"
            />
            <View style={styles.containerSection}>
              <TouchableOpacity style= {styles.buttonCreate}>
                <Text style= {styles.textButtonCreate} >
                  Creer
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style= {styles.buttonJoin}>
                <Text style= {styles.textButtonJoin} >
                  Mes scénarios
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style= {styles.buttonContact} onPress={() => this.refs.swiper.scrollBy(1)}>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.containerContact}>
            <Contact />
          </View>
        </Swiper>
      </View>
      <View style={[styles.mainContainer]}>
         {this.PictureTopProfil()}
         {this.buttonTopProfil()}
        <Swiper
          style={styles.wrapper}
          horizontal={false}
          showsPagination={false}
          loop={false}
          index={1}
          ref='swiper'
        >
          <View style={[styles.containerProfile]}>
            <Profil user={this.props.user}/>
            {/* <TouchableOpacity style= {styles.buttonProfile} onPress={() => this.refs.swiper.scrollBy(1)} /> */}
          </View>
          <View style={[styles.containerHome]}>
            <StatusBar
              backgroundColor="transparent"
              barStyle="light-content"
            />
            <View style={styles.containerSection}>
              <TouchableOpacity style= {styles.buttonCreate}>
                <Text style= {styles.textButtonCreate} >
                  Creer
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style= {styles.buttonJoin}>
                <Text style= {styles.textButtonJoin} >
                  Mes scénarios
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style= {styles.buttonContact} onPress={() => this.refs.swiper.scrollBy(1)}>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.containerContact}>
            <Contact />
          </View>
        </Swiper>
      </View>
      </Swiper>
    );
  }
}
const mapStateToProps = (state, props) => {
  console.log("------------ in home mapStateToProps view ------------", state.profileReducer ,props);
  const  user  = state.profileReducer
  return(
    user
  )
}
export default connect(mapStateToProps, { _currentUser})(Home)

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

  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },
  photoStyle: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'white',
    marginTop: 30,
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
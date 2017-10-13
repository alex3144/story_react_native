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
import Message from '../messagerie/messagerie'
import { connect } from 'react-redux';
import { _currentUser, } from '../home/homeThunk';

class Home extends Component {

  componentWillMount() {
    console.log(" ------------ in home willMount view ----------------")
    // this.props._currentUser();
    // Animated.timing(
    //   this.state.progress, {toValue: 1, duration: 10000}
    // ).start();
    // const rotate =  this.state.progress.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: ['0deg', '360deg']
    // });
    // const styleRotate = { transform: [{ rotate }]};
  }
  render() {

    return (

      <View style={styles.container}>
        <View style={styles.containerNavBar}>
          <View style={styles.buttonNavBar}>
            <TouchableOpacity onPress={() => Actions.profile()}>
              <Text>
                Profile
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonNavBar}>
            <TouchableOpacity onPress={() => Actions.messagerie()}>
              <Text>
                Message
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.containerCard}>

        </View>
        <View style={styles.containerButton}>

        </View>
      </View>
    );
  }
}
const mapStateToProps = (state, props) => {
  console.log("------------ in home mapStateToProps view ------------", state.profileReducer, props);
  const user = state.profileReducer
  return (
    user
  )
}
export default connect(mapStateToProps, { _currentUser })(Home);

const HEADER_MAX_HEIGHT = 500;
const HEADER_MIN_HEIGHT = 0;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const styles = {
  //main layout container
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
  //--------------------------------
  //navBarStyle
  containerNavBar: {
    width:StyleDimention.DEVICE_WIDTH,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonNavBar:{
    marginLeft: 20,
    marginRight: 20,
  },
  //--------------------------------
  //cardStyle
  containerCard: {

  },
  //--------------------------------
  //button Like and Dislike style
  containerButton: {

  },

  //--------------------------------

}

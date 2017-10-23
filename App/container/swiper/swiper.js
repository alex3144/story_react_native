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
import ProfilCurrent from '../profileCurrent/profileCurrent';
import Home from '../home/home';
import Messagerie from '../messagerie/messagerie'
import SwipeCards from 'react-native-swipe-cards';
import { connect } from 'react-redux';
import { _currentUser, } from '../home/homeThunk';


class Swipper extends Component {
  constructor() {
    super()
    this.state = {
      isEnable: false,
      index
    }
  }
  componentWillMount() {
    // console.log(" ------------ in swipper willMount view ----------------")
    this.props._currentUser();
  }

  disableSwipe(index) {
    if (this.refs.swiper) {
      if (index == 1) {
        this.setState({ isEnable: false });
      }
      else {
        this.setState({ isEnable: true });
      }
    }
  }

  componentWillReceiveProps(props, nextProps) {
  }


  render() {
    return (
      <Swiper
        horizontal={true}
        showsPagination={false}
        loop={false}
        index={this.state.index}
        scrollEnabled={this.state.isEnable}
        onMomentumScrollEnd={(e, state, context) => this.disableSwipe(state.index)}
        ref='swiper'>

        <View style={styles.container}>
          <View style={styles.containerNavBar}>
            <View style={styles.componentNavBar}>
              <View style={styles.buttonNavBar}>
                <TouchableOpacity>
                  <Text style={styles.textNavbar}>
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.componentNavBar}>
              <View>
                <Text style={styles.titleText}>
                  PROFIL
                </Text>
              </View>
            </View>
            <View style={styles.componentNavBar}>
              <TouchableOpacity onPress={() => this.refs.swiper.scrollBy(1)}>
                <Text style={styles.textNavbar}>
                  Home
                  </Text>
              </TouchableOpacity>
            </View>
          </View>

          <ProfilCurrent user={this.props.user} />
        </View>






        <View style={styles.container}>
          <View style={styles.containerNavBar}>
            <View style={styles.componentNavBar}>
              <TouchableOpacity onPress={() => this.refs.swiper.scrollBy(-1)}>
                <Text style={styles.textNavbar}>
                  Profile
                  </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.componentNavBar}>
              <View>
                <Text style={styles.titleText}>
                  HOME
              </Text>
              </View>
            </View>
            <View style={styles.componentNavBar}>
              <TouchableOpacity onPress={() => this.refs.swiper.scrollBy(1)}>
                <Text style={styles.textNavbar}>
                  Message
                  </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Home user={this.props.user} />
        </View>





        <View style={styles.container}>
          <View style={styles.containerNavBar}>
            <View style={styles.componentNavBar}>
              <TouchableOpacity onPress={() => this.refs.swiper.scrollBy(-1)}>
                <Text style={styles.textNavbar}>
                  Home
                  </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.componentNavBar}>
              <View >
                <Text style={styles.titleText}>
                  MESSAGE
                </Text>
              </View>
            </View>
            <View style={styles.componentNavBar}>
              <View >
              </View>
            </View>
          </View>
          <Messagerie user={this.props.user} />
        </View>

      </Swiper>
    );
  }
}
const mapStateToProps = (state, props) => {
  // console.log("------------ in home mapStateToProps view ------------", state.homeReducer, props);
  const user = state.homeReducer
  return (
    user
  )
}
export default connect(mapStateToProps, { _currentUser })(Swipper);

const HEADER_MAX_HEIGHT = 500;
const HEADER_MIN_HEIGHT = 0;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const styles = {
  //main layout container
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',// 'rgb(54,54,54)'
    width: StyleDimention.DEVICE_WIDTH,
    height: StyleDimention.DEVICE_HEIGHT,
    padding: StyleDimention.CARD_PADDING_X,
    paddingTop: StyleDimention.CARD_PADDING_Y,
    paddingBottom: StyleDimention.CARD_PADDING_Y,
  },
  //--------------------------------
  //navBarStyle
  containerNavBar: {
    width: StyleDimention.DEVICE_WIDTH,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  componentNavBar: {
    width: StyleDimention.DEVICE_WIDTH / 3,
    alignItems: 'center',
    justifyContent: 'center',

  },
  textNavbar: {
    color: 'black',
    fontSize: 16,
  },
  titleText: {
    color: 'black',
    fontSize: 18,
  },
  //--------------------------------

}

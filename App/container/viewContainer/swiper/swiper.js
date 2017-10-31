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
import StyleDimention from '../../../style/dimention';
import ProfilCurrent from '../profileCurrent/profileCurrent';
import Home from '../home/home';
import Messagerie from '../messagerie/messagerie'
import SwipeCards from 'react-native-swipe-cards';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
//---------------
import profileWhite from '../../../asset/images/profileWhite.png';
import cardWhite from '../../../asset/images/cardWhite.png';
import messageWhite from '../../../asset/images/messageWhite.png';
import profileBlack from '../../../asset/images/profileBlack.png';
import cardBlack from '../../../asset/images/cardBlack.png';
import messageBlack from '../../../asset/images/messageBlack.png';
//---------------
import { connect } from 'react-redux';
import { _currentUser, _match } from '../../technicalContainer/user/userThunk';


export default
  class Swipper extends Component {

  state = {
    index: 1,
    routes: [
      { key: '1' },
      { key: '2' },
      { key: '3' },
    ],
    isEnable: false,
    bg: 'black',
    icon: [profileWhite, cardWhite, messageWhite]
  }
  renderIcon() {
    if (this.state.index == 0) {
      return (icon = [profileBlack, cardBlack, messageBlack]
      )
    }
    if (this.state.index == 1) {
      return (icon = [
        profileWhite, cardWhite, messageWhite]
      )
    }
    if (this.state.index == 2) {
      return (icon = [
        profileBlack, cardBlack, messageBlack]
      )
    }
  }

  _renderIcon = ({ route }) => {
    switch (route.key) {
      case '1':
        return <Image style={{ marginTop: 20, width: 40, height: 40 }} source={this.state.icon[0]} />
      case '2':
        return <Image style={{ marginTop: 20, width: 40, height: 40 }} source={this.state.icon[1]} />
      case '3':
        return <Image style={{ marginTop: 20, width: 40, height: 40 }} source={this.state.icon[2]} />
      default:
        return null;
    }
  }

  _renderScene = ({ route }) => {
    switch (route.key) {
      case '1':
        return <ProfilCurrent />;
      case '2':
        return <Home />;
      case '3':
        return <Messagerie />;
      default:
        return null;
    }
  };

  _handleIndexChange(index) {
    if (index == 1) {
      this.setState({ isEnable: false, index, icon: [profileWhite, cardWhite, messageWhite] })
      console.log(this.state.isEnable)
    } else {
      this.setState({ isEnable: true, index, icon: [profileBlack, cardBlack, messageBlack] })
      console.log(this.state.isEnable)
    }
  }
  renderStyleFooter = props => {
    if (this.state.index == 0) {
      return (
        [styles.tabBar, { backgroundColor: 'white' }]
      )
    }
    if (this.state.index == 1) {
      return (
        [styles.tabBar, { backgroundColor: 'rgb(248,194,28)' }]
      )

    }
    if (this.state.index == 2) {
      return (
        [styles.tabBar, { backgroundColor: 'rgba(255,255,255,1)' }]
      )
    }
  }

  _renderFooter = props =>
    <TabBar
      {...props}
      renderIcon={this._renderIcon}
      style={[styles.tabBar, this.renderStyleFooter()]}
    />;

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderFooter={this._renderFooter}
        onIndexChange={(index) => this._handleIndexChange(index)}
        swipeEnabled={this.state.isEnable}

      />
    );
  }
}

// const mapStateToProps = (state) => {
//   console.log("------------ in swiper mapStateToProps view ------------", state.userReducer);
//   const { user, match } = state.userReducer
//   return {
//     user,
//     match
//   }
// }
// export default connect(mapStateToProps, { _currentUser, _match })(Swipper);

const styles = {
  //main layout container
  container: {
    flex: 1,
  },
  //main layout container
  containerHome: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    width: StyleDimention.DEVICE_WIDTH,
    height: StyleDimention.DEVICE_HEIGHT,
    padding: StyleDimention.CARD_PADDING_X,
    paddingTop: StyleDimention.CARD_PADDING_Y,
    paddingBottom: StyleDimention.CARD_PADDING_Y,
  },
  swiper: {
    flex: 1,
    width: StyleDimention.DEVICE_WIDTH,
    height: StyleDimention.DEVICE_HEIGHT,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  containerFooterNav: {
    zIndex: 10,
    alignItems: 'center',
    width: StyleDimention.DEVICE_WIDTH,
    overflow: 'hidden', // for hide the not important parts from circle
    height: 120,
    backgroundColor: 'transparent'
  },
  //-------------------------------------------------
  tabBar: {
    height: 100,
    borderColor: 'white',
    borderWidth: 1,
    width: StyleDimention.DEVICE_WIDTH + 2,
    marginBottom: -1,
    marginLeft: -1
  },

  backgroundFooternav: {
    borderRadius: 1500, // border borderRadius same as width and height
    width: 1500,
    height: 1500,
    top: 0, // show the bottom part of circle
    overflow: 'hidden', // hide not important part of image
    backgroundColor: 'rgb(248,194,28)',
  },
  containerFooterTextNav: {
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  textFooterNav: {
    color: 'black',
    fontSize: 16,
  },
}

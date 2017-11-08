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
  constructor(props) {
    super(props)
    this.state = {
      index: this.props.index,
      routes: [
        { key: '1' },
        { key: '2' },
        { key: '3' },
      ],
      isEnable: this.props.isEnable,
      // icon: [profileWhite, cardWhite, messageWhite]
    }
  }


  _renderIcon = ({ route }) => {
    if (this.state.index == 2) {
      switch (route.key) {
        case '1':
          return <Image style={styles.iconStyle} source={profileBlack} />
        case '2':
          return <Image style={styles.iconStyle} source={cardBlack} />
        case '3':
          return <Image style={styles.iconStyle} source={messageBlack} />
        default:
          return null;
      }
    } else {
      switch (route.key) {
        case '1':
          return <Image style={styles.iconStyle} source={profileWhite} />
        case '2':
          return <Image style={styles.iconStyle} source={cardWhite} />
        case '3':
          return <Image style={styles.iconStyle} source={messageWhite} />
        default:
          return null;
      }
    }
  }

  _renderScene = ({ route }) => {
    switch (route.key) {
      case '1':
        return<ProfilCurrent />
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
        [styles.tabBar, { backgroundColor: 'rgba(63,63,63,1)' }]
      )
    }
    if (this.state.index == 1) {
      return (
        [styles.tabBar, { backgroundColor: 'rgba(248,194,28,1)' }]
      )

    }
    if (this.state.index == 2) {
      return (
        [styles.tabBar, { backgroundColor: 'rgba(255,255,255,0.8)' }]
      )
    }
  }

  _renderFooter = props =>
    <TabBar
      {...props}
      renderIcon={this._renderIcon}
      style={this.renderStyleFooter()}
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

const styles = {
  //main layout container
  container: {
    flex: 1,
  },
  //-------------------------------------------------
  tabBar: {
    height: StyleDimention.DEVICE_HEIGHT * 15 / 100,
    position: 'absolute',
    bottom: -1,
    width: StyleDimention.DEVICE_WIDTH + 4,
    marginBottom: -2,
    marginLeft: -2
  },
  iconStyle: {
    marginTop: 10,
    width: 40,
    height: 40
  }
}

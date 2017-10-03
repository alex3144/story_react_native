import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import { _currentUser, } from '../actionAsync/profile/profile';
import StyleDimention from '../style/dimention';


class Profile extends Component {
  componentDidMount() {
    this.props._currentUser();
  this
  }
  
  render() {
    if(this.props.user != null){
      return (
        <View style={styles.container}>
          <Text style={styles.textStyle}>
            {this.props.user.nickname}
            {this.props.user.name}
          </Text>
        </View>
      )
    }else{
      return (
        <View style={styles.container}>
        <Text style={styles.textStyle}>
        </Text>
      </View>
      )
    }
  }
}
const mapStateToProps = (state) => {
  console.log("in profile view", state.profileReducer)
  const {user} = state.profileReducer
  return {
    user
  }
}
export default connect(mapStateToProps, { _currentUser })(Profile)

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(54,54,54)',
    width: StyleDimention.DEVICE_WIDTH,
    height: StyleDimention.DEVICE_HEIGHT,
    padding: StyleDimention.CARD_PADDING_X,
    paddingTop: StyleDimention.CARD_PADDING_Y,
    paddingBottom: StyleDimention.CARD_PADDING_Y,
  },
  textStyle: {
    fontFamily: "TypoGraphica",
    fontSize: 25,
    color: 'white'
  }

};

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  ScrollView,
  Image,
  StatusBar,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import StyleDimention from '../../style/dimention';
import fb from '../../asset/images/fb.png'
import roulette from '../../asset/images/roulette.png'
import modif from '../../asset/images/crayon.png'



export default class ProfileCurent extends Component {
  render() {
    if (this.props.user != null) {
      return (
          <View style={styles.container}>

            <View style={styles.containerTop}>
              <View style={styles.containerMainPhoto}>
                <Image style={styles.mainPhotoStyle} source={[{ uri: this.props.user.picture[0].source }]} />
              </View>
              <View style={styles.containerMainDescritpion}>
                <Text style={styles.textStyle}>
                  {this.props.user.firstName},  {this.props.user.age}
                </Text>
              </View>
              <View style={styles.containerMainDescritpion}>
                <Text style={styles.textStyle}>
                  {this.props.user.bio}
                </Text>
              </View>
              <View style={styles.containerMainDescritpion}>
                <Text style={styles.textStyle}>
                  {this.props.user.work}
                </Text>
              </View>

            </View>

            <View style={styles.containerBottom}>
              <View style={styles.rowBottom}>
                <View style={styles.containerIconStyle}>
                  <TouchableOpacity onPress={() => Actions.profileCurentModif()}>
                    <Image style={styles.iconStyle} source={modif} />
                  </TouchableOpacity>
                </View>
                <View style={styles.containerIconStyle}>
                  <TouchableOpacity onPress={() => Actions.parameters()}>
                    <Image style={[styles.iconStyle, { marginLeft: 2 }]} source={roulette} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View >

      )
    } else {
      return (
        <View style={styles.container}>
          <View>
          </View>
          <View>
            <Text style={styles.textStyle}>
              else
            </Text>
          </View>
        </View>
      )
    }
  }
}

const styles = {
  //general style
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    width: StyleDimention.DEVICE_WIDTH,
    height: StyleDimention.DEVICE_HEIGHT,
  },
  containerTop: {
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: StyleDimention.DEVICE_WIDTH - 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  containerBottom: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: StyleDimention.DEVICE_WIDTH,
    height: 120,
  },

  navBarStyle: {
    paddingTop: 18,
    paddingBottom: 0,

  },
  //--------------------------------
  //profile picture style
  containerMainPhoto: {
    marginTop: 20,
    alignItems: 'center',
  },
  containerSecondaryPhoto: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
    width: StyleDimention.DEVICE_WIDTH - 60,
  },
  mainPhotoStyle: {
    height: 160,
    width: 160,
    borderRadius: 80,
    marginBottom: 15,
  },
  //--------------------------------
  //description style
  textStyle: {
    fontSize: 24,
    fontFamily: "ProximaNovaSoft-Bold",
    paddingTop: 5,
    color: 'black',
    marginTop: 20,
    marginBottom: 20,
  },
  containerMainDescritpion: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  //--------------------------------
  //icon style
  containerIconStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: 'black',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  iconStyle: {
    height: 40,
    width: 40,
  },
  rowBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 200,
    marginTop: 20,
  },

};

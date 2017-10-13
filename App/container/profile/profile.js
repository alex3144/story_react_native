import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  ScrollView,
  Image,
  StatusBar
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import StyleDimention from '../../style/dimention';
import roulette from '../../asset/images/roulette.png';
import ninja from '../../asset/images/ninja.png';
import stylo from '../../asset/images/crayon.png';
import level from '../../asset/images/level.png';
import fb from '../../asset/images/fb.png';
import insta from '../../asset/images/insta.png';



export default class Profile extends Component {
  // componentDidMount() {
  //   this.props._currentUser();
  //   console.log(" ------------ in profile willMount view ----------------")
  // }
  renderTextPoint() {
    if (this.props.user.level.level.point == 0) {
      return (
        <Text style={styles.pointTextStyle}>
          {this.props.user.level.level.point} point
        </Text>
      )
    } else {
      return (
        <Text style={styles.pointTextStyle}>
          {this.props.user.level.level.point} points
        </Text>
      )
    }
  }

  render() {
    if (this.props.user != null) {
      return (
        <View style={styles.container}>

          <View style={styles.navBarStyle}>
            <TouchableOpacity onPress={() => Actions.parameters(this.props.user)}>
              <Image style={styles.imageRoulette} source={roulette} />
            </TouchableOpacity>
          </View>


          <View style={styles.containerSection}>
            <View>
              <TouchableOpacity onPress={() => Actions.photo(this.props.user)}>
                <View style={styles.borderContainerStylo}>
                  <View style={styles.innerContainerStylo}>
                    <Image style={styles.imageStylo} source={stylo} />
                  </View>
                </View>
                <Image style={styles.photoStyle} source={{uri: this.props.user.picture.data.data.url}} />
              </TouchableOpacity>
              <Image style={styles.imageNinja} source={ninja} />
            </View>
            <Text style={styles.textStyle}>
              {this.props.user.nickname}
            </Text>
            <TouchableOpacity style={styles.buttonPoint} onPress={() => Actions.level()}>
              <Image style={styles.imageCoupe} source={level} />
              {this.renderTextPoint()}
            </TouchableOpacity>
          </View>


          <View style={styles.containerSocial}>
            <Image style={styles.imageFb} source={fb} />
            <Text style={styles.textFbStyle}>
              {this.props.user.name}
            </Text>
          </View>
        </View>
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
// const mapStateToProps = (state) => {
//   console.log(" ------------ in profile mapStateToProps view ----------------", state.profileReducer)
//   const { user } = state.profileReducer
//   return {
//     user
//   }
// }
// export default connect(mapStateToProps, { _currentUser })(Profile)

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',//'rgb(54,54,54)',
    width: StyleDimention.DEVICE_WIDTH,
    height: StyleDimention.DEVICE_HEIGHT,
    padding: StyleDimention.CARD_PADDING_X,
    paddingTop: StyleDimention.CARD_PADDING_Y,
    paddingBottom: StyleDimention.CARD_PADDING_Y,
  },
  containerSection: {
    marginTop: -55,
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 24,
    fontFamily: "ProximaNovaSoft-Bold",
    paddingTop: 5,
    color: 'white',
    marginTop: 20,
    marginBottom: 20,
  },
  navBarStyle: {
    paddingTop: 18,
    paddingBottom: 0,

  },



  //profile picture style
  photoStyle: {
    height: 160,
    width: 160,
    borderRadius: 80,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 15,
  },
  //--------------------------------
  //style picture stylo
  borderContainerStylo: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    width: 34,
    height: 34,
    position: 'absolute',
    borderWidth: 5,
    borderColor: 'rgb(54,54,54)',
    borderRadius: 20,
    marginLeft: 120,
  },
  innerContainerStylo: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 28,
    height: 28,
    backgroundColor: 'rgb(248,194,28)',
    borderRadius: 20,
  },
  imageStylo: {
    width: 18,
    height: 17,
  },
  //--------------------------------
  // style point
  pointTextStyle: {
    color: 'rgb(248,194,28)',
    fontSize: 20,
    fontFamily: "ProximaNovaSoft-Semibold",
    marginLeft: 15,
    marginTop: 12,
  },
  imageCoupe: {
    width: 24,
    height: 21,
  },
  buttonPoint: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgb(248,194,28)',
    width: 166,
    height: 46,
    borderRadius: 30,
    paddingBottom: 5,
  },
  //--------------------------------
  // style botton social linklink 
  textFbStyle: {
    color: 'white',
    fontSize: 20,
    fontFamily: "ProximaNovaSoft-Semibold",
    marginTop: 8
  },
  containerSocial: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  imageFb: {
    width: 42,
    height: 31,
  },
  //--------------------------------
  // style pictures
  imageNinja: {
    width: 57,
    height: 57,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    position: 'absolute',
    marginLeft: 90,
    marginTop: 130,
  },
  imageRoulette: {
    width: 28,
    height: 28,
    marginLeft: 300,
  },

  imageInsta: {
    width: 26,
    height: 26,
  },

  //--------------------------------
  buttonStyle: {
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }

};

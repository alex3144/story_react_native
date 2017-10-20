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
import fb from '../../asset/images/fb.png'



export default class Profile extends Component {
  // componentDidMount() {
  //   this.props._currentUser();
  //   console.log(" ------------ in profile willMount view ----------------")
  // }

  render() {
    if (this.props.user != null) {
      console.log(this.props.user)
      return (
        <View style={styles.container}>

          <View style={styles.navBarStyle}>
            <TouchableOpacity onPress={() => Actions.parameters(this.props.user)}>
              <Text> Parametre </Text>
            </TouchableOpacity>
          </View>


          <View style={styles.containerMain}>
            <View>
              <TouchableOpacity onPress={() => Actions.photo(this.props.user)}>
                <Image style={styles.photoStyle} source={[{uri: this.props.user.picture[0].source}]} />
              </TouchableOpacity>
            </View>
          </View>


          <View style={styles.containerMain}>
            <Text style={styles.textStyle}>
              { this.props.user.firstName },  { this.props.user.age }
            </Text>
          </View>
          <View style={styles.containerMain}>
            <Text style={styles.textStyle}>
              { this.props.user.bio }
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
  containerMain: {
    marginTop: -55,
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 24,
    fontFamily: "ProximaNovaSoft-Bold",
    paddingTop: 5,
    color: 'black',
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
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
  },
  //--------------------------------
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
    borderRadius: 100,
    opacity: 1,
    backgroundColor: 'black',
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

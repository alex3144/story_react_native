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
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { _currentUser } from '../../technicalContainer/user/userThunk';
import StyleDimention from '../../../style/dimention';
import fb from '../../../asset/images/fb.png'
import roulette from '../../../asset/images/roulette.png'
import modif from '../../../asset/images/crayon.png'



class ProfileCurent extends Component {
  componentWillMount() {
    this.props._currentUser()
    // this.props._getParameters()
  }


  render() {
    if (this.props.user != null) {
      return (
        <View style={styles.container}>
          <StatusBar barStyle="dark-content" />
          <View style={styles.buttonParameters}>
            <TouchableOpacity onPress={() => Actions.parameters(this.props.parameters)}>
              <Image style={[styles.iconParameters, { marginLeft: 2 }]} source={roulette} />
            </TouchableOpacity>
          </View>
          <Image style={styles.profilePhoto} source={[{ uri: this.props.user.pictures[0].source }]} />
          <Text style={styles.textStyle}>
            {this.props.user.firstName}
          </Text>

          <View style={styles.containerBottom}>

            <TouchableOpacity style={styles.buttonModification} onPress={() => Actions.profileCurentModif()}>
              <Image style={styles.iconModification} source={modif} />
              <Text style={styles.textButtonModif}>Modifier</Text>
            </TouchableOpacity>
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
const mapStateToProps = (state) => {
  console.log("-=-=-=-=-= in current mapStateToProps", state.userReducer);
  const { user } = state.userReducer
  return {
    user
  }
}
export default connect(mapStateToProps, { _currentUser })(ProfileCurent);

const heightNav = StyleDimention.DEVICE_HEIGHT * 15 / 100;
const styles = {
  //general style
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(63,63,63,1)',
    width: StyleDimention.DEVICE_WIDTH,
    height: StyleDimention.DEVICE_HEIGHT,
    marginBottom: heightNav - 4
  },
  containerTop: {
    width: StyleDimention.DEVICE_WIDTH + 4,
    height: 150,
    alignItems: 'center',
    backgroundColor: 'rgba(220,220,220,1)',
    borderColor: 'rgb(248,194,28)',
    borderWidth: 2,
    marginTop: -2
  },
  containerBottom: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30
  },
  profilePhoto: {
    height: 170,
    width: 170,
    borderRadius: 85,
    borderWidth: 4,
    borderColor: 'white'
  },
  textStyle: {
    fontSize: 24,
    fontFamily: "ProximaNovaSoft-Bold",
    color: 'white',
    backgroundColor: 'transparent',
  },
  buttonParameters: {
    marginLeft: StyleDimention.DEVICE_WIDTH - 100,
    marginTop: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonModification: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'rgb(248,194,28)',
    width: 208,
    height: 53,
    borderRadius: 30,
  },
  textButtonModif: {
    color: 'rgb(248,194,28)',
    fontFamily: "ProximaNovaSoft-Semibold",
    fontSize: 20,
    marginTop: 5,
    marginLeft: 8
  },
  iconParameters: {
    height: 30,
    width: 30,
  },
  iconModification: {
    height: 20,
    width: 20,
  },

};

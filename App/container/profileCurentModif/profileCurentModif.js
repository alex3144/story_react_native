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
  TextInput,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { _currentUser } from '../home/homeThunk';
import { _setUser } from './profileCurentModifThunk';
import { connect } from 'react-redux';
import StyleDimention from '../../style/dimention';
import fb from '../../asset/images/fb.png';
import roulette from '../../asset/images/roulette.png';
import modif from '../../asset/images/crayon.png';



class ProfileCurentModif extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: this.props.user.bio,
      work: this.props.user.work
    };
  }
  componentDidMount() {
    this.props._currentUser();
  }

  render() {
    const { _setBioUser } = this.props;
    if (this.props.user != null) {
      console.log(this.props.user)
      return (
        <View style={styles.container}>

          <View style={styles.containerHead}>
            <View style={styles.containerMainPhoto}>
              <Image style={styles.mainPhotoStyle} source={[{ uri: this.props.user.picture[0].source }]} />
            </View>
            <View style={styles.containerSecondaryPhoto}>
              <Image style={styles.secondaryPhotoStyle} source={[{ uri: this.props.user.picture[1].source }]} />
              <Image style={styles.secondaryPhotoStyle} source={[{ uri: this.props.user.picture[2].source }]} />
            </View>
            <View style={styles.containerMainDescritpion}>
              <Text style={styles.textStyle}>
                {this.props.user.firstName},  {this.props.user.age}
              </Text>
            </View>
            <View style={styles.containerTextInputs}>
              <TextInput
                style={styles.containerBio}
                onChangeText={(bio) => this.setState({ bio })}
                value={this.state.bio}
                multiline={true}
                maxLength={140}
                autoCorrect={true}
              />
              <TextInput
                style={styles.containerWork}
                onChangeText={(work) => this.setState({ work })}
                value={this.state.work}
                multiline={true}
                maxLength={30}
                autoCorrect={true}
              />

              <TouchableOpacity style={styles.buttonConnexion} onPress={() => { this.props._setUser(this.props.user, this.state.bio, this.state.work) }}>
                <Text style={styles.textConnexion}>
                  Save
                </Text>
              </TouchableOpacity>
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
const mapStateToProps = (state) => {
  //    console.log("---------------in profile map state to props view ----------------", state.homeReducer)
  const { user } = state.homeReducer
  return {
    user
  }
}
export default connect(mapStateToProps, { _currentUser, _setUser })(ProfileCurentModif);
const styles = {
  //general style
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    marginTop: 30,
    width: StyleDimention.DEVICE_WIDTH,
    height: StyleDimention.DEVICE_HEIGHT,
  },
  containerHead: {
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: StyleDimention.DEVICE_WIDTH - 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  navBarStyle: {
    paddingTop: 18,
    paddingBottom: 0,

  },
  //--------------------------------
  //profile picture style
  containerMainPhoto: {
    marginTop: 5,
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
  containerTextInputs: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerBio: {
    width: StyleDimention.DEVICE_WIDTH - 40,
    height: 120,
    borderColor: 'gray',
    borderWidth: 1
  },
  containerWork: {
    width: StyleDimention.DEVICE_WIDTH - 40,
    height: 30,
    borderColor: 'gray',
    borderWidth: 1
  },
  //--------------------------------
  //button style
  buttonConnexion: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    width: 208,
    height: 53,
    borderRadius: 30,
    marginTop: 30,
    marginBottom: 10,
  },
  textConnexion: {
    color: 'black',
    fontFamily: "ProximaNovaSoft-Regular",
    fontSize: 16,
  },
  //--------------------------------
};

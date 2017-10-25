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
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { _currentUser } from '../../technicalContainer/user/userThunk';
import { _setUser } from './profileCurentModifThunk';
import { connect } from 'react-redux';
import StyleDimention from '../../../style/dimention';
import fb from '../../../asset/images/fb.png';
import roulette from '../../../asset/images/roulette.png';
import modif from '../../../asset/images/crayon.png';
import ImagePicker from 'react-native-image-picker';
import {_setPhoto} from './profileCurentModifAction'

const options = {
  mediaType:'photo',
  title: 'Select Avatar',
  customButtons: [
    {name: 'fb', title: 'Choose Photo from Facebook'},
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

class ProfileCurentModif extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: this.props.user.bio,
      work: this.props.user.work,
    };
  }
  // componentWillMount() {
  //   this.props._currentUser();
  // }

  setPhoto = function (index, picture, options) {
      ImagePicker.showImagePicker(options, (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        }
        else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        }
        else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        }
        else {
          console.log('------------------- response done ------------------')
          let source = { uri: response.uri };
        }
      });
  }

  renderPhoto(index) {
    if (index == 0) {
      if (this.props.user.picture[index] == null) {
        return (
          <View style={styles.shadowPrimary}>
            <TouchableOpacity onPress={()=>{this.setPhoto(index, this.props.user.picture[index].source, options)}}>
              <Image style={[styles.primaryPhoto, { backgroundColor: 'grey' }]} />
            </TouchableOpacity>
          </View>
        )
      } else {
        return (
          <View style={styles.shadowPrimary}>
            <TouchableOpacity onPress={()=>{this.setPhoto(index, this.props.user.picture[index].source, options)}}>
              <Image style={styles.primaryPhoto} source={{uri:this.props.user.picture[index].source}} />
            </TouchableOpacity>
          </View>
        )
      }
    } else {
      if (this.props.user.picture[index] == null) {
        return (
          <View style={styles.shadowSecondary}>
            <TouchableOpacity onPress={()=>{this.setPhoto(index, this.props.user.picture, options)}}>
              <Image style={[styles.secondaryPhoto, { backgroundColor: 'grey' }]} />
            </TouchableOpacity>
          </View>
        )

      } else {
        return (
          <View style={styles.shadowSecondary}>
            <TouchableOpacity onPress={()=>{this.setPhoto(index, this.props.user.picture, options)}}>
              <Image style={styles.secondaryPhoto}  source={{ uri: this.props.user.picture[index].source }} />
            </TouchableOpacity>
          </View>
        )
      }
    }
  }

  render() {
    const { _setBioUser } = this.props;
    if (this.props.user != null) {
      console.log(this.props.user)
      return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>

            <View style={styles.mainContainerPhoto}>
              <View style={styles.containerPrimaryPhoto}>
                {this.renderPhoto(0)}
              </View>
              <View style={styles.containerSecondaryPhoto}>
                {this.renderPhoto(1)}
                {this.renderPhoto(2)}
              </View>
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

          </View >
        </TouchableWithoutFeedback>
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
  console.log("---------------in profile map state to props view ----------------", state)
  const { user } = state.userReducer
  return {
    user
  }
}

export default connect(mapStateToProps, { _currentUser, _setUser, _setPhoto})(ProfileCurentModif);
const styles = {
  //general style
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    width: StyleDimention.DEVICE_WIDTH,
    height: StyleDimention.DEVICE_HEIGHT,
  },
  navBarStyle: {
    paddingTop: 18,
    paddingBottom: 0,
  },
  //--------------------------------
  //profile picture style
  mainContainerPhoto: {
    justifyContent: 'space-between',
    width: StyleDimention.DEVICE_WIDTH - 60,
    height: 230,
    flexDirection: 'row',
    marginTop:30
  },
  containerPrimaryPhoto: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerSecondaryPhoto: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: 20
  },
  primaryPhoto: {
    height: 190,
    width: 190,
    borderRadius: 8,
  },
  secondaryPhoto: {
    height: 80,
    width: 80,
    borderRadius: 4,
  },
  shadowPrimary: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    height: 190,
    width: 190,
    borderRadius: 8,
  },
  shadowSecondary: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    height: 80,
    width: 80,
    borderRadius: 4,
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

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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { Actions } from 'react-native-router-flux';
import { _currentUser } from '../../technicalContainer/user/userThunk';
import { _setUser } from './profileCurentModifThunk';
import { connect } from 'react-redux';
import StyleDimention from '../../../style/dimention';

import fb from '../../../asset/images/fb.png';
import roulette from '../../../asset/images/roulette.png';
import modif from '../../../asset/images/crayon.png';
import ImagePicker from 'react-native-image-picker';

import { _setPhoto } from './profileCurentModifAction'

const options = {
  mediaType: 'photo',
  title: 'Select Avatar',
  customButtons: [
    { name: 'fb', title: 'Choose Photo from Facebook' },
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
      pictures: this.props.user.pictures,
    };

  }


  setPhoto = function (index, options) {
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
        if (index != null) {
          console.log('------------------- response done ------------------', response.uri)
          let pictures = this.state.pictures
          pictures[index].source = response.uri
          this.setState({ pictures: pictures })
        }
      }
    });
  }

  renderPhoto(index) {
    if (index == 0) {
      return (
        <View style={styles.shadowPrimary}>
          <TouchableOpacity onPress={() => { this.setPhoto(index, options) }}>
            <Image style={styles.primaryPhoto} source={{ uri: this.state.pictures[index].source }} />
          </TouchableOpacity>
        </View>
      )
    } else {
      if (this.state.pictures[index].source == null) {
        return (
          <View style={styles.shadowSecondary}>
            <TouchableOpacity onPress={() => { this.setPhoto(index, options) }}>
              <Image style={[styles.secondaryPhoto, { backgroundColor: 'grey' }]} />
            </TouchableOpacity>
          </View>
        )
      } else {
        return (
          <View style={styles.shadowSecondary}>
            <TouchableOpacity onPress={() => { this.setPhoto(index, options) }}>
              <Image style={styles.secondaryPhoto} source={{ uri: this.state.pictures[index].source }} />
            </TouchableOpacity>
          </View>
        )
      }
    }
  }

render() {
  const { _setBioUser } = this.props;
  if (this.props.user != null) {
    return (
      <KeyboardAwareScrollView style={styles.container}>
        <StatusBar barStyle={'dark-content'} />

        <View style={styles.containerTitle}>
          <Text style={styles.textTitle}>
            Modification
              </Text>
        </View>

        <View style={styles.containerPhoto}>
          <View style={styles.containerPrimaryPhoto}>
            {this.renderPhoto(0)}
          </View>
          <View style={styles.containerSecondaryPhoto}>
            {this.renderPhoto(1)}
            {this.renderPhoto(2)}
          </View>
        </View>

        <View style={styles.containerTextInputs}>
          <Text style={styles.textStyle}> A propos de moi..</Text>
          <TextInput
            style={styles.containerBio}
            onChangeText={(bio) => this.setState({ bio })}
            value={this.state.bio}
            multiline={true}
            maxLength={140}
            autoCorrect={true}
            blurOnSubmit={true}
          />
        </View>
        <View style={styles.containerTextInputs}>
          <Text style={styles.textStyle}> Quelle est ta profession!!</Text>
          <TextInput
            style={styles.containerWork}
            onChangeText={(work) => this.setState({ work })}
            value={this.state.work}
            multiline={true}
            maxLength={30}
            autoCorrect={true}
            blurOnSubmit={true}
          />
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.buttonSave} onPress={() => { this.props._setUser(this.props.user, this.state.bio, this.state.work, this.state.pictures)}}>
            <Text style={styles.textBtnSave}>
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
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
  console.log("-=-=-=-=-=in profile map state to props view", state)
  const { user } = state.userReducer
  return {
    user
  }
}

export default connect(mapStateToProps, { _currentUser, _setUser, _setPhoto })(ProfileCurentModif);
const styles = {
  //general style
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  navBarStyle: {
    paddingTop: 18,
    paddingBottom: 0,
  },
  //--------------------------------
  //
  textTitle: {
    alignItems: 'center',
    fontFamily: "ProximaNovaSoft-Semibold",
    fontSize: 22,
    color: 'rgb(248,194,28)',
    backgroundColor: "transparent",
    paddingTop: 13
  },
  containerTitle: {
    marginTop: 10,
    alignItems: 'center',
  },
  //--------------------------------
  //profile picture style
  containerPhoto: {
    justifyContent: 'center',
    width: StyleDimention.DEVICE_WIDTH,
    height: 230,
    flexDirection: 'row',
    marginTop: 30
  },
  containerPrimaryPhoto: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20
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
    fontSize: 21,
    fontFamily: "ProximaNovaSoft-Bold",
    paddingTop: 5,
    color: 'black',
    marginTop: 15,
    marginBottom: 15,
  },
  containerTextInputs: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  containerBio: {
    backgroundColor: 'rgb(230,230,230)',
    borderRadius: 10,
    width: StyleDimention.DEVICE_WIDTH - 40,
    height: 120,
    fontFamily: 'ProximaNovaSoft-Medium',
    fontSize: 18,
    padding: 10,
  },
  containerWork: {
    backgroundColor: 'rgb(230,230,230)',
    borderRadius: 10,
    width: StyleDimention.DEVICE_WIDTH - 40,
    height: 50,
    fontSize: 18,
    fontFamily: 'ProximaNovaSoft-Medium',
    padding: 10,
  },
  //--------------------------------
  //button style
  containerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: StyleDimention.DEVICE_WIDTH,
  },
  buttonSave: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'rgb(248,194,28)',
    width: 208,
    height: 53,
    borderRadius: 30,
    marginTop: 30,
    marginBottom: 10,
  },
  textBtnSave: {
    color: 'rgb(248,194,28)',
    fontFamily: "ProximaNovaSoft-Regular",
    fontSize: 16,
  },
  //--------------------------------
};

import React, { Component } from 'react';
import styleDimention from '../style/dimention';
import { StyleSheet, Image, Text, TouchableOpacity, View, Button } from 'react-native';
import Messages from './messages';
import Profile from './profile';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.containerText}>
          <Text style={styles.textStyle}>
            Bonjour {this.props.user.name}
          </Text>
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity style= {styles.boutton}>
            <Text style= {styles.textButon} >
              Nouveau scénario
              </Text>
          </TouchableOpacity>
          <TouchableOpacity style= {styles.boutton}>

            <Text style= {styles.textButon} >
              Rejoindre un scénario
              </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}


const styles = {
  textStyle: {
    color: 'white',
    fontSize: 20,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgb(54,54,54)',   
    width: styleDimention.DEVICE_WIDTH,
    height: styleDimention.DEVICE_HEIGHT, 
    padding: styleDimention.CARD_PADDING_X,
    paddingTop: styleDimention.CARD_PADDING_Y,
    paddingBottom: styleDimention.CARD_PADDING_Y,
  },
  containerText: {
    marginTop:40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(54,54,54)',
  },
  containerButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(54,54,54)',
  },
  boutton: {
    width: 200,
    height: 50,
    backgroundColor: "white",
    borderColor: '#3b5998',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  }
};

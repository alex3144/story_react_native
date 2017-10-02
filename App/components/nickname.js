import React, { Component } from 'react';
import {TextInput, Keyboard} from 'react-native';
import styleDimention from '../style/dimention';
import { StyleSheet, Image, Text, TouchableOpacity, View, Button, ScrollView} from 'react-native';
import Messages from './messages';
import Profile from './profile';

export default class Home extends Component {
    constructor(props) {
      super(props);
      this.state = { text: '' };
      this.state.pressStatus = false
  }

  changeText(text){
    console.log(text)
  }


  render() {
    return (
        <ScrollView scrollEnabled={false} style={styles.container}>
          <View style={styles.flexColumnTop}>
              <Text style= {styles.textTitle} >
                  Story Name
              </Text>
              <Text style= {styles.textTaglineFirst} >
                  Choisi ton pseudo de l’application
              </Text>
              <Text style= {styles.textTaglineSecond} >
                  Les utilisateurs te veront sous ce nom, choisi en un qui leurs permetront de te reconnaitre
              </Text>
          </View>
        <View style={styles.flexColumnBottom}>
            <View>
                <TextInput
                    style={styles.nicknameInput}
                    onChangeText={(text) => this.changeText({text})}
                    placeholder="saisie ton pseudo ..."
                />
            </View>
            <View>
                <TouchableOpacity style = {this.state.pressStatus ? styles.disabled : styles.buton}>
                    <Text  style= {styles.textButon} >
                        Ok
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
    )
  }
}


const styles = {
  textStyle: {
    color: 'white',
    fontSize: 17,
  },
  flexColumnTop: {
      flex:1,
      flexDirection: 'column',
      alignItems: 'center',
  },
  flexColumnBottom: {
    flex:1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop:60
  },
  nicknameInput: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    height: 45,
    marginBottom:197,
    borderRadius:10, 
    borderColor:'white',
    backgroundColor:'white',
    borderWidth: 1,
    color: 'rgb(122,121,123)',
    fontFamily: "ProximaNovaSoft-Regular",
    fontSize:18,
    width:293,
    textAlign: 'center'

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
  textTitle: {
    color: 'white',
    fontSize: 45,
    marginTop:61,
    textShadowOffset: {width: 0, height: 2}, 
    textShadowRadius: 4, 
    textShadowColor: 'rgba(0,0,0,0.5)',
    fontFamily: "TypoGraphica",
  }, 
  disabled: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    height:59,
    width:180,
    borderRadius:100,
    opacity:0.1,
    backgroundColor:'rgb(248,194,28)',
    marginBottom: 33,
  },
  buton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    height:59,
    width:180,
    borderRadius:100,
    opacity:1,
    backgroundColor:'rgb(248,194,28)',
    marginBottom: 33,
  },
  textButon: {
    color:'white',
    fontSize:27,
    fontFamily: "ProximaNovaSoft-Regular",
  },
  containerButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(54,54,54)',
  },

  
  textTaglineFirst: {
    color: 'white',
    fontSize: 17,
    marginTop:34,
    fontFamily: "ProximaNovaSoft-Regular",
    textAlign: 'center'
  },

    
  textTaglineSecond: {
    color: 'white',
    fontSize: 17,
    fontFamily: "ProximaNovaSoft-Regular",
    textAlign: 'center'
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

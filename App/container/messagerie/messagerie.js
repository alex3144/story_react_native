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
import StyleDimention from '../../style/dimention';


export default class Messagerie extends Component {
   render() {
      return (
         <View style={styles.container}>
            <Text style={styles.textStyle}>Contact
            </Text>
         </View>
      )
   }
}

const styles ={
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
    textStyle:{
      fontFamily: "TypoGraphica",
      fontSize:25,
      color:'white'
    }

};

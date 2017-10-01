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
import StyleDimention from '../style/dimention';


export default class Profile extends Component {
   render() {
      return (
         <View style={styles.container}>
            <Text>Profile
            </Text>
         </View>
      )
   }
}

const styles ={
   container: {
      flex: 1,
      backgroundColor: 'rgb(54,54,54)',   
      width: StyleDimention.DEVICE_WIDTH,
      height: StyleDimention.DEVICE_HEIGHT, 
      padding: StyleDimention.CARD_PADDING_X,
      paddingTop: StyleDimention.CARD_PADDING_Y,
      paddingBottom: StyleDimention.CARD_PADDING_Y,
    },

};

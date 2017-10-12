import React, { Component } from 'react';
import {
   StyleSheet,
   Text,
   TouchableOpacity,
   Dimensions,
   View,
   ScrollView,
   Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { _currentUser } from '../home/homeThunk';
import { setButtonModifier, setButtonPellicule } from './photoAction';
import StyleDimention from '../../style/dimention';
import close from '../../asset/images/close.png';


export class Photo extends Component {

   renderButton() {
      if (this.props.isChange == true) {
         return (
            <View style={styles.containerButton}>
               <TouchableOpacity style={styles.buttonYellow} onPress={() => this.props.setButtonPellicule()}>
                  <Text style={styles.textButtonChange}>
                     Modifier
                  </Text>
            </TouchableOpacity>
            </View>
         )
      } else {
         return (
            <View style={styles.containerButton}>
               <TouchableOpacity style={styles.buttonWhite}>
                  <Text style={styles.textButtonPicture}>
                     PELLICULE
                  </Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.buttonWhite} onPress={() => this.props.setButtonModifier()}>
                  <Text style={styles.textButtonCancel}>
                     ANNULER
                  </Text>
               </TouchableOpacity>
            </View>
         )
      }
   }
   renderNavBar(){
      if (this.props.isChange == true) {
         return (
            <View style={styles.containerNavBar}>
                  <TouchableOpacity>
                     <Image style={styles.navBarClose} source={close} />
                  </TouchableOpacity>
               </View>
         )
      } else {
         return (
            <View style={styles.containerNavBar}>
                  
            </View>
         )
      }
   }

   render() {
      if ((this.props.user =! null)) {
         return (
            <View style={styles.container}>
               <View>
                  {this.renderNavBar()}
               </View>

               <View style={styles.containerPhoto}>
                  <Image style={styles.stylePhoto} source={{ uri: this.props.picture.data.data.url }} />
               </View>
               {this.renderButton()}
            </View>
         )
      }
   }
}
const mapStateToProps = (state, props) => {
   const isChange = state.photoReducer;
   console.log("------------ in photo mapStateToProps view ------------", state.profileReducer, props, isChange);
   return (
      isChange
   )
}
export default connect(mapStateToProps, { setButtonModifier, setButtonPellicule })(Photo);

const styles = {
   //genaral
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'rgb(54,54,54)',
      width: StyleDimention.DEVICE_WIDTH,
      height: StyleDimention.DEVICE_HEIGHT,
      padding: StyleDimention.CARD_PADDING_X,
      paddingTop: StyleDimention.CARD_PADDING_Y,
      paddingBottom: StyleDimention.CARD_PADDING_Y,
   },
   //-----------------------------------------------
   //navbar
   navBarClose: {
      width: 28,
      height: 28,
   },
   containerNavBar:{
      marginLeft: 300,
      height:28
   },
   //-----------------------------------------------
   //pitcture
   stylePhoto: {
      width: StyleDimention.DEVICE_WIDTH - 20,
      height: 386,
      borderRadius: 20,
   },
   containerPhoto: {
      borderRadius: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.5,
      shadowRadius: 4,
   },
   //-----------------------------------------------
   //button
   containerButton:{
      height: 150,
      justifyContent:'center',
      alignItems:'center',
   },
   buttonYellow: {
      backgroundColor: 'rgb(248,194,28)',
      borderRadius: 30,
      width: 180,
      height: 56,
      justifyContent: 'center',
      alignItems: 'center',
   },
   buttonWhite: {
      backgroundColor: 'white',
      borderRadius: 12,
      width: StyleDimention.DEVICE_WIDTH - 20,
      height: 56,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:10
   },
   textButtonChange: {
      paddingTop: 5,
      color: 'white',
      fontSize: 27,
      fontFamily: "ProximaNovaSoft-Medium",
   },
   textButtonCancel:{
      paddingTop: 5,
      color: 'rgb(54,54,54)',
      fontSize: 27,
      fontFamily: "ProximaNovaSoft-Medium",
   },
   textButtonPicture:{
      paddingTop: 5,
      color: 'rgb(248,194,28)',
      fontSize: 27,
      fontFamily: "ProximaNovaSoft-Medium",
   }

   //-----------------------------------------------





};

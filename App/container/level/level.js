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
import { connect } from 'react-redux';
import { _currentUser, } from '../profile/profileThunk';
import StyleDimention from '../../style/dimention';
import LinearGradient from 'react-native-linear-gradient';


class Points extends Component {
   componentDidMount() {
      this.props._currentUser();
   }
   render() {
      return (
         <View style={styles.container}>
            < LinearGradient colors={['rgb(252,227,60)', 'rgb(248,194,28)']} style={styles.linearGradientNavBar} >
               <Image />
               <Text style= {styles.textNavBar} >
                  Niveau
               </Text>
            </LinearGradient>
            <View>
            </View>
            <View>
            </View>
         </View>
      )
   }
}
const mapStateToProps = (state) => {
   console.log("in profile view", state.profileReducer)
   const { user } = state.profileReducer
   return {
      user
   }
}
export default connect(mapStateToProps, { _currentUser })(Points)

const styles = {
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      width: StyleDimention.DEVICE_WIDTH,
      height: StyleDimention.DEVICE_HEIGHT,
      padding: StyleDimention.CARD_PADDING_X,
      paddingTop: StyleDimention.CARD_PADDING_Y,
      paddingBottom: StyleDimention.CARD_PADDING_Y,
   },
   textNavBar: {
      fontFamily: "ProximaNovaSoft-Semibold",
      fontSize: 25,
      color: 'white',
      backgroundColor: "transparent",
   },
   linearGradientNavBar: {
      width: StyleDimention.DEVICE_WIDTH,
      height: 94,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 30,
      marginTop:-20,
   }

};

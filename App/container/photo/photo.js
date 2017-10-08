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


class Photo extends Component {
   componentDidMount() {
      this.props._currentUser();
   }
   render() {
      return (
         <View style={styles.container}>
            <View style={styles.navBarStyle}>
               <TouchableOpacity onPress={() => Actions.profile(this.props.user)}>
                  <Image style={styles.imageRoulette} source={roulette} />
               </TouchableOpacity>
            </View>
            <View>
            </View>
            <View>
            </View>
         </View>
      )
   }
}
const mapStateToProps = (state) => {
   console.log("in change photo view", state.profileReducer)
   const { user } = state.profileReducer
   return {
      user
   }
}
export default connect(mapStateToProps, { _currentUser })(Photo)

const styles = {
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

};

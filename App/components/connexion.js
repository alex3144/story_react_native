import React, { Component } from 'react';
import Actions from 'react-native-router-flux';
import { StackNavigator, Navigator } from 'react-navigation';
import { Text, TouchableOpacity, View, Button } from 'react-native';
import { connect } from 'react-redux';
import Cards from './cards';
import CardSections from './cardSections';
import Home from './home';
import Profile from './profile';
import Messages from './messages';
import Login from './commun/buttonLogin';
import { _fb_Auth } from '../actionAsync/auth/auth';

// import LinearGradient from 'react-native-linear-gradient';

const navigation = StackNavigator({
  home: { screen: Home },
  profile: { screen: Profile },
  messages: { screen: Messages },
});


class Connexion extends React.Component {

  static navigationOptions = {
    header: null
  };

  render() {

    const {isLoginSuccess, _fb_Auth} = this.props

    if(this.props.isLoginSuccess){
      return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgb(54,54,54)' }}>
        <Text style= {styles.textTitle} >
          Story
            </Text>
        <Text style= {styles.textTagline} >
         NIQUE VOS MERE 
            </Text>
        <TouchableOpacity style= {styles.button} onPress={() => {this.props._fb_Auth()}}>
          {/* <LinearGradient colors={['rgb(15,131,222)', '#rgb(71,154,222)']}> */}
          <Text style= {styles.textButon} >
            Login
          </Text> 
          {/* </LinearGradient> */}
        </TouchableOpacity>

      </View>
      )
    }
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgb(54,54,54)' }}>
        <Text style= {styles.textTitle} >
          Story
            </Text>
        <Text style= {styles.textTagline} >
          Ecrivez votre histoire
            </Text>
        <TouchableOpacity style= {styles.button} onPress={() => {this.props._fb_Auth()}}>
          {/* <LinearGradient colors={['rgb(15,131,222)', '#rgb(71,154,222)']}> */}
          <Text style= {styles.textButon} >
            Login
          </Text> 
          {/* </LinearGradient> */}
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = ({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  button: {
    width: 200,
    height: 40,
    borderWidth: 2,
    backgroundColor: "#3b5998",
    borderColor: '#3b5998',
    borderRadius: 20,
    alignItems: 'center', 
    justifyContent: 'center',

  },
  textButon: {
    color: 'white',
    fontSize: 20,
  },
  textTitle: {
    color: 'white',
    fontSize: 80,
    marginBottom:10
  },
  textTagline: {
    color: 'white',
    fontSize: 20,
    padding:10,
    marginBottom:90
  }
});

const mapStateToProps = (state, ownProps = {}) => {
  console.log("in view", state)
  return {
    isLoginPending:  state.isFetching,
    isLoginSuccess: state.isAuthenticated,
    loginError: state.loginError
  }
}



export default connect(mapStateToProps, {_fb_Auth})(Connexion)



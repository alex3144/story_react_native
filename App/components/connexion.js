import React, { Component } from 'react';
import Actions from 'react-native-router-flux';
import { StackNavigator, Navigator } from 'react-navigation';
import { Text, TouchableOpacity, View, Button, ScrollView, Animated } from 'react-native';
import { connect } from 'react-redux';
import Cards from './cards';
import CardSections from './cardSections';
import Home from './home';
import Profile from './profile';
import Messages from './messages';
import AnimPulse from './animations/animPulse';
import AnimOpacity from './animations/animeOpacity';
import { _fb_Auth } from '../actionAsync/auth/auth';
import LinearGradient from 'react-native-linear-gradient';

const navigation = StackNavigator({
  home: { screen: Home },
  profile: { screen: Profile },
  messages: { screen: Messages },
});

class Connexion extends React.Component {

  static navigationOptions = {
    header: null,
    transition: [
      // {
      //   to: 'home',
      //   config : { duration : 2000 },   

      // }
    ]
  };

  render() {

    const { isLoginSuccess, _fb_Auth } = this.props
    return (

      <View style={styles.container}>
        <AnimPulse style={styles.container}/>
        <AnimOpacity>
        <Text style= {styles.textTitle} >Story</Text>
        <Text style= {styles.textTagline} >
          Ecrivez votre histoire
            </Text>
        <TouchableOpacity style= {styles.button} onPress={() => { this.props._fb_Auth() }}>
          < LinearGradient colors = {[ '#4c669f' , '#3b5998' , '#192f6a' ]} style = { styles.linearGradient } > 
              <Text style= {styles.textButon} >
                Login
              </Text>
          </ LinearGradient>
        </TouchableOpacity>
        </AnimOpacity>
        {/* </AnimPulse> */}
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps = {}) => {
  console.log("in view", state)
  return {
    isLoginPending: state.isFetching,
    isLoginSuccess: state.isAuthenticated,
    loginError: state.isLoginError,
    message: state.message
  }
}

export default connect(mapStateToProps, { _fb_Auth })(Connexion)


const styles = ({
  contentContainer: {
    paddingVertical: 20
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(54,54,54)'
  },
  linearGradient: {
    width: 200,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 200,
    height: 40,
    backgroundColor: "transparent",
    borderColor: '#3b5998',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButon: {
    color: 'white',
    fontSize: 20,
    backgroundColor: "transparent",
  },
  textTitle: {
    color: '#FEB200',
    fontSize: 80,
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: "TypoGraphica",
  },
  textTagline: {
    color: 'white',
    fontSize: 20,
    padding: 10,
    marginBottom: 90
  }
});

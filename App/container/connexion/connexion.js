import React, { Component } from 'react';
import Actions from 'react-native-router-flux';
import StyleDimention from '../../style/dimention';
import { Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { _tchek_user, _fb_Auth } from './authThunk';
import LinearGradient from 'react-native-linear-gradient';
import { Bubbles } from 'react-native-loader';
import AnimOpacity from './animeOpacity';



class Connexion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }


  componentWillMount() {

    // console.log("--------- in connexion willMount view --------------")

    this.props._tchek_user()

    ///ASK PERMISION FOR GEOLOCATION
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  };



  render() {
    const { isLoginSuccess, isLoginPending, _fb_Auth, _tchek_user } = this.props;
    if (this.props.isLoginPending) {
      return (
        <View style={[styles.container, styles.flexContainer]}>
          <Bubbles size={10} color="black" />
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <AnimOpacity style={styles.containerSecond}>
            <Text style= {styles.textTitle} >Story
                <Text style={{ fontSize: 16 }}>®
                </Text>
            </Text>
            <Text style= {styles.textTagline} >
              Ecrivez votre histoire
                </Text>
            <TouchableOpacity style= {styles.buttonFacebook} onPress={() => { this.props._fb_Auth(this.state.latitude, this.state.longitude) }}>
              < LinearGradient colors={['rgb(15,131,222)', 'rgb(71,154,222)']} style={styles.linearGradientFacebook} >
                <Text style= {styles.textButon} >
                  Connexion Facebook
                  </Text>
              </ LinearGradient>
            </TouchableOpacity>
            <View style= {styles.textBottom}>
              <Text style={styles.textColor}>
                Nous ne publions rien sur facebook.
                </Text>
              <Text style={styles.textColor}>
                En vous inscrivant, vous acceptez nos
                  CGU et Politique de confidentialité.
                </Text>
            </View>
          </AnimOpacity>
        </View>
      );
    }
  }
}

const mapStateToProps = (state) => {
  // console.log("--------- in connexion mapStateToProps view ------------", state)
  return {
    isLoginPending: state.authReducer.isFetching,
    isLoginSuccess: state.authReducer.isAuthenticated,
    loginError: state.authReducer.isLoginError,
  }
}
export default connect(mapStateToProps, { _fb_Auth, _tchek_user })(Connexion);

const styles = ({
  contentContainer: {
    paddingVertical: 20
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: StyleDimention.DEVICE_WIDTH,
    height: StyleDimention.DEVICE_HEIGHT,
    padding: StyleDimention.CARD_PADDING_X,
    paddingTop: StyleDimention.CARD_PADDING_Y,
    paddingBottom: StyleDimention.CARD_PADDING_Y,
  },
  flexContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerSecond: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginTop: 100
  },
  linearGradientFacebook: {
    width: 265,
    height: 40,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
  buttonFacebook: {
    width: 200,
    height: 130,
    backgroundColor: "transparent",
    borderColor: '#3b5998',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  textButon: {
    color: 'black',
    fontSize: 20,
    backgroundColor: "transparent",
  },
  textTitle: {
    color: 'black',
    fontSize: 80,
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: "TypoGraphica",
  },
  textTagline: {
    color: 'black',
    fontSize: 20,
    padding: 10,
    marginBottom: 50,
    fontFamily: "ProximaNovaSoft-Regular",
  },
  viewBottom: {
    padding: 20,
  },
  textColor: {
    fontSize: 12,
    padding: 3,
    color: 'black',
    textAlign: 'center',
    fontFamily: "ProximaNovaSoft-Regular",
  }
});
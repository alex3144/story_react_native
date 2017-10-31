import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Animated,
  Image,
  ScrollView,
  StatusBar
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';
import Swiper from 'react-native-swiper';
import StyleDimention from '../../../style/dimention';
import SwipeCards from 'react-native-swipe-cards';
import { connect } from 'react-redux';
import { _currentUser, _match } from '../../technicalContainer/user/userThunk';


class Home extends Component {
  constructor(props){
    super(props);
    this.yes = this.yes.bind(this)
  }
  componentWillMount() {
    this.props._match()
  }

  Card(x) {
    return (
      <View style={styles.containerCard}>
        <TouchableOpacity activeOpacity={0.8} onPress={() => Actions.profileUser({ user: x })}>
          <Image style={styles.cardPitcture} source={{ uri: x.pictures.data[0].source.replace('http://', 'https://') }}>
            <View style={styles.cardInfo}>
              <Text style={styles.cardText}>{x.first_name}, </Text>
              <Text style={styles.cardText}>{x.age} ans</Text>
            </View>
          </Image>
        </TouchableOpacity>
      </View>
    )
  }


  handleYes(card) {
    console.log(`Yes for ${card.text}`)
  }

  handleNo(card) {
    console.log(`No for ${card.text}`)
  }
  noMore() {
    return (
      <View style={styles.card} >
        <Text>...</Text>
      </View>
    )
  }
  
  yes() {
    console.log(this.refs['swiper'])
    this.refs['swiper']._goToNextCard()
  }

  no() {
    console.log(this.refs['swiper'])
    this.refs['swiper']._goToNextCard()
  }

  render() {
    return (
      <LinearGradient colors={['rgb(255,255,255)', 'rgb(240,236,236)']} style={styles.containerHome}>
        <StatusBar barStyle={'dark-content'}/>
        <View style={styles.containerTitle}>
          <Text style={styles.textTitle}>
            Dispo
        </Text>
        </View>
        <SwipeCards
          ref={'swiper'}
          cards={this.props.match}
          containerStyle={{ backgroundColor: 'white', alignItems: 'center' }}
          renderCard={(cardData) => this.Card(cardData)}
          renderNoMoreCards={() => this.noMore()}
          handleYup={this.handleYes}
          handleNope={this.handleNo} />
        <View style={styles.containerButton}>
          <View>
            <TouchableOpacity style={[styles.borderButton, {backgroundColor:'rgb(254,80,104)'}]} onPress={() => this.no()}>
              <Text style={styles.textButton}>
                NO
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={[styles.borderButton,{backgroundColor: 'rgb(60,164,255)'}]} onPress={() => this.yes()}>
              <Text style={styles.textButton}>
                YES
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("------------ in home mapStateToProps view ------------", state.userReducer);
  const { user, match } = state.userReducer
  return {
    user,
    match
  }
}
export default connect(mapStateToProps, { _currentUser, _match })(Home);

const styles = {
  //main layout container
  containerHome: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    width: StyleDimention.DEVICE_WIDTH,
    height: StyleDimention.DEVICE_HEIGHT,
    padding: StyleDimention.CARD_PADDING_X,
    paddingTop: StyleDimention.CARD_PADDING_Y,
    paddingBottom: StyleDimention.CARD_PADDING_Y,
  },
  //--------------------------------
  //cardStyle
  containerCard: {
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 7,
    marginTop:-60
  },
  cardPitcture: {
    width: StyleDimention.DEVICE_WIDTH - 50,
    height: 400,
    backgroundColor: 'white',
    borderRadius: 14,
  },
  cardInfo: {
    position: 'absolute',
    marginTop: 320,
    marginLeft: 15,
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  cardText: {
    fontSize: 28,
    fontFamily: "ProximaNovaSoft-Bold",
    color: 'white',
    backgroundColor: 'transparent',
  },
  card: {
    borderRadius: 20
  },
  //--------------------------------
  //button Like and Dislike style
  containerButton: {
    margin:8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    width: StyleDimention.DEVICE_WIDTH - 200,
  },
  borderButton: {
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    height: 64,
    width: 64,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  textButton: {
    fontSize: 20,
    color:'white'
  },
  //--------------------------------
  containerTitle:{
  },
  textTitle:{
    color: 'rgb(248,194,28)',
    fontSize: 35,
    textAlign: 'center',
    fontFamily: "TypoGraphica",
  }

}

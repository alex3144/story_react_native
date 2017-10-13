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
import { Actions } from 'react-native-router-flux';
import Swiper from 'react-native-swiper';
import StyleDimention from '../../style/dimention';
import Profil from '../profile/profile';
import Contact from '../contact/contact';
import Message from '../messagerie/messagerie'
import SwipeCards from 'react-native-swipe-cards';
import { connect } from 'react-redux';
import { _currentUser, } from '../home/homeThunk';



const Cards = [{
  "id": 1,
  "first_name": "Denise",
  "age": 21,
  "friends": 9,
  "interests": 38,

}, {
  "id": 2,
  "first_name": "Cynthia",
  "age": 27,
  "friends": 16,
  "interests": 49,

}, {
  "id": 3,
  "first_name": "Maria",
  "age": 29,
  "friends": 2,
  "interests": 39,

}, {
  "id": 4,
  "first_name": "Jessica",
  "age": 20,
  "friends": 18,
  "interests": 50,

}, {
  "id": 5,
  "first_name": "Julie",
  "age": 28,
  "friends": 2,
  "interests": 13,

}, {
  "id": 6,
  "first_name": "Anna",
  "age": 24,
  "friends": 12,
  "interests": 44,

}]


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: Cards
    }
  }
  componentWillMount() {
    console.log(" ------------ in home willMount view ----------------")
    this.props._currentUser();
  }

  Card(x) {
    return (
      <View style={styles.containerCard}>
          <View style={styles.cardPitcture} />
          <View style={styles.cardInfo}>
            <Text style={styles.cardText}>{x.first_name}, </Text>
            <Text style={styles.cardText}>{x.age}</Text>
          </View>
        </View>
    )
  }


  handleYup(card) {
    console.log(`Yup for ${card.text}`)
  }

  handleNope(card) {
    console.log(`Nope for ${card.text}`)
  }
  noMore() {
    return (
      <View style={styles.card} >
        <Text>No More Cards</Text>
      </View>
    )
  }

  yup() {
    console.log(this.refs['swiper'])
    this.refs['swiper']._goToNextCard()
  }

  nope() {
    console.log(this.refs['swiper'])
    this.refs['swiper']._goToNextCard()
  }

  render() {
    return (
      <View style={styles.container}>

        {/* <View style={styles.containerCard}> */}
        <SwipeCards
          ref={'swiper'}
          cards={this.state.cards}
          containerStyle={{ backgroundColor: 'white', alignItems: 'center' }}
          renderCard={(cardData) => this.Card(cardData)}
          renderNoMoreCards={() => this.noMore()}
          handleYup={this.handleYup}
          handleNope={this.handleNope} />
        {/* </View> */}


        <View style={styles.containerButton}>

        </View>
      </View>
    );
  }
}
const mapStateToProps = (state, props) => {
  console.log("------------ in home mapStateToProps view ------------", state.profileReducer, props);
  const user = state.profileReducer
  return (
    user
  )
}
export default connect(mapStateToProps, { _currentUser })(Home);

const HEADER_MAX_HEIGHT = 500;
const HEADER_MIN_HEIGHT = 0;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const styles = {
  //main layout container
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',//'rgb(54,54,54)',
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  cardPitcture: {
    width: 300,
    height: 300,
    backgroundColor: 'white',
  },
  cardInfo: {
    width: 300,
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  cardText: {
    fontSize: 20,
    fontWeight: '300',
    color: 'black'
  },
  card:{
    borderRadius:20
  },
  //--------------------------------
  //button Like and Dislike style
  containerButton: {

  },

  //--------------------------------

}

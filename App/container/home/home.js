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
import SwipeCards from 'react-native-swipe-cards';
import { connect } from 'react-redux';
import { _currentUser, _match } from '../home/homeThunk';


class Home extends Component {
  componentWillMount() {
    this.props._match()
  }
  componentWillReceiveProps(){
    console.log(this.props.match)
  }

  Card(x) {
    return (
      <View style={styles.containerCard}>
        <Image style={styles.cardPitcture} source={{uri: x.pictures.data[0].source.replace('http://', 'https://')}}/>
        <View style={styles.cardInfo}>
          <Text style={styles.cardText}>{x.first_name}, </Text>
          <Text style={styles.cardText}>{x.age}</Text>
        </View>
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
        <SwipeCards
          ref={'swiper'}
          cards={this.props.match}
          containerStyle={{ backgroundColor: 'white', alignItems: 'center' }}
          renderCard={(cardData) => this.Card(cardData)}
          renderNoMoreCards={() => this.noMore()}
          handleYup={this.handleYes}
          handleNope={this.handleNo} />
        <View style={styles.containerButton}>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("------------ in home mapStateToProps view ------------", state.homeReducer.match);
  return {
    user: state.homeReducer.user, 
    match: state.homeReducer.match
  }
}
export default connect(mapStateToProps, { _currentUser,_match })(Home);

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
  card: {
    borderRadius: 20
  },
  //--------------------------------
  //button Like and Dislike style
  containerButton: {

  },
  //--------------------------------

}

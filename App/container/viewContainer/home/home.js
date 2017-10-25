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
import StyleDimention from '../../../style/dimention';
import SwipeCards from 'react-native-swipe-cards';
import { connect } from 'react-redux';
import { _currentUser, _match } from '../../technicalContainer/user/userThunk';


class Home extends Component {
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
              <Text style={styles.cardText}>{x.age}</Text>
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
          <View>
            <TouchableOpacity style={styles.borderButton} onPress={() => this.no()}>
              <Text style={styles.textButton}>
                NO
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.borderButton} onPress={() => this.yes()}>
              <Text style={styles.textButton}>
                YES
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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

const HEADER_MAX_HEIGHT = 500;
const HEADER_MIN_HEIGHT = 0;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const styles = {
  //main layout container
  container: {
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
  },
  cardPitcture: {
    width: StyleDimention.DEVICE_WIDTH - 50,
    height: 360,
    backgroundColor: 'white',
    borderRadius: 7,
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
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: StyleDimention.DEVICE_WIDTH - 100,
  },
  borderButton: {
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    height: 40,
    width: 100,
    backgroundColor: 'white',
  },
  textButton: {
    fontSize: 20,
  },
  //--------------------------------

}

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
import ProfilCurrent from '../profileCurrent/profileCurrent';
import Home from '../home/home';
import Messagerie from '../messagerie/messagerie'
import SwipeCards from 'react-native-swipe-cards';

import { connect } from 'react-redux';
import { _currentUser, _match } from '../../technicalContainer/user/userThunk';



class Swipper extends Component {
  constructor() {
    super()
    this.state = {
      isEnable: false,
    }
    
  }

  componentWillMount() {
    console.log(" ------------ in swipper willMount view ----------------")
    this.props._currentUser();
    this.props._match()
    let index=1
    this.setState({index: index})
  }

  disableSwipe(index) {
    if (this.refs.swiper) {
      if (index == 1) {
        return (
          this.setState({ isEnable: false })
        )

      }
      else {
        return (
          this.setState({ isEnable: true })
        )
      }
    }
  }

  componentWillReceiveProps(props, nextProps) {
  }
  card(x) {
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
  setIndexLeftOne() {
    if (this.state.index == 1) {
      return(
        this.setState({index: 0})
      )
      console.log("===============",this.state.index)
    }
    if (this.state.index == 2) {
      this.setState({index:1})
      console.log("===============",this.state.index)
    }
  }
  setIndexRightOne() {
    if (this.state.index == 1) {
      this.setState({index:2})
      console.log("===============",this.state.index)
    }
    if (this.state.index == 0) {
      this.setState({index:1})  
      console.log("===============",this.state.index)
    }
  }
  setIndexLeftTwo() {
    this.setState({index:0})  
    console.log("===============",this.state.index)
  }
  setIndexRigthTwo() {
    this.setState({index:2})  
    console.log("===============",this.state.index)
  }

  yes() {
    console.log(this.refs['swipe'])
    this.refs['swipe']._goToNextCard()
  }

  no() {
    console.log(this.refs['swipe'])
    this.refs['swipe']._goToNextCard()
  }

  renderFooterNav(index) {
    if (this.refs.swiper) {
      switch (index) {
        case 0:
          return (
            <View style={styles.containerFooterNav}>
              <View style={styles.containerFooterTextNav}>
                <TouchableOpacity >
                  <Text style={styles.textFooterNav}>
                    Left
                   </Text>
                </TouchableOpacity>
                <TouchableOpacity onPressOut={() => this.refs.swiper.scrollBy(1)} onPress={() => this.setIndexRightOne()}>
                  <Text style={styles.textFooterNav}>
                    Home
                   </Text>
                </TouchableOpacity>
                <TouchableOpacity onPressOut={() => this.refs.swiper.scrollBy(2)} onPress={() => this.setIndexRigthTwo()}>
                  <Text style={styles.textFooterNav}>
                    Right
                   </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.backgroundFooternav}>
              </View>
            </View>
          )

        case 1:
          return (
            <View style={styles.containerFooterNav}>
              <View style={styles.containerFooterTextNav}>
                <TouchableOpacity onPressOut={() => this.refs.swiper.scrollBy(-1)} onPress={() => this.setIndexLeftOne()}>
                  <Text style={styles.textFooterNav}>
                    Left
                   </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.textFooterNav}>
                    Home
                   </Text>
                </TouchableOpacity>
                <TouchableOpacity onPressOut={() => this.refs.swiper.scrollBy(1)} onPress={() => this.setIndexRightOne()}>
                  <Text style={styles.textFooterNav}>
                    Right
                   </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.backgroundFooternav}>
              </View>
            </View>
          )

        case 2:
          return (
            <View style={styles.containerFooterNav}>
              <View style={styles.containerFooterTextNav}>
                <TouchableOpacity onPressOut={() => this.refs.swiper.scrollBy(-2)} onPress={() => this.setIndexLeftTwo()}>
                  <Text style={styles.textFooterNav}>
                    Left
                   </Text>
                </TouchableOpacity>
                <TouchableOpacity onPressOut={() => this.refs.swiper.scrollBy(-1)} onPress={() => this.setIndexLeftOne()}>
                  <Text style={styles.textFooterNav}>
                    Home
                   </Text>
                </TouchableOpacity>
                <TouchableOpacity >
                  <Text style={styles.textFooterNav}>
                    Right
                   </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.backgroundFooternav}>
              </View>
            </View>
          )
        default:
          break;
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Swiper
          horizontal={true}
          showsPagination={true}
          loop={false}
          index={this.state.index}
          ref='swiper'
          scrollEnabled={this.state.isEnable}
          onScrollBeginDrag={() => console.log("----------scrolling")}
        >
          <View style={styles.container}>
            <ProfilCurrent user={this.props.user} />
          </View>

          <View style={styles.container}>
            <View style={styles.containerHome}>
              <View style={styles.containerTitle}>
                <Text style={styles.textTitle}>
                  Dispo
                </Text>
              </View>
              <SwipeCards
                ref={'swipe'}
                cards={this.props.match}
                containerStyle={{ backgroundColor: 'white', alignItems: 'center' }}
                renderCard={(cardData) => this.card(cardData)}
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
          </View>

          <View style={styles.container}>
            <Messagerie user={this.props.user} />
          </View>

        </Swiper>
        <View style={styles.containerFooterNav}>
          {this.renderFooterNav(this.state.index)}
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  console.log("------------ in swiper mapStateToProps view ------------", state);
  const { user, match } = state.userReducer
  return {
    user,
    match
  }
}
export default connect(mapStateToProps, { _currentUser, _match })(Swipper);


const styles = {
  //main layout container
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',// 'rgb(54,54,54)'
    width: StyleDimention.DEVICE_WIDTH,
  },
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
  swiper: {
    flex: 1,
    width: StyleDimention.DEVICE_WIDTH,
    height: StyleDimention.DEVICE_HEIGHT,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  containerFooterNav: {
    zIndex: 10,
    alignItems: 'center',
    width: StyleDimention.DEVICE_WIDTH,
    overflow: 'hidden', // for hide the not important parts from circle
    height: 120,
    backgroundColor: 'transparent'
  },
  //-------------------------------------------------
  //
  backgroundFooternav: {
    borderRadius: 1500, // border borderRadius same as width and height
    width: 1500,
    height: 1500,
    top: 0, // show the bottom part of circle
    overflow: 'hidden', // hide not important part of image
    backgroundColor: 'rgb(248,194,28)',
  },
  containerFooterTextNav: {
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  textFooterNav: {
    color: 'black',
    fontSize: 16,
  },
  //-------------------------------------------------



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
    height: 380,
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
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
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
  containerTitle: {
    marginTop: 10
  },
  textTitle: {
    color: 'rgb(248,194,28)',
    fontSize: 35,
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: "TypoGraphica",
  }
}

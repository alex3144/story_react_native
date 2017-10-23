import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  Text,
  View,
  Image,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
import StyleDimention from '../../style/dimention';
import backLeft from '../../asset/images/backLeft.png';

var image1 = require('../../asset/images/profile/image1.jpeg')
var image2 = require('../../asset/images/profile/image2.jpeg')
var image3 = require('../../asset/images/profile/image3.jpeg')
var image4 = require('../../asset/images/profile/image4.jpeg')
var image5 = require('../../asset/images/profile/image5.jpeg')
var image6 = require('../../asset/images/profile/image6.jpeg')

const Cards = [
  {
    "pictures": {
      "data": {
        "0": image1,
        "1": image2,
        "2": image3,
        "3": image4,
        "4": image5,
        "5": image6
      }
    }
  },
]
export default class ProfileUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: Cards
    }
  }

  renderPicture(index) {
    id=index
    return (<Image style={styles.image} source={this.state.cards[0].pictures.data[id]} />)
  }

  render() {
    const pictureCount = Object.keys(this.state.cards[0].pictures.data).length;
    const picture = [...new Array(pictureCount)].map((it, idx) => {
      return this.renderPicture(idx);
    });
    if (this.props.user.pictures != null) {
      return (
        <View style={styles.container}>
          <StatusBar
            hidden={true}
          />
          <TouchableOpacity style={styles.buttonBack} onPress={() => Actions.swiper(index = 1)}>
            <Image source={backLeft} />
          </TouchableOpacity>
          <Swiper style={styles.wrapper}
            onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
            dot={<View style={{ backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
            activeDot={<View style={{ backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
            loop={false}
            paginationStyle={{
              bottom: -18
            }}
            style={{marginBottom:50}}
          >

            {picture}
          </Swiper>

          <View style={styles.infoContainer}>

            <View style={[styles.infoCard,{marginTop:40}]}>
              <Text style={styles.infoText}>
                {this.props.user.first_name}, {this.props.user.age}
              </Text>
            </View>
            <View style={styles.infoCard}>
              <Text style={styles.infoText}>
                Work
              </Text>
            </View>
            <View style={styles.infoCardDescription}>
              <Text style={styles.infoText}>
                Description
              </Text>
            </View>
          </View>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
        </View>
      )
    }
  }
}

const styles = {
  //---------------------------------------------------
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  buttonBack: {
    marginTop: StyleDimention.DEVICE_HEIGHT / 2 - 70,
    position: 'absolute',
    zIndex: 1,
    marginRight: StyleDimention.DEVICE_WIDTH,
  },
  //---------------------------------------------------
  image: {
    width: StyleDimention.DEVICE_WIDTH,
    height: StyleDimention.DEVICE_HEIGHT / 2 - 50,

  },
  //---------------------------------------------------
  infoContainer: {
    height: StyleDimention.DEVICE_HEIGHT / 2 + 50,
    alignItems: 'center',
  },
  infoCard: {
    marginTop: 10,
    width: StyleDimention.DEVICE_WIDTH - 20,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 3
  },
  infoCardDescription: {
    marginTop: 10,
    width: StyleDimention.DEVICE_WIDTH - 20,
    borderWidth: 1,
    borderColor: 'black',
    height: 200,
    borderRadius: 3
  },
  infoText: {
    color: 'black',
    fontSize: 20,
    fontFamily: "ProximaNovaSoft-Semibold",
    margin: 8
  }
}

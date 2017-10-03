import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Swiper from 'react-native-swiper';
import StyleDimention from '../style/dimention';
import Profil from './profile';
import Contact from './contact';

export default class Home extends Component {
  onSwipe(index) {
    console.log(index)
  }
  render() {
    return (
      <Swiper
        style={styles.wrapper}
        horizontal={false}
        showsPagination={false}
        loop={false}
        onScrollBeginDrag={2}
        onIndexChanged={this.onSwipe}
        loadMinimalSize={0}
        index={1}
        onScrollBeginDrag={(e, { index }, context) => this.setState({ swiperOldIndex: index })}
        onMomentumScrollEnd={(e, { index }, context) => this.setState({ swiperCurrentIndex: index })}

      >
        <Profil />
        <View style={styles.container}>
          <View style={styles.containerSection}>
            <TouchableOpacity style= {styles.buttonProfil}>

            </TouchableOpacity>
            <Text style= {styles.textPseudo} >
              CaroleZer
              </Text>
          </View>
          <View style={styles.containerSection}>
            <TouchableOpacity style= {styles.buttonCreate}>
              <Text style= {styles.textButtonCreate} >
                Creer
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style= {styles.buttonJoin}>
              <Text style= {styles.textButtonJoin} >
                Rejoindre
                    </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style= {styles.buttonContact}>

            </TouchableOpacity>
          </View>
        </View>


        <Contact />
      </Swiper>
    );
  }

}
const styles = {
  wrapper: {
  },
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
  containerSection: {
    alignItems: 'center',
    marginBottom: 150,
  },
  buttonProfil: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
    borderRadius: 100,
    opacity: 1,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  textPseudo: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    fontFamily: "ProximaNovaSoft-Regular",
  },
  buttonContact: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
    borderRadius: 100,
    opacity: 1,
    backgroundColor: 'rgb(248,194,28)',
    marginBottom: 33,
  },
  buttonCreate: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    height: 59,
    width: 180,
    borderRadius: 100,
    opacity: 1,
    backgroundColor: '#BB62CB',
    marginBottom: 33,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  buttonJoin: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    height: 59,
    width: 180,
    borderRadius: 100,
    opacity: 1,
    backgroundColor: 'white',
    marginBottom: 33,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  textButtonCreate: {
    color: 'white',
    fontSize: 24,
    fontFamily: "ProximaNovaSoft-Regular",
  },
  textButtonJoin: {
    fontWeight: 'bold',
    color: '#95DDFB',
    fontSize: 24,
    fontFamily: "ProximaNovaSoft-Regular",
  },
}


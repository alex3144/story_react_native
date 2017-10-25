import React, { Component } from 'react';
import {

  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ListView,
  View
} from 'react-native';
import StyleDimention from '../../../style/dimention';
import SwipeCards from 'react-native-swipe-cards';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconz from 'react-native-vector-icons/Ionicons';

var image1 = require('../../../asset/images/profile/image1.jpeg')
var image2 = require('../../../asset/images/profile/image2.jpeg')
var image3 = require('../../../asset/images/profile/image3.jpeg')
var image4 = require('../../../asset/images/profile/image4.jpeg')
var image5 = require('../../../asset/images/profile/image5.jpeg')
var image6 = require('../../../asset/images/profile/image6.jpeg')
var image7 = require('../../../asset/images/profile/image7.jpeg')
var image8 = require('../../../asset/images/profile/image8.jpeg')
var image9 = require('../../../asset/images/profile/image9.jpeg')
var image10 = require('../../../asset/images/profile/image10.jpeg')
var image11 = require('../../../asset/images/profile/image11.jpeg')

var convos = [{
  "id": 1,
  "name": "Diane",
  "message": "Suspendisse accumsan tortor quis turpis.",
  "image": image1
}, {
  "id": 2,
  "name": "Lois",
  "message": "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
  "image": image2
}, {
  "id": 3,
  "name": "Mary",
  "message": "Duis bibendum.",
  "image": image3
}, {
  "id": 4,
  "name": "Susan",
  "message": "Praesent blandit.",
  "image": image4
}, {
  "id": 5,
  "name": "Betty",
  "message": "Mauris enim leo, rhoncus sed, vestibulum, cursus id, turpis.",
  "image": image5
}, {
  "id": 6,
  "name": "Deborah",
  "message": "Aliquam sit amet diam in magna bibendum imperdiet.",
  "image": image6
}, {
  "id": 7,
  "name": "Frances",
  "message": "Phasellus sit amet erat.",
  "image": image7
}, {
  "id": 8,
  "name": "Joan",
  "message": "Vestibulum ante ipsum bilia Curae; Duis faucibus accumsan odio.",
  "image": image8
}, {
  "id": 9,
  "name": "Denise",
  "message": "Aliquam non mauris.",
  "image": image9
}, {
  "id": 10,
  "name": "Rachel",
  "message": "Nulla ac enim.",
  "image": image10
}]

var newMatches = [{
  "id": 1,
  "first_name": "Sarah",
  "image": image7
}, {
  "id": 2,
  "first_name": "Pamela",
  "image": image8
}, {
  "id": 3,
  "first_name": "Diana",
  "image": image9
}, {
  "id": 4,
  "first_name": "Christina",
  "image": image10
}, {
  "id": 5,
  "first_name": "Rebecca",
  "image": image11
}, {
  "id": 6,
  "first_name": "Wanda",
  "image": image5
}, {
  "id": 7,
  "first_name": "Sara",
  "image": image6
}, {
  "id": 8,
  "first_name": "Judith",
  "image": image7
}, {
  "id": 9,
  "first_name": "Ruby",
  "image": image1
}, {
  "id": 10,
  "first_name": "Sandra",
  "image": image11
}]
var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

class Messagerie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: ds.cloneWithRows(newMatches),
      convoData: ds.cloneWithRows(convos),
    }

  }


  rowRender(x) {
    return (
      <TouchableOpacity style={styles.rowMatch}>
        <TouchableOpacity>
          <Image source={x.image} style={styles.picture} />
        </TouchableOpacity>
        <View>
          <Text style={styles.userName}>{x.name}</Text>
          <Text
            numberOfLines={1}
            style={styles.userMessage}>{x.message}</Text>
        </View>
      </TouchableOpacity>)
  }


  render() {
    return (
      <View>
        <ScrollView style={styles.scrollViewStyle}>
          <View style={{ margin: 10 }}>
            <ListView
              horizontal={false}
              scrollEnabled={false}
              showsHorizontalScrollIndicator={false}
              dataSource={this.state.convoData}
              pageSize={5}
              renderRow={(rowData) => this.rowRender(rowData)}
            />
          </View>
        </ScrollView>
      </View>
    )
  }
}
export default Messagerie;

const styles = {

  //scrollview
  scrollView: {
    flex: 1,
    padding: 10
  },
  //-----------------------------
  //row
  picture: {
    width: 70,
    height: 70,
    borderRadius: 35,
    margin: 10
  },
  userName: {
    fontWeight: '600',
    color: '#111',
  },
  userMessage: {
    fontWeight: '400',
    color: '#888',
    width: 200
  },
  rowMatch: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3'
  },
  //-----------------------------




}
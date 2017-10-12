import React, { Component } from 'react';
import {
   StyleSheet,
   Text,
   TouchableOpacity,
   Dimensions,
   View,
   ScrollView,
   Image,
   Switch,
   StatusBar,
   Alert,
} from 'react-native';
import { connect } from 'react-redux';
import {Actions} from 'react-native-router-flux'
import { _currentUser } from '../home/homeThunk';
import { _disconnexion } from './parametersThunk';
import StyleDimention from '../../style/dimention';
import LinearGradient from 'react-native-linear-gradient';

class Reglages extends Component {
   componentDidMount() {
      this.props._currentUser();
   }
  
   render() {
      const alertDeconnexion =()=>{
            return(
                  Alert.alert(
                        'Oups!',
                        'Voulez vous vraiment vous deconneter',
                        [
                              {text: 'OK', onPress: () => this.props._disconnexion()},
                              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                        ],
                  )
            );
         }
      return (
         
         <ScrollView style={styles.container}>
            <StatusBar barStyle={'dark-content'}/>
            <View style= {styles.containerNarBar}>
               <View style={styles.cardNavBar}>
               </View>
               <View style={styles.cardNavBar}>
                  <Text style= {styles.textNavBar} >
                     Paramètres
                  </Text>
               </View>
               <View style={[styles.cardNavBar, styles.buttonNavBar]}>
                  {/* <TouchableOpacity style={styles.buttonRight}>
                     <Text style= {styles.textNavBarButton} >
                        Ok
                     </Text>
                  </TouchableOpacity> */}
               </View>
            </View>
            <View style={styles.containerTitle}>
               <Text style={styles.textTitle}>
                  GAGNEZ DES POINTS
               </Text>
            </View>
            <View style= {styles.containerWinPoints}>
               <TouchableOpacity style={styles.buttonWinPoint}>
                  <Text style= {styles.textButtonBold} >
                     Partagez
                  </Text>
                  <Text style= {styles.textButtonRegular} >
                     Partager Story à vos amis
                  </Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.buttonWinPoint}>
                  <Text style= {styles.textButtonBold} >
                     Scenarios / Questions
                  </Text>
                  <Text style= {styles.textButtonRegular} >
                     Suggerez nous des questions ou des scénarios
                  </Text>
               </TouchableOpacity>
            </View>

            <View style={styles.containerTitle}>
               <Text style={styles.textTitle}>
                  GÉNÉRAL
               </Text>
            </View>
            <View style= {styles.containerGeneral}>
               <TouchableOpacity>
                  <Text style={styles.textGeneralStyle}>
                     Modifier mon Story-name
                     </Text>
               </TouchableOpacity>
               <TouchableOpacity >
                  <Text style={styles.textGeneralStyle}>
                     Contact bloqué
                     </Text>
               </TouchableOpacity>
            </View>

            <View style={styles.containerTitle}>
               <Text style={styles.textTitle}>
                  NOTIFICATION
               </Text>
            </View>
            <View style= {styles.containerNotification}>
               <View style={styles.rowNotification}>
                  <Text style={styles.textNotification}>
                     Invitation stories
                  </Text>
                  <Switch value={true} />
               </View>
               <View style={styles.rowNotification}>
                  <Text style={styles.textNotification}>
                     Demande d'amis
                  </Text>
                  <Switch value={false} />
               </View>
               <View style={styles.rowNotification}>
                  <Text style={styles.textNotification}>
                     Réponse stories
                  </Text>
                  <Switch value={true} />
               </View>
            </View>

            <View style={styles.containerTitle}>
               <Text style={styles.textTitle}>
                  STORY
               </Text>
            </View>
            <View style={styles.contaireStory}>
               <TouchableOpacity>
                  <Text style={styles.textRow}>
                     F.A.Q
                  </Text>
               </TouchableOpacity>
               <TouchableOpacity>
                  <Text style={styles.textRow}>
                     Nous contacter
                  </Text>
               </TouchableOpacity>
               <TouchableOpacity>
                  <Text style={styles.textRow}>
                     Nous noter
                  </Text>
               </TouchableOpacity>
               <TouchableOpacity>
                  <Text style={styles.textRow}>
                     Mise à jour
                  </Text>
               </TouchableOpacity>
            </View>

            <View style={styles.containerTitle}>
               <Text style={styles.textTitle}>
                  JURIDIQUE
               </Text>
            </View>
            <View style= {styles.containerJuridique}>
               <TouchableOpacity>
                  <Text style={styles.textRow}>
                     Conditions générales d'utilisation
                  </Text>
               </TouchableOpacity>

               <TouchableOpacity>
                  <Text style={styles.textRow}>
                     Mentions légales
                  </Text>
               </TouchableOpacity>

               <TouchableOpacity>
                  <Text style={styles.textRow}>
                     Politique de confidentialité
                  </Text>
               </TouchableOpacity>
            </View>

            
            <View style={styles.containerDisable}>
               <TouchableOpacity style={styles.buttonConnexion} onPress={alertDeconnexion}>
                  <Text style={styles.textConnexion}>
                     Se déconnecter
                  </Text>
               </TouchableOpacity>
               <TouchableOpacity>
                  <Text style={styles.textDelete}>
                     Supprimer le compte
                  </Text>
               </TouchableOpacity>
            </View>

            <View style={styles.containerFooter}>
               < LinearGradient colors={['rgb(252,227,60)', 'rgb(248,194,28)']} style={[styles.linearGradientFooter]} >
                  <Text style= {styles.textFooter} >
                     Story
               </Text>
                  <Text style= {styles.versionFooter} >
                     Version 0.0.1
               </Text>

               </LinearGradient>
            </View>            
            
         </ScrollView>
      )
   }
}

const mapStateToProps = (state) => {
   console.log("in profile view", state.profileReducer)
   const { user } = state.profileReducer
   return {
      user
   }
}
export default connect(mapStateToProps, { _disconnexion,_currentUser })(Reglages)

const styles = {
   //Style
   container: {
      flex: 1,
      backgroundColor: 'white',
   },
   containerTitle: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgb(242,242,242)',
      height: 52
   },
   textTitle: {
      fontFamily: "ProximaNovaSoft-Semibold",
      color: 'rgb(137,137,137)',
      fontSize: 18,
   },
   textRow: {
      fontFamily: "ProximaNovaSoft-Regular",
      color: 'black',
      fontSize: 21,
      padding: 15,
      marginLeft: 10,
   },
   //-------------------------------------
   //Nav Bar style
   textNavBar: {
      fontFamily: "ProximaNovaSoft-Semibold",
      fontSize: 22,
      color: 'rgb(248,194,28)',
      backgroundColor: "transparent",
      width: 113,
   },
   textNavBarButton: {
      fontFamily: "ProximaNovaSoft-Semibold",
      fontSize: 22,
      color: 'rgb(248,194,28)',
      backgroundColor: "transparent",
   },
   cardNavBar: {
      width: StyleDimention.CARD_WIDTH / 3,
      alignItems: 'center',
   },
   containerNarBar: {
      height: 87,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
   },
   buttonNavBar: {
      paddingLeft: 40,
   },
   //-------------------------------------
   //Footer style
   containerFooter: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 199,
   },
   textFooter: {
      marginBottom: 20,
      fontSize: 40,
      fontFamily: 'TypoGraphica',
      color: 'white',
      backgroundColor: 'transparent',
      textShadowOffset: { width: 0, height: 2 },
      textShadowRadius: 4,
      textShadowColor: 'rgba(0,0,0,0.5)',
   },
   versionFooter: {
      backgroundColor: 'transparent',
      fontSize: 18,
      fontFamily: "ProximaNovaSoft-Semibold",
      color: 'white',
   },
   linearGradientFooter: {
      width: StyleDimention.DEVICE_WIDTH,
      height: 199,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 30,
   },
   //-------------------------------------
   //Win points 
   containerWinPoints: {
      backgroundColor: 'rgb(242,242,242)',
      height: 355,
      alignItems: 'center',
      justifyContent: 'center',
   },
   buttonWinPoint: {
      width: StyleDimention.CARD_WIDTH - 14,
      borderRadius: 20,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      height: 95,
      marginBottom: 22,
      shadowColor: 'rgba(183,180,180,0.5)',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
   },
   textButtonBold: {
      fontFamily: "ProximaNovaSoft-Bold",
      color: 'black',
      fontSize: 25,
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
   },
   textButtonRegular: {
      fontFamily: "ProximaNovaSoft-Regular",
      color: 'rgb(203,200,200)',
      fontSize: 17,
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
   },
   //-------------------------------------
   //General style
   containerGeneral: {
      height: 160,
      justifyContent: 'center',
   },
   textGeneralStyle: {
      padding: 15,
      marginLeft: 10,
      fontFamily: "ProximaNovaSoft-Regular",
      color: 'black',
      fontSize: 21,
   },
   //-------------------------------------
   //Notification style
   containerNotification: {
      height: 260,
      justifyContent: 'center',
   },
   rowNotification: {
      padding: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: 10,
   },
   textNotification: {
      fontFamily: "ProximaNovaSoft-Regular",
      color: 'black',
      fontSize: 21,
   },

   //-------------------------------------
   //Story style
   contaireStory: {
      height: 320,
      justifyContent: 'center',
   },
   //-------------------------------------
   //Juridique Story
   containerJuridique: {
      height: 260,
      justifyContent: 'center',
   },
   containerDisable: {
      height: 180,
      justifyContent: 'center',
      alignItems: 'center',
   },
   buttonConnexion: {
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: 'rgb(248,194,28)',
      width: 208,
      height: 53,
      borderRadius: 30,
   },
   textConnexion: {
      color: 'rgb(248,194,28)',
      fontFamily: "ProximaNovaSoft-Regular",
      fontSize: 16,
   },
   textDelete: {
      marginTop: 38,
      color: 'rgb(137,137,137)',
      fontFamily: "ProximaNovaSoft-Regular",
      fontSize: 16,
   },
   //-------------------------------------
};

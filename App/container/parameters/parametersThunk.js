import firebase from 'firebase';
import { setIsDisconnecting, setDisconnected } from './parametersAction';
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';

export const _disconnexion = function () {
  console.log('----- in asynchrone disconnexion user ----- ')
  return (dispatch) => {
    console.log('----- in asynchrone return disconnexion user ----- ')
    dispatch(setIsDisconnecting(true));

    AsyncStorage.removeItem('current_user').then((result, error) => {
      console.log('------- in remove local async ----------')
      firebase.auth().signOut().then((result, error) => {
        console.log('------- in remove firebase async ---------',result)
        dispatch(setDisconnected(true));
        Actions.login();
        },(error)=>{
          alert("Erreur lors de la deconnection firebase");
          console.log(error + "----- Erreur de deconnection firebase database -----")
        });
      },(error)=>{
        alert("Erreur lors de la deconnection locale");
        console.log(error + "----- Erreur de deconnection locale database -----")
      });
  }
}
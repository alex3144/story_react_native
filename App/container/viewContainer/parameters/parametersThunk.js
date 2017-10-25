import firebase from 'firebase';
import { setIsDisconnecting, setDisconnected } from './parametersAction';
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';

export const _disconnexion = function () {
  return (dispatch) => {
    dispatch(setIsDisconnecting(true));
    AsyncStorage.removeItem('current_user').then((result, error) => {
      firebase.auth().signOut().then((result, error) => {
        dispatch(setDisconnected(true));
        Actions.connexion();
      }, (error) => {
        alert("Erreur lors de la deconnection firebase");
      });
    }, (error) => {
      alert("Erreur lors de la deconnection locale");
    });
  }
}
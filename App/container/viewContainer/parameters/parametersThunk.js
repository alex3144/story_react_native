import firebase from 'firebase';
import { setIsDisconnecting, setDisconnected, getParameters } from './parametersAction';
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';
import { setParameters } from './parametersAction';

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


export const _setParameters = function (parameters) {
  return (dispatch) => {
    const SETTINGS_KEY = 'age_parameter'
    const settingsObj = { parameters: parameters }
    console.log("----------setting object", settingsObj)
    AsyncStorage.setItem(SETTINGS_KEY, JSON.stringify(settingsObj))
    dispatch(setParameters(parameters));
  }
}

export const _getParameters = function () {
  return (dispatch) => {
    AsyncStorage.getItem('age_parameter').then((value) => {
      let parameters;
      // console.log("---- get value ---", JSON.parse(value).parameters.length)
      if (value == null || JSON.parse(value).parameters.length != 2) {
        parameters = [18, 30]
        console.log("-------in if get params", parameters)
      } else {
        parameters = JSON.parse(value).parameters
        console.log("-------in esle get params", parameters)
      }
      dispatch(getParameters(parameters));
    }).done();
  }
}
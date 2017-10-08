import * as types from './nicknameActionTypes';

//Each function change the state of the store

//Waiting
export const setNicknamePending = function (isnickNamePending) {
  console.log("setNicknamePending ACTION")
  return {
    type: types.SET_NICKNAME_PENDING,
    isFetching: isnickNamePending,
    isNicknameGood: false,
    isNicknameError: false,
    opacity: 1,
    disabled: false,
  };
}
//Succes
export const setNicknameSucess = function (text) {
  console.log("setNicknameSucess ACTION")
  return {
    type: types.SET_NICKNAME_SUCCESS,
    isFetching: false,
    isNicknameGood: true,
    isNicknameError: false,
    opacity: 1,
    disabled: false,
  };
}

//Error
export const setNicknameErorr = function () {
  console.log("setNicknameError ACTION")
  return {
    type: types.SET_NICKNAME_ERROR,
    isFetching: false,
    isNicknameGood: false,
    isNicknameError: true,
    opacity: 1,
    disabled: false
  };
}

//_changeTextValide
export const setChangeTextValide = function () {
  console.log("setChangeTextValide ACTION")
  return {
    type: types.SET_CHANGE_TEXT_VALIDE,
    isFetching: false,
    isNicknameGood: false,
    isNicknameError: false,
    opacity: 1,
    disabled: false
  };
}

//_changeTextInvalide
export const setChangeTextInvalide = function () {
  console.log("setChangeTextInvalide ACTION")
  return {
    type: types.SET_CHANGE_TEXT_INVALIDE,
    isFetching: false,
    isNicknameGood: false,
    isNicknameError: false,
    opacity: 0.1,
    disabled: true
  };
}


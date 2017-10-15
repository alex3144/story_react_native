import * as types from './authActionTypes';
 
//Each function change the state of the store
//Waiting
export const setLoginPending = function(isLoginPending) {
  // console.log("setLoginPending ACTION")
  return {
    type: types.SET_LOGIN_PENDING,
    isFetching: isLoginPending,
    isLoginError: false,
    isAuthenticated: false,
  };
}
//Succes
export const  setLoginSuccess = function(isLoginSuccess) {
  // console.log("setLoginSuccess ACTION")
  return {
    type: types.SET_LOGIN_SUCCESS,
    isFetching: isLoginSuccess,
    isLoginError: false,
    isAuthenticated: true,
  };
}
//Error
export const setLoginError =  function (loginError, message) {
  // console.log("setLoginError ACTION")
  return {
    type: types.SET_LOGIN_ERROR,
    isFetching : loginError,
    isLoginError: true,
    isAuthenticated: false,
    message
  }
}
//Cancel
export const  setLoginCanceled = function (loginCancel, message) {
  // console.log("setLoginCanceled ACTION")
  return {
    type: types.SET_LOGIN_CANCEL,
    isFetching : loginCancel,
    isLoginError: true,
    isAuthenticated: false,
    message
  }
}
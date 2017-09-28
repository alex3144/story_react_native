import * as types from './actionTypes';
import auth from '../actionAsync/auth/auth';
 
export const setLoginPending = function(isLoginPending) {
  console.log("setLoginPending ACTION")
  return {
    type: types.SET_LOGIN_PENDING,
    isFetching: isLoginPending,
    isLoginError: false,
    isAuthenticated: false,
  };
}
 
export const  setLoginSuccess = function(isLoginSuccess, token) {
  console.log("setLoginSuccess ACTION")
  return {
    type: types.SET_LOGIN_SUCCESS,
    isFetching: isLoginSuccess,
    isLoginError: false,
    isAuthenticated: true,
    token
  };
}
 
export const setLoginError =  function (loginError, message) {
  console.log("setLoginError ACTION")
  return {
    type: types.SET_LOGIN_ERROR,
    isFetching : loginError,
    isLoginError: true,
    isAuthenticated: false,
    message
  }
}

export const  setLoginCanceled = function (loginCancel, message) {
  console.log("setLoginCanceled ACTION")
  return {
    type: types.SET_LOGIN_CANCEL,
    isFetching : loginCancel,
    isLoginError: true,
    isAuthenticated: false,
    message
  }
}
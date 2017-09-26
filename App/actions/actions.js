import * as types from './actionTypes';
 
function setLoginPending(isLoginPending) {
  return {
    type: types.SET_LOGIN_PENDING,
    isLoginPending
  };
}
 
function setLoginSuccess(isLoginSuccess) {
  return {
    type: types.SET_LOGIN_SUCCESS,
    isLoginSuccess
  };
}
 
function setLoginError(loginError) {
  return {
    type: types.SET_LOGIN_ERROR,
    loginError
  }
}
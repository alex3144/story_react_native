import * as types from '../actions/actionTypes';


export default function auth(state = {
  isFetching: false,
  // isAuthenticated: localStorage.getItem('id_token') ? true : false
  isAuthenticated: false,
}, action) {
  // console.log(action);
  switch (action.type) {
    case types.SET_LOGIN_PENDING:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        isLoginError: false,
        user: action.token
      })
    case types.SET_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        isLoginError: false,
        errorMessage: '',
      })
    case types.SET_LOGIN_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        isLoginError: true,
        errorMessage: action.message
      })
    case types.SET_LOGIN_CANCEL:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        isLoginError: true,
        errorMessage: action.message
      })
    default:
      return state
  }
}


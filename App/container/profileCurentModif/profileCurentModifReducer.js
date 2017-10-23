import * as types from './profileCurentModifType';

export default function curentUserSetting(state = {
  isChange: false
}, action) {
  switch (action.type) {
    case types.SET_CURENT_USER:
      return { ...state, user: action.user };
    default:
      return state
  }
}
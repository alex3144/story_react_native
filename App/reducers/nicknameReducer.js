import * as types from '../actions/actionTypes';

export default function nickname(state = {
  opacity: 0.1,
  disabled: true,
  isFetching:false,
  isNicknameGood: false,
  isNicknameError: false,
}, action) {
  console.log("in ninkname reducer", action);
  switch (action.type) {
    case types.SET_NICKNAME_PENDING:
      return { ...state, isFetching: true};
    case types.SET_NICKNAME_SUCCESS:
      return { ...state, isFetching: false, isNicknameGood: true};
    case types.SET_NICKNAME_ERROR:
      return { ...state, isFetching: false, isNicknameGood: false, isNicknameError: true};
    case types.SET_CHANGE_TEXT_VALIDE:
      // console.log("in good action")
      return { ...state, opacity: 1, disabled: false};
    case types. SET_CHANGE_TEXT_INVALIDE:
      return { ...state, opacity: 0.1, disabled: true};
    default:
      return state
  }
}


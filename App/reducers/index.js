
import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import NicknameReducer from './nicknameReducer';

export default combineReducers({
  authReducer: AuthReducer,
  nicknameReducer: NicknameReducer
})
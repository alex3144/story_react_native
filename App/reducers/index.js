
import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import NicknameReducer from './nicknameReducer';
import ProfileReducer from './profileReducer';

export default combineReducers({
  authReducer: AuthReducer,
  nicknameReducer: NicknameReducer,
  profileReducer: ProfileReducer,
})
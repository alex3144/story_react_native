
import { combineReducers } from 'redux';
import AuthReducer from './container/connexion/authReducer';
import NicknameReducer from './container/nickname/nicknameReducer';
import ProfileReducer from './container/home/homeReducer';

export default combineReducers({
  authReducer: AuthReducer,
  nicknameReducer: NicknameReducer,
  profileReducer: ProfileReducer,
})
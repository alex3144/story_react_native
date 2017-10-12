
import { combineReducers } from 'redux';
import AuthReducer from './container/connexion/authReducer';
import NicknameReducer from './container/nickname/nicknameReducer';
import ProfileReducer from './container/home/homeReducer';
import PhotoReducer from './container/photo/photoReducer';
import ParametersReducer from './container/parameters/parametersReducer';

export default combineReducers({
  authReducer: AuthReducer,
  nicknameReducer: NicknameReducer,
  profileReducer: ProfileReducer,
  photoReducer: PhotoReducer,
  parametersReducer: ParametersReducer, 
})
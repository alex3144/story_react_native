
import { combineReducers } from 'redux';
import AuthReducer from './container/connexion/authReducer';
import HomeReducer from './container/home/homeReducer';
import PhotoReducer from './container/photo/photoReducer';
import ParametersReducer from './container/parameters/parametersReducer';

export default combineReducers({
  authReducer: AuthReducer,
  profileReducer: HomeReducer,
  photoReducer: PhotoReducer,
  parametersReducer: ParametersReducer, 
})
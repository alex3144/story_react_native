
import { combineReducers } from 'redux';
import AuthReducer from './container/connexion/authReducer';
import HomeReducer from './container/home/homeReducer';
import PhotoReducer from './container/photo/photoReducer';
import ParametersReducer from './container/parameters/parametersReducer';
import ProfilCurentModifReducer from './container/profileCurentModif/profileCurentModifReducer';

export default combineReducers({
  authReducer: AuthReducer,
  homeReducer: HomeReducer,
  photoReducer: PhotoReducer,
  parametersReducer: ParametersReducer, 
  profilCurentModifReducer: ProfilCurentModifReducer, 
})
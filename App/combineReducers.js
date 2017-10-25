
import { combineReducers } from 'redux';
import AuthReducer from './container/viewContainer/connexion/authReducer';
import HomeReducer from './container/viewContainer/home/homeReducer';
import ParametersReducer from './container/viewContainer/parameters/parametersReducer';
import ProfilCurentModifReducer from './container/viewContainer/profileCurentModif/profileCurentModifReducer';
import UserReducer from './container/technicalContainer/user/userReducer';

export default combineReducers({
  authReducer: AuthReducer,
  homeReducer: HomeReducer,
  parametersReducer: ParametersReducer, 
  profilCurentModifReducer: ProfilCurentModifReducer, 
  userReducer: UserReducer,
})
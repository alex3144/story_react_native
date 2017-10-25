import * as types from './profileCurentModifType';

export default function changeProfil(state = {
  isChange: false
  }, action) {
  // console.log(" ------ current user modif reducer -----", action) 
  switch (action.type) {
    case types.SET_PHOTO:
      // console.log("photo", action.photo)
      return { ...state, photo: action.photo, index:action.index};
    default:
      return state
  }
}
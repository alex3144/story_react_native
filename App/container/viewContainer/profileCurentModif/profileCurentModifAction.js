import * as types from './profileCurentModifType';

//Each function change the state of the store
//Waiting
export const _setPhoto = function(photo, index) {
 console.log("setPhoto ACTION", photo) 
 return {
   type: types.SET_PHOTO,
   isChange: true,
   photo,
   index
 };
}
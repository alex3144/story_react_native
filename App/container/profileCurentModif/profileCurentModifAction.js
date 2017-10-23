import * as types from './profileCurentModifType';

//Each function change the state of the store
//Waiting
export const setCurentUser = function() {
 console.log("setCurentUser ACTION")
 return {
   type: types.SET_CURENT_USER,
   isChange: true
 };
}
import * as type from './photoActionType';

export default function photo(state = {
   isChange: true,
}, action) {
   console.log("---------- in photo reducer -----------")
   switch (action.type) {
      case type.SET_BUTTON_MODIFIER:
         return { ...state, isChange: action.isChange }
      case type.SET_BUTTON_PELLICULE:
         return{ ...state, isChange: action.isChange }
      default:
         return state
   }
}



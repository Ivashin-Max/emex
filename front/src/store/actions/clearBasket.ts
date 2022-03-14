import { Dispatch } from "redux"
import { BasketAction, BasketActionTypes } from "../../types/basket"


export const clearBasket = () => {
  return (dispatch: Dispatch<BasketAction>) => {
    dispatch({ type: BasketActionTypes.CLEAR_BASKET });
  }
}
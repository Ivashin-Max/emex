import { Dispatch } from "redux"
import { BasketAction, BasketActionTypes, BasketItem } from "../../types/basket"


export const removeBasketItem = (basketItem: BasketItem) => {
  return (dispatch: Dispatch<BasketAction>) => {
    dispatch({ type: BasketActionTypes.REMOVE_ITEM, payload: basketItem })
  }
}

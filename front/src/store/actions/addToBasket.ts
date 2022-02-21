import { Dispatch } from "redux"
import { BasketAction, BasketActionTypes, BasketItem } from "../../types/basket"



export const addToBasket = (basketItem: BasketItem) => {
  return (dispatch: Dispatch<BasketAction>) => {
    dispatch({ type: BasketActionTypes.ADD_ITEM, payload: basketItem })
  }
}
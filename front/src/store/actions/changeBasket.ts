import { Dispatch } from "redux"
import { BasketAction, BasketActionTypes, ChangeAmountPayload } from "../../types/basket"
import { RootState } from '../index';


export const changeBasket = (basketItem: any, operation: string) => {


  return (dispatch: Dispatch<BasketAction>, getState: () => RootState) => {

    const itemToAddId = basketItem.id;
    const basketItems = getState().basket.items;

    let firstItem = true;
    for (let i = 0; i < basketItems.length; i++) {
      const currentItem = basketItems[i];
      if (itemToAddId === currentItem.id) {
        firstItem = false;
        if (currentItem.basketAmount === basketItem.amount && operation === '+') break;
        const payload: ChangeAmountPayload = {
          id: basketItem.id,
          operation: operation
        };
        dispatch({ type: BasketActionTypes.CHANGE_AMOUNT, payload: payload })
        break;
      }


    }

    if (firstItem) {
      const firstBasketItem = { ...basketItem };
      firstBasketItem.basketAmount = 1;
      dispatch({ type: BasketActionTypes.ADD_ITEM, payload: firstBasketItem })
    }

  }
}
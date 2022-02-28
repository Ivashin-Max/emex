import { Dispatch } from "redux"
import { BasketAction, BasketActionTypes, ChangeAmountPayload } from "../../types/basket"
import { RootState } from '../index';


export const changeBasket = (basketItem: any, operation: string) => {


  return (dispatch: Dispatch<BasketAction>, getState: () => RootState) => {
    const itemToAddId = basketItem.id;
    const basketItems = getState().basket.items;
    let needToAdd = true;
    for (let i = 0; i < basketItems.length; i++) {
      const basketItem = basketItems[i];
      if (itemToAddId === basketItem.id) {
        needToAdd = false;
        const payload: ChangeAmountPayload = {
          id: basketItem.id,
          operation: operation
        };
        dispatch({ type: BasketActionTypes.CHANGE_AMOUNT, payload: payload })
        const basketItems1 = getState().basket.items;
        // console.log('basketItems1', basketItems1);
        break;
      }


    }

    if (needToAdd) {
      // console.log('FirstBasket');

      const firstBasketItem = { ...basketItem };
      firstBasketItem.basketAmount = 1;

      dispatch({ type: BasketActionTypes.ADD_ITEM, payload: firstBasketItem })
      const basketItems1 = getState().basket.items;
      // console.log('basketItems1', basketItems1);
    }

  }
}

export interface BasketItem {
  id: string;
  amount: number;
  brand: string;
  name: string;
  serial: string;
  basketAmount: number;
  price: number;
}

export interface UpdateBasketItem {
  id: number;
  amount: number;
}

export interface BasketState {
  items: BasketItem[];
  basketAmount: number;
}

export enum BasketActionTypes {
  ADD_ITEM = "ADD_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
  CHANGE_AMOUNT = "CHANGE_AMOUNT",
  CLEAR_BASKET = "CLEAR_BASKET",
}

export interface ChangeAmountPayload {
  operation: string
  id: string
}


interface AddItemAction {
  type: BasketActionTypes.ADD_ITEM
  payload: BasketItem
}

interface ClearBasketAction {
  type: BasketActionTypes.CLEAR_BASKET
}

interface RemoveItemAction {
  type: BasketActionTypes.REMOVE_ITEM;
  payload: BasketItem
}
interface ChangeAmountAction {
  type: BasketActionTypes.CHANGE_AMOUNT;
  payload: ChangeAmountPayload;
}







export type BasketAction = AddItemAction | RemoveItemAction | ChangeAmountAction | ClearBasketAction
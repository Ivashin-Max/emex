export interface BasketItem {
  id: number;
  amount: string;
  brand: string;
  name: string;
  serial: string;
  basketAmount: string;
  price: number;
}

export interface BasketState {
  items: BasketItem[];
}

export enum BasketActionTypes {
  ADD_ITEM = "ADD_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
  CHANGE_AMOUNT = "CHANGE_AMOUNT"
}


interface AddItemAction {
  type: BasketActionTypes.ADD_ITEM
  payload: BasketItem
}
interface RemoveItemAction {
  type: BasketActionTypes.REMOVE_ITEM;
  payload: any[]
}
interface ChangeAmountAction {
  type: BasketActionTypes.CHANGE_AMOUNT;
  payload: string
}


export type BasketAction = AddItemAction | RemoveItemAction | ChangeAmountAction
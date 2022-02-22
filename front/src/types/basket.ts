export interface BasketItem {
  id: string;
  amount: string;
  brand: string;
  name: string;
  serial: string;
  basketAmount: number;
  price: number;
}

export interface BasketState {
  items: BasketItem[];
  basketAmount: number;
}

export enum BasketActionTypes {
  ADD_ITEM = "ADD_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
  CHANGE_AMOUNT = "CHANGE_AMOUNT",
}


interface AddItemAction {
  type: BasketActionTypes.ADD_ITEM
  payload: BasketItem
}
interface RemoveItemAction {
  type: BasketActionTypes.REMOVE_ITEM;
  payload: any[]
}

export interface ChangeAmountPayload {
  operation: string,
  id: string
}
interface ChangeAmountAction {
  type: BasketActionTypes.CHANGE_AMOUNT;
  payload: ChangeAmountPayload;
}


export type BasketAction = AddItemAction | RemoveItemAction | ChangeAmountAction



export interface ItemsState {
  items: any[];
  loading: boolean;
  error: null | string;
}

export enum ItemActionTypes {
  FETCH_ITEMS = "FETCH_ITEMS",
  FETCH_ITEMS_SUCCESS = "FETCH_ITEMS_SUCCESS",
  FETCH_ITEMS_ERROR = "FETCH_ITEMS_ERROR",
}

interface FetchItemsAction {
  type: ItemActionTypes.FETCH_ITEMS
}
interface FetchItemsSuccessAction {
  type: ItemActionTypes.FETCH_ITEMS_SUCCESS;
  payload: any[]
}
interface FetchItemsErrorAction {
  type: ItemActionTypes.FETCH_ITEMS_ERROR;
  payload: string
}


export type ItemAction = FetchItemsAction | FetchItemsSuccessAction | FetchItemsErrorAction

import { ItemsState, ItemAction, ItemActionTypes } from "../../types/items"

const initialState: ItemsState = {
  items: [],
  loading: false,
  error: null
}

export const itemsReducer = (state = initialState, action: ItemAction): ItemsState => {
  switch (action.type) {
    case ItemActionTypes.FETCH_ITEMS:
      return { loading: true, error: null, items: [] }
    case ItemActionTypes.FETCH_ITEMS_SUCCESS:
      return { loading: true, error: null, items: action.payload }
    case ItemActionTypes.FETCH_ITEMS_ERROR:
      return { loading: true, error: action.payload, items: [] }
    default:
      return state
  }
}
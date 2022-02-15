


import axios from "axios"
import { Dispatch } from "redux"
import { ItemAction, ItemActionTypes } from "../../types/items"
import url from "../../static/url.json"


export const fetchItems = () => {
  return async (dispatch: Dispatch<ItemAction>) => {
    try {
      dispatch({ type: ItemActionTypes.FETCH_ITEMS })
      const response = await axios.get(url.placehold)
      dispatch({ type: ItemActionTypes.FETCH_ITEMS_SUCCESS, payload: response.data })
    } catch (error) {
      dispatch({ type: ItemActionTypes.FETCH_ITEMS_ERROR, payload: "Ошибка загрузки" })
    }
  }
}
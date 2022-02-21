import { BasketState, BasketAction, BasketActionTypes } from "../../types/basket"

const initialState: BasketState = {
  items: [],
}

export const basketReducer = (state = initialState, action: BasketAction): BasketState => {
  switch (action.type) {
    case BasketActionTypes.ADD_ITEM:
      return { items: [...state.items, action.payload] }
    case BasketActionTypes.CHANGE_AMOUNT:
      return { items: [] }
    case BasketActionTypes.REMOVE_ITEM:
      return { items: [] }
    default:
      return state
  }
}
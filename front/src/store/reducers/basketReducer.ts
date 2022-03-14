import { BasketState, BasketAction, BasketActionTypes, BasketItem } from "../../types/basket"

const initialState: BasketState = {
  items: [],
  basketAmount: 0,
}

const changeBasketAmount = (state: BasketState, id: string, operation: string): BasketItem[] => {
  let index = -1;
  for (let i = 0; i < state.items.length; i++) {
    const item = state.items[i];
    if (id === item.id) {
      index = i
      break
    }
  }
  const newArray = [...state.items];
  if (operation === '+') newArray[index].basketAmount = newArray[index].basketAmount + 1;
  if (operation === '-') {
    newArray[index].basketAmount = newArray[index].basketAmount - 1;
  }
  return newArray
}

export const basketReducer = (state = initialState, action: BasketAction): BasketState => {
  switch (action.type) {
    case BasketActionTypes.ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
        basketAmount: state.basketAmount + 1,
      }
    case BasketActionTypes.CHANGE_AMOUNT:

      return {
        ...state,
        items: changeBasketAmount(state, action.payload.id, action.payload.operation),
        basketAmount: action.payload.operation === '+' ? state.basketAmount + 1 : state.basketAmount - 1
      }
    case BasketActionTypes.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
        basketAmount: state.basketAmount - action.payload.basketAmount
      }

    case BasketActionTypes.CLEAR_BASKET:
      return {
        ...state,
        items: [],
        basketAmount: 0
      }
    default:
      return state
  }
}
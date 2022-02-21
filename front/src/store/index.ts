import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import { itemsReducer } from "./reducers/itemsReducer";
import { basketReducer } from "./reducers/basketReducer";


const rootReducer = combineReducers({
  item: itemsReducer,
  basket: basketReducer,
})

export type RootState = ReturnType<typeof rootReducer>


export const store = createStore(rootReducer, applyMiddleware(thunk))
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import { itemsReducer } from "./reducers/itemsReducer";


const rootReducer = combineReducers({
  item: itemsReducer,
})

export type RootState = ReturnType<typeof rootReducer>


export const store = createStore(rootReducer, applyMiddleware(thunk))
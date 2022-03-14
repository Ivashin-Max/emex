import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";

import { basketReducer } from "./reducers/basketReducer";


const rootReducer = combineReducers({
  basket: basketReducer,
})

export type RootState = ReturnType<typeof rootReducer>


export const store = createStore(rootReducer, applyMiddleware(thunk))
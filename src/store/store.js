import { legacy_createStore as createStore, combineReducers } from "redux";
import { countReducer } from "./countReducer";
import { userReducer } from "./userReducer";
import { themeReducer } from "./themeReducer";

const rootReducer = combineReducers({
  count: countReducer,
  user: userReducer,
  theme: themeReducer
})

export const store = createStore(rootReducer)
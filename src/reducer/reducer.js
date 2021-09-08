import { combineReducers } from "redux";

import { appReducer } from "./app";
import { userReducer } from "./user";

export const reducer = combineReducers({
  app: appReducer,
  user: userReducer,
});

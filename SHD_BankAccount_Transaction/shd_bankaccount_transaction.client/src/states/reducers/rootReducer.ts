import { combineReducers } from "redux";
import { accountReducer } from "./account/accountReducer";
export const rootReducer = combineReducers({
  account: accountReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

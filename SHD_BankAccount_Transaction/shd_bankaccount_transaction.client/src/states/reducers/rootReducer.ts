import { combineReducers } from "redux";
import { accountReducer } from "./account/accountReducer";
import { transactionReducer } from "./transaction/transactionReducer";

export const rootReducer = combineReducers({
  account: accountReducer,
  transaction: transactionReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

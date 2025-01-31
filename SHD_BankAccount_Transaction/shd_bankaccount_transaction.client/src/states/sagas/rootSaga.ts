import { all } from "redux-saga/effects";
import { accountSaga } from "./account/accountSaga";
import { transactionSaga } from "./transaction/transactionSaga";

export function* rootSaga() {
  yield all([accountSaga(), transactionSaga()]);
}

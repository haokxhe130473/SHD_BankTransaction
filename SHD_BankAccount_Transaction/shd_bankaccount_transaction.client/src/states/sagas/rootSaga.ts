import { all } from "redux-saga/effects"
import { accountSaga } from "./account/accountSaga"
export function* rootSaga() {
    yield all([
        accountSaga(),
    ])
}
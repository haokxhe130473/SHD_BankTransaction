import { call, put, takeEvery } from "redux-saga/effects";
import { rootAction } from "../../actions/rootAction";
import { eAccountActionTypeIds } from "../../action-types/account/IAccountActionTypes";
import { apiWrapper } from "../../../apis/apiWrapper";
import { IBaseResponeModel } from "../../../models/response/IBaseResponeModel";

export function* accountSaga() {
  yield takeEvery(eAccountActionTypeIds.GET_ACCOUNT_START, loadWorker);
  yield takeEvery(eAccountActionTypeIds.CREATE_ACCOUNT_START, createWorker);
  yield takeEvery(eAccountActionTypeIds.UPDATE_ACCOUNT_START, updateWorker);
  yield takeEvery(eAccountActionTypeIds.DELETE_ACCOUNT_START, deleteWorker);
}

function* loadWorker(): Generator<unknown, void, IBaseResponeModel> {
  const res = yield call(apiWrapper.account.getAllAccounts);
  if (res.is_success) {
    yield put(rootAction.account.getAccountSuccess(res.data));
  } else {
    yield put(
      rootAction.account.getAccountError(res.message || "Cannot load accounts!")
    );
  }
}

function* createWorker(
  action: ReturnType<typeof rootAction.account.createAccountStart>
): Generator<unknown, void, IBaseResponeModel> {
  const res = yield call(apiWrapper.account.createAccount, action.payload);
  if (res.is_success) {
    yield put(rootAction.account.createAccountSuccess(res.data));
  } else {
    yield put(
      rootAction.account.createAccountError(
        res.message || "Cannot create account!"
      )
    );
  }
}

function* updateWorker(
  action: ReturnType<typeof rootAction.account.updateAccountStart>
): Generator<unknown, void, IBaseResponeModel> {
  const res = yield call(apiWrapper.account.updateAccount, action.payload);
  if (res.is_success) {
    yield put(rootAction.account.updateAccountSuccess(res.data));
  } else {
    yield put(
      rootAction.account.updateAccountError(
        res.message || "Cannot update account!"
      )
    );
  }
}

function* deleteWorker(
  action: ReturnType<typeof rootAction.account.deleteAccountStart>
): Generator<unknown, void, IBaseResponeModel> {
  const res = yield call(apiWrapper.account.deleteAccount, action.payload);
  if (res.is_success) {
    yield put(rootAction.account.deleteAccountSuccess(action.payload));
  } else {
    yield put(
      rootAction.account.deleteAccountError(
        res.message || "Cannot delete account!"
      )
    );
  }
}

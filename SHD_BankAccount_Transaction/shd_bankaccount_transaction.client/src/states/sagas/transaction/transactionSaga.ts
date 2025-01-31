import { call, put, takeEvery } from "redux-saga/effects";
import { rootAction } from "../../actions/rootAction";
import { eTransactionActionTypeIds } from "../../action-types/transaction/ITransactionActionTypes";
import { apiWrapper } from "../../../apis/apiWrapper";
import { IBaseResponeModel } from "../../../models/response/IBaseResponeModel";

export function* transactionSaga() {
  yield takeEvery(eTransactionActionTypeIds.GET_TRANSACTION_START, loadWorker);
  yield takeEvery(
    eTransactionActionTypeIds.GET_BY_ACCOUNT_ID_START,
    loadByAccountIdWorker
  );
  yield takeEvery(
    eTransactionActionTypeIds.CREATE_TRANSACTION_START,
    createWorker
  );
  yield takeEvery(
    eTransactionActionTypeIds.UPDATE_TRANSACTION_START,
    updateWorker
  );
  yield takeEvery(
    eTransactionActionTypeIds.DELETE_TRANSACTION_START,
    deleteWorker
  );
}

function* loadWorker(): Generator<unknown, void, IBaseResponeModel> {
  const res = yield call(apiWrapper.transaction.getAllTransactions);
  if (res.is_success) {
    yield put(rootAction.transaction.getTransactionSuccess(res.data));
  } else {
    yield put(
      rootAction.transaction.getTransactionError(
        res.message || "Cannot load transactions!"
      )
    );
  }
}

function* loadByAccountIdWorker(
  action: ReturnType<typeof rootAction.transaction.getByAccountIdStart>
): Generator<unknown, void, IBaseResponeModel> {
  const res = yield call(
    apiWrapper.transaction.getTransactionByAccountId,
    action.payload
  );
  if (res.is_success) {
    yield put(rootAction.transaction.getTransactionSuccess(res.data));
  } else {
    yield put(
      rootAction.transaction.getTransactionError(
        res.message || "Cannot load transactions!"
      )
    );
  }
}

function* createWorker(
  action: ReturnType<typeof rootAction.transaction.createTransactionStart>
): Generator<unknown, void, IBaseResponeModel> {
  const res = yield call(
    apiWrapper.transaction.createTransaction,
    action.payload
  );
  if (res.is_success) {
    yield put(rootAction.transaction.createTransactionSuccess(res.data));
  } else {
    yield put(
      rootAction.transaction.createTransactionError(
        res.message || "Cannot create transaction!"
      )
    );
  }
}

function* updateWorker(
  action: ReturnType<typeof rootAction.transaction.updateTransactionStart>
): Generator<unknown, void, IBaseResponeModel> {
  const res = yield call(
    apiWrapper.transaction.updateTransaction,
    action.payload
  );
  if (res.is_success) {
    yield put(rootAction.transaction.updateTransactionSuccess(res.data));
  } else {
    yield put(
      rootAction.transaction.updateTransactionError(
        res.message || "Cannot update transaction!"
      )
    );
  }
}

function* deleteWorker(
  action: ReturnType<typeof rootAction.transaction.deleteTransactionStart>
): Generator<unknown, void, IBaseResponeModel> {
  const res = yield call(
    apiWrapper.transaction.deleteTransaction,
    action.payload
  );
  if (res.is_success) {
    yield put(rootAction.transaction.deleteTransactionSuccess(action.payload));
  } else {
    yield put(
      rootAction.transaction.deleteTransactionError(
        res.message || "Cannot delete transaction!"
      )
    );
  }
}

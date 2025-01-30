import { call, put, takeEvery } from "redux-saga/effects";
import { rootAction } from "../../actions/rootAction";
import { eAccountActionTypeIds } from "../../action-types/account/IAccountActionTypes";
import { apiWrapper } from "../../../apis/apiWrapper";
import { IBaseResponeModel } from "../../../models/response/IBaseResponeModel";
// import { IKpiOrkDataItemRequest } from "../../../models/request/kpi-ork/IKpiOrkDataItemRequest";

export function* accountSaga() {
  yield takeEvery(eAccountActionTypeIds.GET_ACCOUNT_START, loadWorker);
//   yield takeEvery(eKpiOrkActionTypeIds.INSERT_UPDATE_KPI_ORK_START, loadWorkerInsertUpdate);

}

function* loadWorker(): Generator<unknown, void, IBaseResponeModel> {
  const res = yield call(apiWrapper.account.getAccount);
  if (res.is_success) {
    yield put(rootAction.account.getAccountSuccess(res.data));
  } else {
    yield put(
      rootAction.account.getAccountError(res.message || "Cannot load account!")
    );
  }
}
// function* loadWorkerInsertUpdate(action: {
//   type: string;
//   payload: IKpiOrkDataItemRequest[];
// }) {
//   try {
//     const res: IBaseResponeModel = yield call(
//       apiWrapper.kpiOrk.insertUpdate,
//       action.payload
//     );

//     if (res.is_success) {
//       console.log(res.data);
//       yield put(rootAction.kpiOrk.insertUpdateKpiOrkSuccess(res.data));
//       yield put(
//         rootAction.notification.showNotification({
//           message: "Cập nhật thành công",
//           type: "success",
//         })
//       );
//     } else {
//       // Hiển thị thông báo lỗi từ response
//       yield put(
//         rootAction.kpiOrk.insertUpdateKpiOrkError(
//           res.message || "Lưu không thành công"
//         )
//       );
//       yield put(
//         rootAction.notification.showNotification({
//           message: "Lưu không thành công",
//           type: "error",
//         })
//       );
//     }
//   } catch (error) {
//     // Xử lý lỗi không mong muốn (network error, server error, v.v.)
//     yield put(
//       rootAction.kpiOrk.insertUpdateKpiOrkError(
//         "Lưu không thành công"
//       )
//     );
//     yield put(
//       rootAction.notification.showNotification({
//         message: "Lưu không thành công",
//         type: "error",
//       })
//     );
//   }
// }
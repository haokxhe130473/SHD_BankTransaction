import { ITransactionItemRequest } from "../../../models/request/transaction/ITransactionItemRequest";
import { ITransactionItemResponse } from "../../../models/response/transaction/ITransactionItemResponse";
import { eTransactionActionTypeIds } from "../../action-types/transaction/ITransactionActionTypes";
import { baseAction } from "../BaseActionResult";

export const transactionActions = {
  // Lấy danh sách giao dịch
  getTransactionStart: () =>
    baseAction(eTransactionActionTypeIds.GET_TRANSACTION_START, undefined),
  getTransactionSuccess: (response: ITransactionItemResponse[]) =>
    baseAction(eTransactionActionTypeIds.GET_TRANSACTION_SUCCESS, response),
  getTransactionError: (err: string) =>
    baseAction(eTransactionActionTypeIds.GET_TRANSACTION_ERROR, err),

  //select by account Id
  getByAccountIdStart: (request: number) =>
    baseAction(eTransactionActionTypeIds.GET_BY_ACCOUNT_ID_START, request),
  getByAccountIdSuccess: (response: ITransactionItemResponse[]) =>
    baseAction(eTransactionActionTypeIds.GET_BY_ACCOUNT_ID_SUCCESS, response),
  getByAccountIdError: (err: string) =>
    baseAction(eTransactionActionTypeIds.GET_TRANSACTION_ERROR, err),

  // Tạo mới giao dịch
  createTransactionStart: (request: ITransactionItemRequest) =>
    baseAction(eTransactionActionTypeIds.CREATE_TRANSACTION_START, request),
  createTransactionSuccess: (response: ITransactionItemRequest) =>
    baseAction(eTransactionActionTypeIds.CREATE_TRANSACTION_SUCCESS, response),
  createTransactionError: (err: string) =>
    baseAction(eTransactionActionTypeIds.CREATE_TRANSACTION_ERROR, err),

  // Cập nhật giao dịch
  updateTransactionStart: (request: ITransactionItemRequest) =>
    baseAction(eTransactionActionTypeIds.UPDATE_TRANSACTION_START, request),
  updateTransactionSuccess: (response: ITransactionItemRequest) =>
    baseAction(eTransactionActionTypeIds.UPDATE_TRANSACTION_SUCCESS, response),
  updateTransactionError: (err: string) =>
    baseAction(eTransactionActionTypeIds.UPDATE_TRANSACTION_ERROR, err),

  // Xóa giao dịch
  deleteTransactionStart: (request: number) =>
    baseAction(eTransactionActionTypeIds.DELETE_TRANSACTION_START, request),
  deleteTransactionSuccess: (transactionId: number) =>
    baseAction(
      eTransactionActionTypeIds.DELETE_TRANSACTION_SUCCESS,
      transactionId
    ),
  deleteTransactionError: (err: string) =>
    baseAction(eTransactionActionTypeIds.DELETE_TRANSACTION_ERROR, err),
};

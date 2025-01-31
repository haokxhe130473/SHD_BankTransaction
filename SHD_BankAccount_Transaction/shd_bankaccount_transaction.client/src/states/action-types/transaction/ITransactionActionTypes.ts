import { ITransactionItemResponse } from "../../../models/response/transaction/ITransactionItemResponse";
import { IActionBase } from "../IActonBase";

export enum eTransactionActionTypeIds {
  // Lấy danh sách giao dịch
  GET_TRANSACTION_START = "GET_TRANSACTION_START",
  GET_TRANSACTION_SUCCESS = "GET_TRANSACTION_SUCCESS",
  GET_TRANSACTION_ERROR = "GET_TRANSACTION_ERROR",

  // Lấy danh sách giao dịch
  GET_BY_ACCOUNT_ID_START = "GET_BY_ACCOUNT_ID_START",
  GET_BY_ACCOUNT_ID_SUCCESS = "GET_BY_ACCOUNT_ID_SUCCESS",
  GET_BY_ACCOUNT_ID_ERROR = "GET_BY_ACCOUNT_ID_ERROR",

  // Tạo mới giao dịch
  CREATE_TRANSACTION_START = "CREATE_TRANSACTION_START",
  CREATE_TRANSACTION_SUCCESS = "CREATE_TRANSACTION_SUCCESS",
  CREATE_TRANSACTION_ERROR = "CREATE_TRANSACTION_ERROR",

  // Cập nhật giao dịch
  UPDATE_TRANSACTION_START = "UPDATE_TRANSACTION_START",
  UPDATE_TRANSACTION_SUCCESS = "UPDATE_TRANSACTION_SUCCESS",
  UPDATE_TRANSACTION_ERROR = "UPDATE_TRANSACTION_ERROR",

  // Xóa giao dịch
  DELETE_TRANSACTION_START = "DELETE_TRANSACTION_START",
  DELETE_TRANSACTION_SUCCESS = "DELETE_TRANSACTION_SUCCESS",
  DELETE_TRANSACTION_ERROR = "DELETE_TRANSACTION_ERROR",
}

// Action types cho việc lấy danh sách giao dịch
export interface IGetTransactionStart
  extends IActionBase<
    eTransactionActionTypeIds.GET_TRANSACTION_START,
    undefined
  > {}
export interface IGetTransactionSuccess
  extends IActionBase<
    eTransactionActionTypeIds.GET_TRANSACTION_SUCCESS,
    ITransactionItemResponse[]
  > {}
export interface IGetTransactionError
  extends IActionBase<
    eTransactionActionTypeIds.GET_TRANSACTION_ERROR,
    string
  > {}

// Action types cho việc lấy danh sách giao dịch by account id
export interface IGetByAccountIdStart
  extends IActionBase<
    eTransactionActionTypeIds.GET_BY_ACCOUNT_ID_START,
    number
  > {}
export interface IGetByAccountIdSuccess
  extends IActionBase<
    eTransactionActionTypeIds.GET_BY_ACCOUNT_ID_SUCCESS,
    ITransactionItemResponse[]
  > {}
export interface IGetByAccountIdError
  extends IActionBase<
    eTransactionActionTypeIds.GET_BY_ACCOUNT_ID_ERROR,
    string
  > {}

// Action types cho việc tạo mới giao dịch
export interface ICreateTransactionStart
  extends IActionBase<
    eTransactionActionTypeIds.CREATE_TRANSACTION_START,
    undefined
  > {}
export interface ICreateTransactionSuccess
  extends IActionBase<
    eTransactionActionTypeIds.CREATE_TRANSACTION_SUCCESS,
    ITransactionItemResponse
  > {}
export interface ICreateTransactionError
  extends IActionBase<
    eTransactionActionTypeIds.CREATE_TRANSACTION_ERROR,
    string
  > {}

// Action types cho việc cập nhật giao dịch
export interface IUpdateTransactionStart
  extends IActionBase<
    eTransactionActionTypeIds.UPDATE_TRANSACTION_START,
    undefined
  > {}
export interface IUpdateTransactionSuccess
  extends IActionBase<
    eTransactionActionTypeIds.UPDATE_TRANSACTION_SUCCESS,
    ITransactionItemResponse
  > {}
export interface IUpdateTransactionError
  extends IActionBase<
    eTransactionActionTypeIds.UPDATE_TRANSACTION_ERROR,
    string
  > {}

// Action types cho việc xóa giao dịch
export interface IDeleteTransactionStart
  extends IActionBase<
    eTransactionActionTypeIds.DELETE_TRANSACTION_START,
    undefined
  > {}
export interface IDeleteTransactionSuccess
  extends IActionBase<
    eTransactionActionTypeIds.DELETE_TRANSACTION_SUCCESS,
    number // ID của giao dịch đã xóa
  > {}
export interface IDeleteTransactionError
  extends IActionBase<
    eTransactionActionTypeIds.DELETE_TRANSACTION_ERROR,
    string
  > {}

// Tổng hợp tất cả các action types cho transaction
export type ITransactionActionTypes =
  | IGetTransactionStart
  | IGetTransactionSuccess
  | IGetTransactionError
  | IGetByAccountIdStart
  | IGetByAccountIdSuccess
  | IGetByAccountIdError
  | ICreateTransactionStart
  | ICreateTransactionSuccess
  | ICreateTransactionError
  | IUpdateTransactionStart
  | IUpdateTransactionSuccess
  | IUpdateTransactionError
  | IDeleteTransactionStart
  | IDeleteTransactionSuccess
  | IDeleteTransactionError;

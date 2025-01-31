import { IAccountItemResponse } from "../../../models/response/account/IAccountItemResponse";
import { IActionBase } from "../IActonBase";

export enum eAccountActionTypeIds {
    // Lấy danh sách tài khoản
    GET_ACCOUNT_START = "GET_ACCOUNT_START",
    GET_ACCOUNT_SUCCESS = "GET_ACCOUNT_SUCCESS",
    GET_ACCOUNT_ERROR = "GET_ACCOUNT_ERROR",

    // Tạo mới tài khoản
    CREATE_ACCOUNT_START = "CREATE_ACCOUNT_START",
    CREATE_ACCOUNT_SUCCESS = "CREATE_ACCOUNT_SUCCESS",
    CREATE_ACCOUNT_ERROR = "CREATE_ACCOUNT_ERROR",

    // Cập nhật tài khoản
    UPDATE_ACCOUNT_START = "UPDATE_ACCOUNT_START",
    UPDATE_ACCOUNT_SUCCESS = "UPDATE_ACCOUNT_SUCCESS",
    UPDATE_ACCOUNT_ERROR = "UPDATE_ACCOUNT_ERROR",

    // Xóa tài khoản
    DELETE_ACCOUNT_START = "DELETE_ACCOUNT_START",
    DELETE_ACCOUNT_SUCCESS = "DELETE_ACCOUNT_SUCCESS",
    DELETE_ACCOUNT_ERROR = "DELETE_ACCOUNT_ERROR",
}

// Action types cho việc lấy danh sách tài khoản
export interface IGetAccountStart
    extends IActionBase<eAccountActionTypeIds.GET_ACCOUNT_START, undefined> { }
export interface IGetAccountSuccess
    extends IActionBase<
        eAccountActionTypeIds.GET_ACCOUNT_SUCCESS,
        IAccountItemResponse[]
    > { }
export interface IGetAccountError
    extends IActionBase<eAccountActionTypeIds.GET_ACCOUNT_ERROR, string> { }

// Action types cho việc tạo mới tài khoản
export interface ICreateAccountStart
    extends IActionBase<eAccountActionTypeIds.CREATE_ACCOUNT_START, undefined> { }
export interface ICreateAccountSuccess
    extends IActionBase<
        eAccountActionTypeIds.CREATE_ACCOUNT_SUCCESS,
        IAccountItemResponse
    > { }
export interface ICreateAccountError
    extends IActionBase<eAccountActionTypeIds.CREATE_ACCOUNT_ERROR, string> { }

// Action types cho việc cập nhật tài khoản
export interface IUpdateAccountStart
    extends IActionBase<eAccountActionTypeIds.UPDATE_ACCOUNT_START, undefined> { }
export interface IUpdateAccountSuccess
    extends IActionBase<
        eAccountActionTypeIds.UPDATE_ACCOUNT_SUCCESS,
        IAccountItemResponse
    > { }
export interface IUpdateAccountError
    extends IActionBase<eAccountActionTypeIds.UPDATE_ACCOUNT_ERROR, string> { }

// Action types cho việc xóa tài khoản
export interface IDeleteAccountStart
    extends IActionBase<eAccountActionTypeIds.DELETE_ACCOUNT_START, undefined> { }
export interface IDeleteAccountSuccess
    extends IActionBase<
        eAccountActionTypeIds.DELETE_ACCOUNT_SUCCESS,
        number // ID của tài khoản đã xóa
    > { }
export interface IDeleteAccountError
    extends IActionBase<eAccountActionTypeIds.DELETE_ACCOUNT_ERROR, string> { }

// Tổng hợp tất cả các action types cho account
export type IAccountActionTypes =
    | IGetAccountStart
    | IGetAccountSuccess
    | IGetAccountError
    | ICreateAccountStart
    | ICreateAccountSuccess
    | ICreateAccountError
    | IUpdateAccountStart
    | IUpdateAccountSuccess
    | IUpdateAccountError
    | IDeleteAccountStart
    | IDeleteAccountSuccess
    | IDeleteAccountError;
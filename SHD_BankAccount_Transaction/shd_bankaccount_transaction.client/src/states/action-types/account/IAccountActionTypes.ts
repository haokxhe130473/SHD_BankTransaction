import { IAccountItemResponse } from "../../../models/response/account/IAccountItemResponse";
import { IActionBase } from "../IActonBase";

export enum eAccountActionTypeIds {
    GET_ACCOUNT_START = "GET_ACCOUNT_START",
    GET_ACCOUNT_SUCCESS = "GET_ACCOUNT_SUCCESS",
    GET_ACCOUNT_ERROR = "GET_ACCOUNT_ERROR",
}
export interface IGetAccountStart
    extends IActionBase<eAccountActionTypeIds.GET_ACCOUNT_START, undefined> { }
export interface IGetAccountSuccess
    extends IActionBase<
        eAccountActionTypeIds.GET_ACCOUNT_SUCCESS,
        IAccountItemResponse[]
    > { }
export interface IGetAccountError
    extends IActionBase<eAccountActionTypeIds.GET_ACCOUNT_ERROR, string> { }
export type IAccountActionTypes =
    | IGetAccountStart
    | IGetAccountSuccess
    | IGetAccountError
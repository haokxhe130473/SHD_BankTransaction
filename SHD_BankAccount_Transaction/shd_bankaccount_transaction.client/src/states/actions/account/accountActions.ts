import { IAccountItemResponse } from "../../../models/response/account/IAccountItemResponse";
import { eAccountActionTypeIds } from "../../action-types/account/IAccountActionTypes";
import { baseAction } from "../BaseActionResult";

export const accountActions = {
    getAccountStart: () =>
        baseAction(eAccountActionTypeIds.GET_ACCOUNT_START, undefined),
    getAccountSuccess: (respone: IAccountItemResponse[]) =>
        baseAction(eAccountActionTypeIds.GET_ACCOUNT_SUCCESS, respone),
    getAccountError: (err: string) =>
        baseAction(eAccountActionTypeIds.GET_ACCOUNT_ERROR, err),

};
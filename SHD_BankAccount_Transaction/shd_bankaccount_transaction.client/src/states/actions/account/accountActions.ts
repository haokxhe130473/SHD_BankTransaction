import { IAccountItemResponse } from "../../../models/response/account/IAccountItemResponse";
import { eAccountActionTypeIds } from "../../action-types/account/IAccountActionTypes";
import { baseAction } from "../BaseActionResult";

export const accountActions = {
    // Lấy danh sách tài khoản
    getAccountStart: () =>
        baseAction(eAccountActionTypeIds.GET_ACCOUNT_START, undefined),
    getAccountSuccess: (response: IAccountItemResponse[]) =>
        baseAction(eAccountActionTypeIds.GET_ACCOUNT_SUCCESS, response),
    getAccountError: (err: string) =>
        baseAction(eAccountActionTypeIds.GET_ACCOUNT_ERROR, err),

    // Tạo mới tài khoản
    createAccountStart: (request: IAccountItemResponse) =>
        baseAction(eAccountActionTypeIds.CREATE_ACCOUNT_START, request),
    createAccountSuccess: (response: IAccountItemResponse) =>
        baseAction(eAccountActionTypeIds.CREATE_ACCOUNT_SUCCESS, response),
    createAccountError: (err: string) =>
        baseAction(eAccountActionTypeIds.CREATE_ACCOUNT_ERROR, err),

    // Cập nhật tài khoản
    updateAccountStart: (request: IAccountItemResponse) =>
        baseAction(eAccountActionTypeIds.UPDATE_ACCOUNT_START, request),
    updateAccountSuccess: (response: IAccountItemResponse) =>
        baseAction(eAccountActionTypeIds.UPDATE_ACCOUNT_SUCCESS, response),
    updateAccountError: (err: string) =>
        baseAction(eAccountActionTypeIds.UPDATE_ACCOUNT_ERROR, err),

    // Xóa tài khoản
    deleteAccountStart: (request: number) =>
        baseAction(eAccountActionTypeIds.DELETE_ACCOUNT_START, request),
    deleteAccountSuccess: (accountId: number) =>
        baseAction(eAccountActionTypeIds.DELETE_ACCOUNT_SUCCESS, accountId),
    deleteAccountError: (err: string) =>
        baseAction(eAccountActionTypeIds.DELETE_ACCOUNT_ERROR, err),
};

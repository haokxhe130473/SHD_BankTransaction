import {
    eAccountActionTypeIds,
    IAccountActionTypes,
} from "../../action-types/account/IAccountActionTypes";
import { eReducerBaseStatus } from "../../reducer-state-models/base/eReducerBaseStatus";
import { IAccountReducerModel } from "../../reducer-state-models/account/IAccountReducerModel";

const iniState: IAccountReducerModel = {
    status: eReducerBaseStatus.is_not_initialization,
    insertUpdateStatus: undefined
};

export const accountReducer = (
    state: IAccountReducerModel = iniState,
    action: IAccountActionTypes
): IAccountReducerModel => {
    switch (action.type) {
        case eAccountActionTypeIds.GET_ACCOUNT_START:
            return {
                ...state,
                status: eReducerBaseStatus.is_loading,
            };
        case eAccountActionTypeIds.GET_ACCOUNT_SUCCESS:
            return {
                ...state,
                status: eReducerBaseStatus.is_completed,
                accountData: action.payload,
            };
        case eAccountActionTypeIds.GET_ACCOUNT_ERROR:
            return {
                ...state,
                status: eReducerBaseStatus.is_completed,
            };
        default:
            return {
                ...state,
            };
    }
};

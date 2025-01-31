import {
  eAccountActionTypeIds,
  IAccountActionTypes,
} from "../../action-types/account/IAccountActionTypes";
import { eReducerBaseStatus } from "../../reducer-state-models/base/eReducerBaseStatus";
import { IAccountReducerModel } from "../../reducer-state-models/account/IAccountReducerModel";

const iniState: IAccountReducerModel = {
  status: eReducerBaseStatus.is_not_initialization,
  insertUpdateStatus: eReducerBaseStatus.is_not_initialization,
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
        status: eReducerBaseStatus.is_error,
      };
    case eAccountActionTypeIds.CREATE_ACCOUNT_START:
      return {
        ...state,
        insertUpdateStatus: eReducerBaseStatus.is_loading,
      };
    case eAccountActionTypeIds.CREATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        insertUpdateStatus: eReducerBaseStatus.is_completed,
      };
    case eAccountActionTypeIds.CREATE_ACCOUNT_ERROR:
      return {
        ...state,
        insertUpdateStatus: eReducerBaseStatus.is_error,
      };
    case eAccountActionTypeIds.UPDATE_ACCOUNT_START:
      return {
        ...state,
        insertUpdateStatus: eReducerBaseStatus.is_loading,
      };
    case eAccountActionTypeIds.UPDATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        insertUpdateStatus: eReducerBaseStatus.is_completed,
      };
    case eAccountActionTypeIds.UPDATE_ACCOUNT_ERROR:
      return {
        ...state,
        insertUpdateStatus: eReducerBaseStatus.is_error,
      };
    case eAccountActionTypeIds.DELETE_ACCOUNT_START:
      return {
        ...state,
        status: eReducerBaseStatus.is_loading,
      };
    case eAccountActionTypeIds.DELETE_ACCOUNT_SUCCESS:
      return {
        ...state,
        status: eReducerBaseStatus.is_completed,
      };
    case eAccountActionTypeIds.DELETE_ACCOUNT_ERROR:
      return {
        ...state,
        status: eReducerBaseStatus.is_error,
      };
    default:
      return state;
  }
};

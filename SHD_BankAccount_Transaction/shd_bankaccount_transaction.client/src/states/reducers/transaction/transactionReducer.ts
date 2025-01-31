import {
  eTransactionActionTypeIds,
  ITransactionActionTypes,
} from "../../action-types/transaction/ITransactionActionTypes";
import { eReducerBaseStatus } from "../../reducer-state-models/base/eReducerBaseStatus";
import { ITransactionReducerModel } from "../../reducer-state-models/transaction/ITransactionReducerModel";

const iniState: ITransactionReducerModel = {
  status: eReducerBaseStatus.is_not_initialization,
  insertUpdateStatus: eReducerBaseStatus.is_not_initialization,
};

export const transactionReducer = (
  state: ITransactionReducerModel = iniState,
  action: ITransactionActionTypes
): ITransactionReducerModel => {
  switch (action.type) {
    case eTransactionActionTypeIds.GET_TRANSACTION_START:
      return {
        ...state,
        status: eReducerBaseStatus.is_loading,
      };
    case eTransactionActionTypeIds.GET_TRANSACTION_SUCCESS:
      return {
        ...state,
        status: eReducerBaseStatus.is_completed,
        transactionData: action.payload,
      };
    case eTransactionActionTypeIds.GET_TRANSACTION_ERROR:
      return {
        ...state,
        status: eReducerBaseStatus.is_completed,
      };
    /*-------------------------------------------------------*/

    case eTransactionActionTypeIds.GET_BY_ACCOUNT_ID_START:
      return {
        ...state,
        status: eReducerBaseStatus.is_loading,
      };
    case eTransactionActionTypeIds.GET_BY_ACCOUNT_ID_SUCCESS:
      return {
        ...state,
        status: eReducerBaseStatus.is_completed,
        transactionData: action.payload,
      };
    case eTransactionActionTypeIds.GET_BY_ACCOUNT_ID_ERROR:
      return {
        ...state,
        status: eReducerBaseStatus.is_completed,
      };
    /*-------------------------------------------------------*/
    case eTransactionActionTypeIds.CREATE_TRANSACTION_START:
      return {
        ...state,
        insertUpdateStatus: eReducerBaseStatus.is_loading,
      };
    case eTransactionActionTypeIds.CREATE_TRANSACTION_SUCCESS:
      return {
        ...state,
        insertUpdateStatus: eReducerBaseStatus.is_completed,
      };
    case eTransactionActionTypeIds.CREATE_TRANSACTION_ERROR:
      return {
        ...state,
        insertUpdateStatus: eReducerBaseStatus.is_error,
      };
    /*-------------------------------------------------------*/
    case eTransactionActionTypeIds.UPDATE_TRANSACTION_START:
      return {
        ...state,
        insertUpdateStatus: eReducerBaseStatus.is_loading,
      };
    case eTransactionActionTypeIds.UPDATE_TRANSACTION_SUCCESS:
      return {
        ...state,
        insertUpdateStatus: eReducerBaseStatus.is_completed,
      };
    case eTransactionActionTypeIds.UPDATE_TRANSACTION_ERROR:
      return {
        ...state,
        insertUpdateStatus: eReducerBaseStatus.is_error,
      };
    /*-------------------------------------------------------*/

    case eTransactionActionTypeIds.DELETE_TRANSACTION_START:
      return {
        ...state,
        status: eReducerBaseStatus.is_loading,
      };
    case eTransactionActionTypeIds.DELETE_TRANSACTION_SUCCESS:
      return {
        ...state,
        status: eReducerBaseStatus.is_completed,
      };
    case eTransactionActionTypeIds.DELETE_TRANSACTION_ERROR:
      return {
        ...state,
        status: eReducerBaseStatus.is_error,
      };
    default:
      return state;
  }
};

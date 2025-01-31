import { ITransactionItemResponse } from "../../../models/response/transaction/ITransactionItemResponse";
import { eReducerBaseStatus } from "../base/eReducerBaseStatus";

export interface ITransactionReducerModel {
  status: eReducerBaseStatus;
  transactionData?: ITransactionItemResponse[];
  error?: string;
  insertUpdateStatus?: eReducerBaseStatus;
}

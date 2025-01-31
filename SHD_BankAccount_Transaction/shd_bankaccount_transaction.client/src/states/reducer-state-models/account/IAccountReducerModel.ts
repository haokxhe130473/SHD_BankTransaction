import { IAccountItemResponse } from "../../../models/response/account/IAccountItemResponse";
import { eReducerBaseStatus } from "../base/eReducerBaseStatus";

export interface IAccountReducerModel {
    status: eReducerBaseStatus;
    accountData?: IAccountItemResponse[];
    error?: string;
    insertUpdateStatus?: eReducerBaseStatus;
}

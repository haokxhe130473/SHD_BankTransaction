import { accountApi } from "./account/accountApi";
import { transactionApi } from "./transaction/transactionApi";

export const apiWrapper = {
  account: accountApi,
  transaction: transactionApi,
};

import { accountActions } from "./account/accountActions";
import { transactionActions } from "./transaction/transactionActions";

export const rootAction = {
  account: accountActions,
  transaction: transactionActions,
};

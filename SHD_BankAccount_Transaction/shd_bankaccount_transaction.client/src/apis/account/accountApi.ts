import { IAccountItemRequest } from "../../models/request/account/IAccountItemRequest";
import { IBaseResponeModel } from "../../models/response/IBaseResponeModel";
import { apiClient } from "../apiClient";

export const accountApi = {
  // Lấy danh sách tất cả tài khoản
  getAllAccounts: async (): Promise<IBaseResponeModel> => {
    return await apiClient.get("Accounts");
  },

  // Lấy thông tin chi tiết của một tài khoản theo ID
  getAccountById: async (id: number): Promise<IBaseResponeModel> => {
    return await apiClient.get(`Accounts/${id}`);
  },

  // Tạo một tài khoản mới
  createAccount: async (account: IAccountItemRequest): Promise<IBaseResponeModel> => {
    return await apiClient.post("Accounts", account);
  },

  // Cập nhật thông tin tài khoản
  updateAccount: async (
    account: IAccountItemRequest
  ): Promise<IBaseResponeModel> => {
    return await apiClient.put(`Accounts/${account.Id}`, account);
  },

  // Xóa một tài khoản theo ID
  deleteAccount: async (id: number): Promise<IBaseResponeModel> => {
    return await apiClient.delete(`Accounts/${id}`);
  },

  // Lấy danh sách giao dịch của một tài khoản theo ID
  getTransactionsByAccountId: async (
    accountId: number
  ): Promise<IBaseResponeModel> => {
    return await apiClient.get(`transactions/account/${accountId}`);
  },

  // Tạo một giao dịch mới
  createTransaction: async (transaction: {
    fromAccountId: number;
    toAccountId: number;
    amount: number;
    date: string;
  }): Promise<IBaseResponeModel> => {
    return await apiClient.post("transactions", transaction);
  },
};

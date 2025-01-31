import { IAccountItemResponse } from "../../models/response/account/IAccountItemResponse";
import { IBaseResponeModel } from "../../models/response/IBaseResponeModel";
import { apiClient } from "../apiClient";

export const accountApi = {
  // Lấy danh sách tất cả tài khoản
  getAllAccounts: async (): Promise<IBaseResponeModel> => {
    return await apiClient.get("accounts");
  },

  // Lấy thông tin chi tiết của một tài khoản theo ID
  getAccountById: async (id: number): Promise<IBaseResponeModel> => {
    return await apiClient.get(`accounts/${id}`);
  },

  // Tạo một tài khoản mới
  createAccount: async (account: IAccountItemResponse): Promise<IBaseResponeModel> => {
    return await apiClient.post("accounts", account);
  },

  // Cập nhật thông tin tài khoản
  updateAccount: async (
    account: IAccountItemResponse
  ): Promise<IBaseResponeModel> => {
    return await apiClient.put(`accounts/${account.id}`, account);
  },

  // Xóa một tài khoản theo ID
  deleteAccount: async (id: number): Promise<IBaseResponeModel> => {
    return await apiClient.delete(`accounts/${id}`);
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

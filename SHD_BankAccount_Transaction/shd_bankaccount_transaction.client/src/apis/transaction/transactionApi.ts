import { IBaseResponeModel } from "../../models/response/IBaseResponeModel";
import { ITransactionItemResponse } from "../../models/response/transaction/ITransactionItemResponse";
import { apiClient } from "../apiClient";

export const transactionApi = {
  // Lấy danh sách tất cả giao dịch
  getAllTransactions: async (): Promise<IBaseResponeModel> => {
    return await apiClient.get("transactions");
  },

  // Lấy thông tin chi tiết của một giao dịch theo ID
  getTransactionById: async (id: number): Promise<IBaseResponeModel> => {
    return await apiClient.get(`transactions/${id}`);
  },

  // Lấy thông tin chi tiết của một giao dịch theo ID
  getTransactionByAccountId: async (
    accountId: number
  ): Promise<IBaseResponeModel> => {
    return await apiClient.get(`transactions/account/${accountId}`);
  },

  // Tạo một giao dịch mới
  createTransaction: async (
    transaction: ITransactionItemResponse
  ): Promise<IBaseResponeModel> => {
    return await apiClient.post("transactions", transaction);
  },

  // Cập nhật thông tin giao dịch
  updateTransaction: async (
    transaction: ITransactionItemResponse
  ): Promise<IBaseResponeModel> => {
    return await apiClient.put(`transactions/${transaction.id}`, transaction);
  },

  // Xóa một giao dịch theo ID
  deleteTransaction: async (id: number): Promise<IBaseResponeModel> => {
    return await apiClient.delete(`transactions/${id}`);
  },

  // Lấy danh sách giao dịch của một tài khoản theo ID
  getTransactionsByAccountId: async (
    accountId: number
  ): Promise<IBaseResponeModel> => {
    return await apiClient.get(`transactions/account/${accountId}`);
  },
};

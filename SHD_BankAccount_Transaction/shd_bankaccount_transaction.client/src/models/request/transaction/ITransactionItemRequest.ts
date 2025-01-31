export interface ITransactionItemRequest {
    Id: number; // ID của giao dịch
    FromAccountId: number; // ID của tài khoản gửi
    ToAccountId: number; // ID của tài khoản nhận
    ToAccountName: string;
    Amount: number; // Số tiền giao dịch
    TransactionDate: Date; // Ngày giao dịch
    Description: string; // Mô tả giao dịch (nếu có)
    CreatedTime: Date; // Ngày tạo giao dịch
}
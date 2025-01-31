export interface ITransactionItemRequest {
    Id: number; // ID của giao dịch
    FromAccountId: number; // ID của tài khoản gửi
    ToAccountId: number; // ID của tài khoản nhận
    Amount: number; // Số tiền giao dịch
    TransactionDate: string; // Ngày giao dịch
    Description: string; // Mô tả giao dịch (nếu có)
    CreatedTime: string; // Ngày tạo giao dịch
}
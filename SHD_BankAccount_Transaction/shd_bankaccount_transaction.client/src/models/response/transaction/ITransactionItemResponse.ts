export interface ITransactionItemResponse {
    Id: number; // ID của giao dịch
    FromAccountId: number; // ID của tài khoản gửi
    ToAccountId: number; // ID của tài khoản nhận
    FromAccountName: string; // Tên tài khoản gửi
    ToAccountName: string; // Tên tài khoản nhận
    Amount: number; // Số tiền giao dịch
    TransactionDate: Date; // Ngày giao dịch
    Description: string; // Mô tả giao dịch (nếu có)
    CreatedTime: Date; // Ngày tạo giao dịch
}
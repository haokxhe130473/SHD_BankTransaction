export interface ITransactionItemResponse {
    id: number; // ID của giao dịch
    from_account_id: number; // ID của tài khoản gửi
    to_account_id: number; // ID của tài khoản nhận
    from_account_name: string; // Tên tài khoản gửi
    to_account_name: string; // Tên tài khoản nhận
    amount: number; // Số tiền giao dịch
    transaction_date: Date; // Ngày giao dịch
    description: string; // Mô tả giao dịch (nếu có)
    created_at: Date; // Ngày tạo giao dịch
    updated_at: Date; // Ngày cập nhật thông tin giao dịch
}
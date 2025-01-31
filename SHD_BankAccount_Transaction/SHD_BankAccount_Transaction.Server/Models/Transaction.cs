namespace SHD_BankAccount_Transaction.Server.Models
{
    public class Transaction : ModifyInfo
    {
        public int Id { get; set; }
        public DateTimeOffset TransactionDate { get; set; }
        public decimal Amount { get; set; }
        public string Description { get; set; }

        // Tài khoản gửi
        public int FromAccountId { get; set; }
        public Account FromAccount { get; set; }

        // Tài khoản nhận
        public int ToAccountId { get; set; }
        public Account ToAccount { get; set; }
    }
    public class TransactionDTO
    {
        public int Id { get; set; }
        public DateTimeOffset TransactionDate { get; set; }
        public decimal Amount { get; set; }
        public string Description { get; set; }
        public int FromAccountId { get; set; }
        public string FromAccountName { get; set; }
        public int ToAccountId { get; set; }
        public string ToAccountName { get; set; }
    }

}
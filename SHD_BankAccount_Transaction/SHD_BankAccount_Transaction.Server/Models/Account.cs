namespace SHD_BankAccount_Transaction.Server.Models
{
    public class Account : ModifyInfo
    {
        public int Id { get; set; }
        public string AccountName { get; set; }
        public decimal Balance { get; set; }

        // Giao dịch mà tài khoản này là người gửi
        public ICollection<Transaction> SentTransactions { get; set; } = new List<Transaction>();

        // Giao dịch mà tài khoản này là người nhận
        public ICollection<Transaction> ReceivedTransactions { get; set; } = new List<Transaction>();
    }
}
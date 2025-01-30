namespace SHD_BankAccount_Transaction.Server.Models
{
    public class transaction : modify_info
    {
        public int id { get; set; }
        public DateTime transaction_date { get; set; }
        public decimal amount { get; set; }
        public int sender_account_id { get; set; }
        public int recipient_account_id { get; set; }
    }
}
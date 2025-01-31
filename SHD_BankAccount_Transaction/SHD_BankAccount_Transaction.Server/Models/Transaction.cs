namespace SHD_BankAccount_Transaction.Server.Models
{
    public class transaction : modify_info
    {
        public int id { get; set; }
        public DateTime date { get; set; }
        public decimal amount { get; set; }
        public int from_account_id { get; set; }
        public account from_account { get; set; }
        public int to_account_id { get; set; }
        public account to_account { get; set; }
    }
}
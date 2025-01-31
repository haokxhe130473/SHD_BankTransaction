namespace SHD_BankAccount_Transaction.Server.Models
{
    public class account : modify_info
    {
        public int id { get; set; }
        public string account_name { get; set; }
        public decimal balance { get; set; }
        public ICollection<transaction> transactions { get; set; } = new List<transaction>();

    }
}
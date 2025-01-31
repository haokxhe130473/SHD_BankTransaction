namespace SHD_BankAccount_Transaction.Server.Models.Response
{
    public class AccountItemResponse : Account
    {
        public decimal TotalSent { get; set; }
        public decimal TotalReceived { get; set; }
    }
}

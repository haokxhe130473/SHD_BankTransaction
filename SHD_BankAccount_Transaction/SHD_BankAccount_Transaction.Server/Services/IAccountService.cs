using SHD_BankAccount_Transaction.Server.Models;

namespace SHD_BankAccount_Transaction.Server.Services
{
    public interface IAccountService
    {
        Task<List<account>> GetAllAccountsAsync();
        Task<account> GetAccountByIdAsync(int id);
    }
}

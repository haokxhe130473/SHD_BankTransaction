using SHD_BankAccount_Transaction.Server.Models;

namespace SHD_BankAccount_Transaction.Server.Services
{
    public interface IAccountService
    {
        Task<IEnumerable<account>> GetAllAccountsAsync();
        Task<account> GetAccountByIdAsync(int id);
        Task<account> CreateAccountAsync(account account);
        Task UpdateAccountAsync(account account);
        Task DeleteAccountAsync(int id);
    }
}

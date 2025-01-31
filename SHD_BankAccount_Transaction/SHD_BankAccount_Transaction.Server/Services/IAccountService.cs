using SHD_BankAccount_Transaction.Server.Models;
using SHD_BankAccount_Transaction.Server.Models.Response;

namespace SHD_BankAccount_Transaction.Server.Services
{
    public interface IAccountService
    {
        Task<IEnumerable<AccountItemResponse>> GetAllAccountsAsync();
        Task<Account> GetAccountByIdAsync(int id);
        Task<Account> CreateAccountAsync(Account account);
        Task UpdateAccountAsync(Account account);
        Task DeleteAccountAsync(int id);
    }
}

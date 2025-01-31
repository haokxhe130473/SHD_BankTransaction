using SHD_BankAccount_Transaction.Server.Models;

namespace SHD_BankAccount_Transaction.Server.Services
{
    public interface ITransactionService
    {
        Task<IEnumerable<transaction>> GetTransactionsByAccountIdAsync(int accountId);
        Task<transaction> CreateTransactionAsync(transaction transaction);
    }
}

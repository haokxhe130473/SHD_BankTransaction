using SHD_BankAccount_Transaction.Server.Models;

namespace SHD_BankAccount_Transaction.Server.Services
{
    public interface ITransactionService
    {
        Task<IEnumerable<TransactionDTO>> GetTransactionsByAccountIdAsync(int accountId);
        Task<TransactionDTO> CreateTransactionAsync(TransactionDTO transaction);
        Task<Transaction> GetTransactionByIdAsync(int transactionId);
        Task<IEnumerable<Transaction>> GetTransactionsBetweenAccountsAsync(int accountId1, int accountId2);
        Task<decimal> GetTotalSentAmountAsync(int accountId);
        Task<decimal> GetTotalReceivedAmountAsync(int accountId);   
    }
}

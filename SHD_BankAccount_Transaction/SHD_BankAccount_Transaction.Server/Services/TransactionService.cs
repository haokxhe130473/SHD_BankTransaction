using Microsoft.EntityFrameworkCore;
using SHD_BankAccount_Transaction.Server.Data;
using SHD_BankAccount_Transaction.Server.Models;

namespace SHD_BankAccount_Transaction.Server.Services
{
    public class TransactionService : ITransactionService
    {
        private readonly ApplicationDbContext _context;

        public TransactionService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<decimal> GetTotalSentAmountAsync(int accountId)
        {
            return await _context.Transactions
                .Where(t => t.FromAccountId == accountId)
                .SumAsync(t => (decimal?)t.Amount) ?? 0;
        }

        public async Task<decimal> GetTotalReceivedAmountAsync(int accountId)
        {
            return await _context.Transactions
                .Where(t => t.ToAccountId == accountId)
                .SumAsync(t => (decimal?)t.Amount) ?? 0;
        }

        public async Task<Transaction> GetTransactionByIdAsync(int transactionId)
        {
            return await _context.Transactions
                .Include(t => t.FromAccount)
                .Include(t => t.ToAccount)
                .FirstOrDefaultAsync(t => t.Id == transactionId);
        }

        public async Task<IEnumerable<Transaction>> GetTransactionsBetweenAccountsAsync(int accountId1, int accountId2)
        {
            return await _context.Transactions
                .Where(t =>
                    (t.FromAccountId == accountId1 && t.ToAccountId == accountId2) ||
                    (t.FromAccountId == accountId2 && t.ToAccountId == accountId1))
                .OrderByDescending(t => t.TransactionDate)
                .ToListAsync();
        }

        public async Task<IEnumerable<TransactionDTO>> GetTransactionsByAccountIdAsync(int accountId)
        {
            var transactions = await _context.Transactions
                .Where(t => t.FromAccountId == accountId || t.ToAccountId == accountId)
                .Include(t => t.FromAccount)
                .Include(t => t.ToAccount)
                .Select(t => new TransactionDTO
                {
                    Id = t.Id,
                    TransactionDate = t.TransactionDate,
                    Amount = t.Amount,
                    Description = t.Description,
                    FromAccountId = t.FromAccountId,
                    FromAccountName = t.FromAccount.AccountName,
                    ToAccountId = t.ToAccountId,
                    ToAccountName = t.ToAccount.AccountName
                })
                .ToListAsync();
            return transactions;
        }

        public async Task<TransactionDTO> CreateTransactionAsync(TransactionDTO transaction)
        {
            var fromAccount = await _context.Accounts.FindAsync(transaction.FromAccountId);
            var toAccount = await _context.Accounts.FindAsync(transaction.ToAccountId);

            if (fromAccount == null || toAccount == null)
            {
                throw new Exception("One or both accounts not found.");
            }

            if (fromAccount.Balance < transaction.Amount)
            {
                throw new Exception("Insufficient funds.");
            }

            fromAccount.Balance -= transaction.Amount;
            toAccount.Balance += transaction.Amount;

            _context.Transactions.Add(new Transaction
            {
                FromAccountId = fromAccount.Id,
                FromAccount = fromAccount,
                ToAccountId = toAccount.Id,
                ToAccount = toAccount,
                Amount = transaction.Amount,
                Description = transaction.Description,
                TransactionDate = DateTime.Now,
                IsDeleted = false,
                CreatedTime = DateTime.Now,
                CreatedUserId = transaction.FromAccountId,
                LastModifiedTime = DateTime.Now,
                LastModifiedUserId = transaction.FromAccountId,
            });
            await _context.SaveChangesAsync();

            return transaction;
        }
    }
}
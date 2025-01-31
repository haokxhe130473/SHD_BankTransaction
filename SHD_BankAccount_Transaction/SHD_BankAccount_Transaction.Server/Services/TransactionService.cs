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

        public async Task<IEnumerable<transaction>> GetTransactionsByAccountIdAsync(int accountId)
        {
            return await _context.transactions
                .Where(t => t.from_account_id == accountId || t.to_account_id == accountId)
                .ToListAsync();
        }

        public async Task<transaction> CreateTransactionAsync(transaction transaction)
        {
            var fromAccount = await _context.accounts.FindAsync(transaction.from_account_id);
            var toAccount = await _context.accounts.FindAsync(transaction.to_account_id);

            if (fromAccount == null || toAccount == null)
            {
                throw new Exception("One or both accounts not found.");
            }

            if (fromAccount.balance < transaction.amount)
            {
                throw new Exception("Insufficient funds.");
            }

            fromAccount.balance -= transaction.amount;
            toAccount.balance += transaction.amount;

            _context.transactions.Add(transaction);
            await _context.SaveChangesAsync();

            return transaction;
        }
    }
}
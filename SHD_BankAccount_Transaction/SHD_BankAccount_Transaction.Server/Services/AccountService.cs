using Microsoft.EntityFrameworkCore;
using SHD_BankAccount_Transaction.Server.Data;
using SHD_BankAccount_Transaction.Server.Models;
using SHD_BankAccount_Transaction.Server.Models.Response;

namespace SHD_BankAccount_Transaction.Server.Services
{
    public class AccountService : IAccountService
    {
        private readonly ApplicationDbContext _context;

        public AccountService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<AccountItemResponse>> GetAllAccountsAsync()
        {
            var listAllAccount = await _context.Accounts.ToListAsync();
            var listAllTransaction = await _context.Transactions.ToListAsync();
            var response = listAllAccount.Select(x => new AccountItemResponse
            {
                Id = x.Id,
                AccountName = x.AccountName,
                Balance = x.Balance,
                TotalReceived = listAllTransaction
                .Where(z => z.ToAccountId == x.Id).Sum(y => y.Amount),
                TotalSent = listAllTransaction
                .Where(z => z.FromAccountId == x.Id).Sum(y => y.Amount),
            });
            return response;
        }

        public async Task<Account> GetAccountByIdAsync(int id)
        {
            return await _context.Accounts.FindAsync(id);
        }

        public async Task<Account> CreateAccountAsync(Account account)
        {
            _context.Accounts.Add(account);
            await _context.SaveChangesAsync();
            return account;
        }

        public async Task UpdateAccountAsync(Account account)
        {
            _context.Entry(account).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAccountAsync(int id)
        {
            var account = await _context.Accounts
                .Include(a => a.SentTransactions)
                .Include(a => a.ReceivedTransactions)
                .FirstOrDefaultAsync(a => a.Id == id);

            if (account == null) return;

            if (account.SentTransactions.Any() || account.ReceivedTransactions.Any())
            {
                throw new InvalidOperationException("Cannot delete account with transactions.");
            }

            _context.Accounts.Remove(account);
            await _context.SaveChangesAsync();
        }
    }
}
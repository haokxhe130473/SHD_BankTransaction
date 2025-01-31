using Microsoft.EntityFrameworkCore;
using SHD_BankAccount_Transaction.Server.Data;
using SHD_BankAccount_Transaction.Server.Models;

namespace SHD_BankAccount_Transaction.Server.Services
{
    public class AccountService : IAccountService
    {
        private readonly ApplicationDbContext _context;

        public AccountService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<account>> GetAllAccountsAsync()
        {
            return await _context.accounts.ToListAsync();
        }

        public async Task<account> GetAccountByIdAsync(int id)
        {
            return await _context.accounts.FindAsync(id);
        }

        public async Task<account> CreateAccountAsync(account account)
        {
            _context.accounts.Add(account);
            await _context.SaveChangesAsync();
            return account;
        }

        public async Task UpdateAccountAsync(account account)
        {
            _context.Entry(account).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAccountAsync(int id)
        {
            var account = await _context.accounts.FindAsync(id);
            if (account != null)
            {
                _context.accounts.Remove(account);
                await _context.SaveChangesAsync();
            }
        }
    }
}
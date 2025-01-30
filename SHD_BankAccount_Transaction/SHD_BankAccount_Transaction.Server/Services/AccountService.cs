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


        public async Task<List<account>> GetAllAccountsAsync()
        {
            return await _context.accounts.ToListAsync();
        }

        public async Task<account> GetAccountByIdAsync(int id)
        {
            return await _context.accounts.FirstOrDefaultAsync(a => a.id == id);
        }
    }
}

using Microsoft.AspNetCore.Mvc;
using SHD_BankAccount_Transaction.Server.Models;
using SHD_BankAccount_Transaction.Server.Services;

namespace SHD_BankAccount_Transaction.Server.Controllers
{
    public class AccountsController : BaseController
    {
        private readonly IAccountService _accountService;

        public AccountsController(IAccountService accountService)
        {
            _accountService = accountService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Account>>> GetAllAccounts()
        {
            var accounts = await _accountService.GetAllAccountsAsync();
            return this.OK(accounts);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Account>> GetAccountById(int id)
        {
            var account = await _accountService.GetAccountByIdAsync(id);
            if (account == null)
            {
                return NotFound();
            }
            return this.OK(account);
        }

        [HttpPost]
        public async Task<ActionResult<Account>> CreateAccount(Account account)
        {
            var createdAccount = await _accountService.CreateAccountAsync(account);
            return 
                CreatedAtAction(nameof(GetAccountById), new { id = createdAccount.Id }, 
                createdAccount);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAccount(int id, Account account)
        {
            if (id != account.Id)
            {
                return BadRequest();
            }

            await _accountService.UpdateAccountAsync(account);
            return this.OK("Updated successfully");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAccount(int id)
        {
            await _accountService.DeleteAccountAsync(id);
            return this.OK("Deleted successfully");
        }
    }
}
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
        public async Task<ActionResult<IEnumerable<account>>> GetAllAccounts()
        {
            var accounts = await _accountService.GetAllAccountsAsync();
            return this.OK(accounts);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<account>> GetAccountById(int id)
        {
            var account = await _accountService.GetAccountByIdAsync(id);
            if (account == null)
            {
                return NotFound();
            }
            return this.OK(account);
        }

        [HttpPost]
        public async Task<ActionResult<account>> CreateAccount(account account)
        {
            var createdAccount = await _accountService.CreateAccountAsync(account);
            return 
                CreatedAtAction(nameof(GetAccountById), new { id = createdAccount.id }, 
                createdAccount);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAccount(int id, account account)
        {
            if (id != account.id)
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
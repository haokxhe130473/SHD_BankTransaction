using Microsoft.AspNetCore.Mvc;
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

        [HttpGet("account/select-all")]
        public async Task<IActionResult> GetAllAccounts()
        {
            var accounts = await _accountService.GetAllAccountsAsync();
            return this.OK(accounts);
        }

        [HttpGet("account/select-by-id")]
        public async Task<IActionResult> GetAccountById([FromQuery] int id)
        {
            var account = await _accountService.GetAccountByIdAsync(id);
            if (account == null)
                return NotFound();

            return this.OK(account);
        }
    }
}
using Microsoft.AspNetCore.Mvc;
using SHD_BankAccount_Transaction.Server.Models;
using SHD_BankAccount_Transaction.Server.Services;

namespace SHD_BankAccount_Transaction.Server.Controllers
{
    public class TransactionsController : BaseController
    {
        private readonly ITransactionService _transactionService;

        public TransactionsController(ITransactionService transactionService)
        {
            _transactionService = transactionService;
        }

        [HttpGet("account/{accountId}")]
        public async Task<ActionResult<IEnumerable<transaction>>> GetTransactionsByAccountId(int accountId)
        {
            var transactions = await _transactionService.GetTransactionsByAccountIdAsync(accountId);
            return Ok(transactions);
        }

        [HttpPost]
        public async Task<ActionResult<transaction>> CreateTransaction(transaction transaction)
        {
            var createdTransaction = await _transactionService.CreateTransactionAsync(transaction);
            return Ok(createdTransaction);
        }
    }
}
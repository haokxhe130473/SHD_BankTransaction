using Microsoft.AspNetCore.Mvc;
using SHD_BankAccount_Transaction.Server.Models;

namespace SHD_BankAccount_Transaction.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BaseController : ControllerBase
    {
        public BaseController()
        {
        }

        protected ContentResult OK()
        {
            return new ResponeBaseSuccess().ToContentResult();
        }

        protected ContentResult OK(object data)
        {
            return new ResponeBaseSuccess(data).ToContentResult();
        }

        protected Task<ContentResult> OKAsync(object data)
        {
            return new ResponeBaseSuccess(data).ToContentResultAsync();
        }

        protected ContentResult BadRequest(string message = "")
        {
            return new ResponeBaseErr(message).ToContentResult();
        }

        protected Task<ContentResult> BadRequestAsync(string message = "")
        {
            return new ResponeBaseErr(message).ToContentResultAsync();
        }
    }
}
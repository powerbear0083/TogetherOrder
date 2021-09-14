using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TogetherOrder.Models;

namespace TogetherOrder.Controllers
{
    public class AccountController : Controller
    {

        [HttpPost]
        public ActionResult SignUp([FromBody] Account account)
        {
            var togetherOrderContext = new togetherOrderContext();
            togetherOrderContext.Add(new Account { Name = account.Name, Password = account.Password });

            togetherOrderContext.SaveChanges();

            return new JsonResult(true);
        }
    }
    
}

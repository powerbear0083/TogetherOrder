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
        public ActionResult SignUp(string name, string password)
        {
            var togetherOrderContext = new togetherOrderContext();
            togetherOrderContext.Add(new Account { Name = name, Password = password });

            togetherOrderContext.SaveChanges();

            return new JsonResult(true);
        }
    }
    
}

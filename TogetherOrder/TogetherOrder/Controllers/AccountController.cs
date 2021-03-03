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
        public async Task<ActionResult<Account>> SignUp(string name, string password)
        {



        }
    }
    
}

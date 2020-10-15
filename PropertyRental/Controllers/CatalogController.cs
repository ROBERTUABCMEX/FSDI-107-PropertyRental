
using Microsoft.AspNetCore.Mvc;
using PropertyRental.Models;


namespace PropertyRental.Controllers
{
    public class CatalogController : Controller
    {

     public IActionResult Index()
     {
     return View(); // catalog page  
     } 

     public IActionResult Register()
     {
     return View(); // register page  
     } 

    [HttpPost]
     public IActionResult SaveProperty( [FromBody] Property theproperty)
     {
        // store theProperty into DB
        System.Console.WriteLine("Saving a property");
        System.Console.WriteLine(theproperty.Title);
        
        // temp
        theproperty.Id = 1;
        return Json(theproperty);
          
     }   
     
  }

}
using FastFood.Context;
using FastFood.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FastFood.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemController : ControllerBase
    {
        // GET: api/<ItemController>
        FastFoodDbContext db = new FastFoodDbContext();
        //public ItemController(FastFoodDbContext f)
        //{
        //    db = f;
        //}

        // GET api/<ItemController>/5
        //user can see all the items
        [HttpGet("[action]")]
        //[Authorize]
        public IEnumerable<Item> Getallitems()
        {
            return db.Items;
        }
        //user can see items sorted based on price
        [HttpGet("[action]")]
        [Authorize(Roles = "User")]
        public IActionResult GetSorted() 
        {
           
            return Ok(db.Items.OrderBy(x => x.Price));
        }

        // POST api/<ItemController>
        //admin can add item
        [HttpPost("[action]")]
        [Authorize(Roles = "Admin")]
        public void AddItem([FromBody] Item i)
        {
            db.Items.Add(i);
            db.SaveChanges();
        }

        // DELETE api/<ItemController>/5
        //admin can delete item
        [HttpDelete("{id}")]
        [Authorize(Roles = "Admin")]
        public string Delete(int id)
        {
            var emp = db.Items.Where(x => x.Id == id).Single<Item>();
            if (emp == null)
            {
                return ("No such record found");
            }
            db.Items.Remove(emp);
            db.SaveChanges();
            return "Record Deleted Successfully";
        }
    }
}

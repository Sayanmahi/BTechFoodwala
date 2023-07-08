using FastFood.Context;
using FastFood.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FastFood.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {

        private readonly FastFoodDbContext db = new FastFoodDbContext();
        // GET: api/<OrderController>
        [HttpGet("[action]")]
        //all orders displayed to admin
        public IEnumerable<Order> Get()
        {
            return db.Orders;
        }

        // GET api/<OrderController>/5
        //only orders which are not delivered
        [HttpGet("[action]")]
        [Authorize(Roles ="Admin")]
        public IActionResult Getordersnotdeliverd()
        {
            //var c = db.Items.FirstOrDefault(x => x.Id == id);
            var c=db.Orders.Where(x => x.isdelivered==0).OrderByDescending(x => x.Id).ToList();
            if(c==null)
            {
                return NotFound();
            }
            List<Getwhatordered> l = new List<Getwhatordered>();
            foreach(var c1 in c)
            {
                var t=db.Items.FirstOrDefault(x1 => x1.Id==c1.ItemId);
                var t1=db.Users.FirstOrDefault(x2 => x2.Id==c1.UserId); 
                Getwhatordered ob = new Getwhatordered();
                ob.Id = c1.Id;
                ob.isdeli = c1.isdelivered;
                ob.Price = c1.Price;
                ob.Qty = c1.Qty;
                ob.itemname = t.ProdName;
                ob.imgurl = t.ImageUrl;
                ob.uname = t1.Name;
                ob.pno = t1.PhoneNumber;
                l.Add(ob);
                

            }
            return Ok(l);
        }
        //change to delivered
        [HttpPut("[action]/{id}")]
        [Authorize(Roles = "Admin")]
        public IActionResult validateisdelivered(int id) 
        { 
           using(var ctx= new  FastFoodDbContext()) 
            {
                var c= ctx.Orders.Where(x =>x.Id==id).FirstOrDefault();
                if(c !=null)
                {
                    c.isdelivered = 1;
                    c.date= DateTime.Now;
                    ctx.SaveChanges();
                }
                else
                    return NotFound();
            }
            return Ok();
        }

        // POST api/<OrderController>
        //place order
        [HttpPost]
        [Authorize(Roles ="User")]
        public void placeorder([FromBody] Order o)
        {
            var c = db.Items.Where(x => x.Id == o.ItemId).FirstOrDefault();
            o.Price = o.Qty * c.Price;
            o.date = DateTime.Today;
            o.Items = null;
            o.Users = null;
            db.Orders.Add(o);
            db.SaveChanges();
        }
      

        
        // PUT api/<OrderController>/5
        //change quantity in orders
        [HttpPut("[action]/{id}/{qty}")]
        [Authorize(Roles = "User")]
        public IActionResult Changeqty(int id,int qty)
        {
            var c=db.Orders.Where(x =>x.Id== id).FirstOrDefault();
            if(c!=null)
            {
                c.Qty = qty;
                var c1=db.Items.Where(x => x.Id==c.ItemId).FirstOrDefault();
                c.Price = qty * c1.Price;
                db.SaveChanges();
                return Ok("Quantity updated");
            }
            return NotFound("Order Id doesn't match!!");
        }

        // DELETE api/<OrderController>/5
        //delete the order placed
        [HttpDelete("{id}")]
        [Authorize(Roles = "User")]
        public string Delete(int id)
        {
            var emp = db.Orders.Where(x => x.Id == id).Single<Order>();
            if(emp == null)
            {
                return ("No such record found");
            }
            db.Orders.Remove(emp);
            db.SaveChanges();
            return "Record Deleted Successfully";
        }
        //orders displayed according to userid
        [HttpGet("[action]/{id}")]
        [Authorize(Roles = "User")]
        public IActionResult getwhatordered(int id)
        {
            var c = db.Orders.Where(x => x.UserId == id && x.isdelivered==0).OrderByDescending(x => x.Id).ToList();
            
            if (c == null)
            {
                return NotFound();
            }
            List<Getwhatordered> aa = new List<Getwhatordered>();
            //Getwhatordered ob= new Getwhatordered();
            foreach (var o in c)
            {
                Getwhatordered ob = new Getwhatordered();
                var c1 = db.Items.Find(o.ItemId);
                ob.Id = o.Id;
                ob.Price = o.Price;
                ob.Qty = o.Qty;
                ob.isdeli = o.isdelivered;
                ob.itemname = c1.ProdName;
                ob.imgurl = c1.ImageUrl;
                aa.Add(ob);
            }
            return Ok(aa);
        }
        //orders that are delivered
        //orders displayed according to userid
        [HttpGet("[action]/{id}")]
        [Authorize(Roles = "User")]
        public IActionResult getwhatordereddelivered(int id)
        {
            var c = db.Orders.Where(x => x.UserId == id && x.isdelivered == 1).ToList();

            if (c == null)
            {
                return NotFound();
            }
            List<Getwhatordereddelivered> aa = new List<Getwhatordereddelivered>();
            //Getwhatordered ob= new Getwhatordered();
            foreach (var o in c)
            {
                Getwhatordereddelivered ob = new Getwhatordereddelivered();
                var c1 = db.Items.Find(o.ItemId);
                ob.Id = o.Id;
                ob.Price = o.Price;
                ob.Qty = o.Qty;
                ob.isdeli = o.isdelivered;
                ob.itemname = c1.ProdName;
                ob.imgurl = c1.ImageUrl;
                ob.dt = o.date.ToString("dd MMMM yyyy");
                aa.Add(ob);
            }
            return Ok(aa);
        }
    }
}

using FastFood.Context;
using FastFood.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.ComponentModel.DataAnnotations;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace FastFood.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        FastFoodDbContext db = new FastFoodDbContext();
        private IConfiguration _config;
        public LoginController(IConfiguration config)
        {
            _config=config;
        }



        [HttpPost("[action]/{Email}/{pp}")]      
        //admin login
        public IActionResult AdminLog(string Email, string pp)
        {
            var c = db.Users.Where(x => x.Email == Email && x.Password == pp && x.userType=="Admin").FirstOrDefault();
            if (c == null)
            {
                return NotFound("You are not an Admin!!");
            }
            else
            {
                string jwt = JwtGenerate(Email, c.userType,c.Id);
                return Ok(jwt);
            }
        }
        [HttpPost("[action]/{Email}/{pp}")]
        //normaluser login
        public IActionResult NormalUser(string Email,string pp)
        {
            var c = db.Users.Where(x => x.Email == Email && x.Password == pp && x.userType=="User").FirstOrDefault();
            if (c == null)
            {
                return NotFound("You are not an user, Please Register");
            }
            else
            {
                string jwt = JwtGenerate(Email, c.userType,c.Id);
                return Ok(jwt);
            }
        }
        [HttpPost("[action]/{nam}/{ema}/{pass}/{pno}")]
        //registration
        public string Register(string nam, string ema, string pass, string pno)
        {
            var uexits = db.Users.FirstOrDefault(u => u.Email == ema);
            if (uexits != null)
            {
                return ("Already have account");
            }
            User m = new User();
            m.Email = ema;
            m.Password = pass;
            m.PhoneNumber = pno;
            m.Name = nam;
            m.userType = "User";
            db.Users.Add(m);
            db.SaveChanges();
            return ("Successfully registered");
        }
        [HttpDelete]
        public void Delete(int id)
        {
            var emp = db.Users.Where(x => x.Id == id).Single<User>();
            db.Users.Remove(emp); 
            db.SaveChanges();
        }
        private string JwtGenerate(string email,string role,int userid)
        {
            var SecurityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["JWT:Key"]));
            var credentials = new SigningCredentials(SecurityKey, SecurityAlgorithms.HmacSha256); //security key is public key so hashing security key
            var claims = new[]//dismantling the payload datas
            {
                 new Claim("Email",email),
                 new Claim("UserId",userid.ToString()),
                 new Claim(ClaimTypes.Role,role)
                };
            var token = new JwtSecurityToken(
                issuer: _config["JWT:Issuer"],
                audience: _config["JWT:Audience"],
                claims: claims,
                expires: DateTime.Now.AddMinutes(60),
                signingCredentials: credentials
                );
            var jwt = new JwtSecurityTokenHandler().WriteToken(token);
            return jwt;
        }
    }
}

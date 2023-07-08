using FastFood.Models;
using Microsoft.EntityFrameworkCore;

namespace FastFood.Context
{
    public class FastFoodDbContext:DbContext
    {
        public DbSet<Item> Items { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Order> Orders { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=(localdb)\MSSQLLocalDB;Database=Fast;");
        }

    }
}

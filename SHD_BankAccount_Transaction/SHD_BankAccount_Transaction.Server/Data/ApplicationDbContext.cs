using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using SHD_BankAccount_Transaction.Server.Models;

namespace SHD_BankAccount_Transaction.Server.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Cấu hình mối quan hệ giữa Account và Transaction
            modelBuilder.Entity<account>()
                .HasMany(a => a.transactions) // Một Account có nhiều Transactions
                .WithOne(t => t.from_account) // Mỗi Transaction thuộc về một FromAccount
                .HasForeignKey(t => t.from_account_id) // Khóa ngoại là FromAccountId
                .OnDelete(DeleteBehavior.Restrict); // Ngăn xóa Account nếu có Transaction liên quan

            modelBuilder.Entity<transaction>()
                .HasOne(t => t.to_account) // Mỗi Transaction có một ToAccount
                .WithMany() // Một ToAccount có thể có nhiều Transactions
                .HasForeignKey(t => t.to_account_id) // Khóa ngoại là ToAccountId
                .OnDelete(DeleteBehavior.Restrict); // Ngăn xóa Account nếu có Transaction liên quan
        }
        public DbSet<account> accounts { get; set; }
        public DbSet<transaction> transactions { get; set; }

    }
}
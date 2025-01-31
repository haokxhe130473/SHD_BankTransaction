using Microsoft.EntityFrameworkCore;
using SHD_BankAccount_Transaction.Server.Models;

namespace SHD_BankAccount_Transaction.Server.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Account> Accounts { get; set; }
        public DbSet<Transaction> Transactions { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Cấu hình quan hệ giữa Account và Transaction
            modelBuilder.Entity<Transaction>()
                .HasOne(t => t.FromAccount)
                .WithMany(a => a.SentTransactions)
                .HasForeignKey(t => t.FromAccountId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Transaction>()
                .HasOne(t => t.ToAccount)
                .WithMany(a => a.ReceivedTransactions)
                .HasForeignKey(t => t.ToAccountId)
                .OnDelete(DeleteBehavior.Restrict);
        }
        public void Seed()
        {
            // Kiểm tra xem bảng Accounts có dữ liệu hay không
            if (!Accounts.Any())
            {
                // Thêm dữ liệu mẫu vào bảng Accounts
                Accounts.AddRange(
                    new Account { AccountName = "Account 1", Balance = 1000 },
                    new Account { AccountName = "Account 2", Balance = 2000 },
                    new Account { AccountName = "Account 3", Balance = 3000 }
                );

                // Lưu thay đổi vào cơ sở dữ liệu
                SaveChanges();
            }
        }
    }
}
using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace SHD_BankAccount_Transaction.Server.Migrations
{
    /// <inheritdoc />
    public partial class SeedData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Accounts",
                columns: new[] { "Id", "Balance", "Name" },
                values: new object[,]
                {
                    { 1, 1000.00m, "John Doe" },
                    { 2, 2000.00m, "Jane Smith" },
                    { 3, 1500.00m, "Alice Johnson" }
                });

            migrationBuilder.InsertData(
                table: "Transactions",
                columns: new[] { "Id", "Amount", "Date", "RecipientAccountId", "SenderAccountId" },
                values: new object[,]
                {
                    { 1, 100.00m, new DateTime(2025, 1, 27, 7, 22, 26, 817, DateTimeKind.Utc).AddTicks(8404), 2, 1 },
                    { 2, 200.00m, new DateTime(2025, 1, 26, 7, 22, 26, 818, DateTimeKind.Utc).AddTicks(48), 3, 2 },
                    { 3, 50.00m, new DateTime(2025, 1, 25, 7, 22, 26, 818, DateTimeKind.Utc).AddTicks(56), 1, 3 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Accounts",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Accounts",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Accounts",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Transactions",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Transactions",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Transactions",
                keyColumn: "Id",
                keyValue: 3);
        }
    }
}

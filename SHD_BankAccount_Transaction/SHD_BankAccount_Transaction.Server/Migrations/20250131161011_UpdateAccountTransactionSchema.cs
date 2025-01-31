using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace SHD_BankAccount_Transaction.Server.Migrations
{
    /// <inheritdoc />
    public partial class UpdateAccountTransactionSchema : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_transactions_accounts_from_account_id",
                table: "transactions");

            migrationBuilder.DropForeignKey(
                name: "FK_transactions_accounts_to_account_id",
                table: "transactions");

            migrationBuilder.DropPrimaryKey(
                name: "PK_transactions",
                table: "transactions");

            migrationBuilder.DropPrimaryKey(
                name: "PK_accounts",
                table: "accounts");

            migrationBuilder.DropColumn(
                name: "created_time",
                table: "transactions");

            migrationBuilder.RenameTable(
                name: "transactions",
                newName: "Transactions");

            migrationBuilder.RenameTable(
                name: "accounts",
                newName: "Accounts");

            migrationBuilder.RenameColumn(
                name: "amount",
                table: "Transactions",
                newName: "Amount");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "Transactions",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "to_account_id",
                table: "Transactions",
                newName: "ToAccountId");

            migrationBuilder.RenameColumn(
                name: "last_modified_user_id",
                table: "Transactions",
                newName: "LastModifiedUserId");

            migrationBuilder.RenameColumn(
                name: "last_modified_time",
                table: "Transactions",
                newName: "LastModifiedTime");

            migrationBuilder.RenameColumn(
                name: "is_deleted",
                table: "Transactions",
                newName: "IsDeleted");

            migrationBuilder.RenameColumn(
                name: "from_account_id",
                table: "Transactions",
                newName: "FromAccountId");

            migrationBuilder.RenameColumn(
                name: "date",
                table: "Transactions",
                newName: "CreatedTime");

            migrationBuilder.RenameColumn(
                name: "created_user_id",
                table: "Transactions",
                newName: "CreatedUserId");

            migrationBuilder.RenameIndex(
                name: "IX_transactions_to_account_id",
                table: "Transactions",
                newName: "IX_Transactions_ToAccountId");

            migrationBuilder.RenameIndex(
                name: "IX_transactions_from_account_id",
                table: "Transactions",
                newName: "IX_Transactions_FromAccountId");

            migrationBuilder.RenameColumn(
                name: "balance",
                table: "Accounts",
                newName: "Balance");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "Accounts",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "last_modified_user_id",
                table: "Accounts",
                newName: "LastModifiedUserId");

            migrationBuilder.RenameColumn(
                name: "last_modified_time",
                table: "Accounts",
                newName: "LastModifiedTime");

            migrationBuilder.RenameColumn(
                name: "is_deleted",
                table: "Accounts",
                newName: "IsDeleted");

            migrationBuilder.RenameColumn(
                name: "created_user_id",
                table: "Accounts",
                newName: "CreatedUserId");

            migrationBuilder.RenameColumn(
                name: "created_time",
                table: "Accounts",
                newName: "CreatedTime");

            migrationBuilder.RenameColumn(
                name: "account_name",
                table: "Accounts",
                newName: "AccountName");

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Transactions",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<DateTimeOffset>(
                name: "TransactionDate",
                table: "Transactions",
                type: "datetimeoffset",
                nullable: false,
                defaultValue: new DateTimeOffset(new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0)));

            migrationBuilder.AddPrimaryKey(
                name: "PK_Transactions",
                table: "Transactions",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Accounts",
                table: "Accounts",
                column: "Id");

            migrationBuilder.InsertData(
                table: "Accounts",
                columns: new[] { "Id", "AccountName", "Balance", "CreatedTime", "CreatedUserId", "IsDeleted", "LastModifiedTime", "LastModifiedUserId" },
                values: new object[,]
                {
                    { 1, "Alice", 5000m, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 0, false, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 0 },
                    { 2, "Bob", 3000m, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 0, false, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 0 },
                    { 3, "Charlie", 7000m, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 0, false, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 0 }
                });

            migrationBuilder.InsertData(
                table: "Transactions",
                columns: new[] { "Id", "Amount", "CreatedTime", "CreatedUserId", "Description", "FromAccountId", "IsDeleted", "LastModifiedTime", "LastModifiedUserId", "ToAccountId", "TransactionDate" },
                values: new object[,]
                {
                    { 1, 500m, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 0, "Transfer to Bob", 1, false, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 0, 2, new DateTimeOffset(new DateTime(2025, 1, 31, 16, 10, 10, 222, DateTimeKind.Unspecified).AddTicks(6691), new TimeSpan(0, 0, 0, 0, 0)) },
                    { 2, 1000m, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 0, "Payment from Charlie", 3, false, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 0, 1, new DateTimeOffset(new DateTime(2025, 1, 30, 16, 10, 10, 222, DateTimeKind.Unspecified).AddTicks(7891), new TimeSpan(0, 0, 0, 0, 0)) }
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Transactions_Accounts_FromAccountId",
                table: "Transactions",
                column: "FromAccountId",
                principalTable: "Accounts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Transactions_Accounts_ToAccountId",
                table: "Transactions",
                column: "ToAccountId",
                principalTable: "Accounts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Transactions_Accounts_FromAccountId",
                table: "Transactions");

            migrationBuilder.DropForeignKey(
                name: "FK_Transactions_Accounts_ToAccountId",
                table: "Transactions");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Transactions",
                table: "Transactions");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Accounts",
                table: "Accounts");

            migrationBuilder.DeleteData(
                table: "Transactions",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Transactions",
                keyColumn: "Id",
                keyValue: 2);

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

            migrationBuilder.DropColumn(
                name: "Description",
                table: "Transactions");

            migrationBuilder.DropColumn(
                name: "TransactionDate",
                table: "Transactions");

            migrationBuilder.RenameTable(
                name: "Transactions",
                newName: "transactions");

            migrationBuilder.RenameTable(
                name: "Accounts",
                newName: "accounts");

            migrationBuilder.RenameColumn(
                name: "Amount",
                table: "transactions",
                newName: "amount");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "transactions",
                newName: "id");

            migrationBuilder.RenameColumn(
                name: "ToAccountId",
                table: "transactions",
                newName: "to_account_id");

            migrationBuilder.RenameColumn(
                name: "LastModifiedUserId",
                table: "transactions",
                newName: "last_modified_user_id");

            migrationBuilder.RenameColumn(
                name: "LastModifiedTime",
                table: "transactions",
                newName: "last_modified_time");

            migrationBuilder.RenameColumn(
                name: "IsDeleted",
                table: "transactions",
                newName: "is_deleted");

            migrationBuilder.RenameColumn(
                name: "FromAccountId",
                table: "transactions",
                newName: "from_account_id");

            migrationBuilder.RenameColumn(
                name: "CreatedUserId",
                table: "transactions",
                newName: "created_user_id");

            migrationBuilder.RenameColumn(
                name: "CreatedTime",
                table: "transactions",
                newName: "date");

            migrationBuilder.RenameIndex(
                name: "IX_Transactions_ToAccountId",
                table: "transactions",
                newName: "IX_transactions_to_account_id");

            migrationBuilder.RenameIndex(
                name: "IX_Transactions_FromAccountId",
                table: "transactions",
                newName: "IX_transactions_from_account_id");

            migrationBuilder.RenameColumn(
                name: "Balance",
                table: "accounts",
                newName: "balance");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "accounts",
                newName: "id");

            migrationBuilder.RenameColumn(
                name: "LastModifiedUserId",
                table: "accounts",
                newName: "last_modified_user_id");

            migrationBuilder.RenameColumn(
                name: "LastModifiedTime",
                table: "accounts",
                newName: "last_modified_time");

            migrationBuilder.RenameColumn(
                name: "IsDeleted",
                table: "accounts",
                newName: "is_deleted");

            migrationBuilder.RenameColumn(
                name: "CreatedUserId",
                table: "accounts",
                newName: "created_user_id");

            migrationBuilder.RenameColumn(
                name: "CreatedTime",
                table: "accounts",
                newName: "created_time");

            migrationBuilder.RenameColumn(
                name: "AccountName",
                table: "accounts",
                newName: "account_name");

            migrationBuilder.AddColumn<DateTime>(
                name: "created_time",
                table: "transactions",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddPrimaryKey(
                name: "PK_transactions",
                table: "transactions",
                column: "id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_accounts",
                table: "accounts",
                column: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_transactions_accounts_from_account_id",
                table: "transactions",
                column: "from_account_id",
                principalTable: "accounts",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_transactions_accounts_to_account_id",
                table: "transactions",
                column: "to_account_id",
                principalTable: "accounts",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}

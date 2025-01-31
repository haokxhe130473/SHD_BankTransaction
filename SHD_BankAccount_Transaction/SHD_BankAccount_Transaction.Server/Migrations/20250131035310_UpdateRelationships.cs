using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SHD_BankAccount_Transaction.Server.Migrations
{
    /// <inheritdoc />
    public partial class UpdateRelationships : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "transaction_date",
                table: "transactions",
                newName: "date");

            migrationBuilder.RenameColumn(
                name: "sender_account_id",
                table: "transactions",
                newName: "to_account_id");

            migrationBuilder.RenameColumn(
                name: "recipient_account_id",
                table: "transactions",
                newName: "from_account_id");

            migrationBuilder.RenameColumn(
                name: "amount",
                table: "accounts",
                newName: "balance");

            migrationBuilder.CreateIndex(
                name: "IX_transactions_from_account_id",
                table: "transactions",
                column: "from_account_id");

            migrationBuilder.CreateIndex(
                name: "IX_transactions_to_account_id",
                table: "transactions",
                column: "to_account_id");

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

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_transactions_accounts_from_account_id",
                table: "transactions");

            migrationBuilder.DropForeignKey(
                name: "FK_transactions_accounts_to_account_id",
                table: "transactions");

            migrationBuilder.DropIndex(
                name: "IX_transactions_from_account_id",
                table: "transactions");

            migrationBuilder.DropIndex(
                name: "IX_transactions_to_account_id",
                table: "transactions");

            migrationBuilder.RenameColumn(
                name: "to_account_id",
                table: "transactions",
                newName: "sender_account_id");

            migrationBuilder.RenameColumn(
                name: "from_account_id",
                table: "transactions",
                newName: "recipient_account_id");

            migrationBuilder.RenameColumn(
                name: "date",
                table: "transactions",
                newName: "transaction_date");

            migrationBuilder.RenameColumn(
                name: "balance",
                table: "accounts",
                newName: "amount");
        }
    }
}

using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Gijima.Data.Migrations
{
    /// <inheritdoc />
    public partial class JobDate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Price",
                schema: "gijima",
                table: "Offer",
                type: "integer",
                nullable: true,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: false);

            migrationBuilder.AddColumn<DateTime>(
                name: "JobDate",
                schema: "gijima",
                table: "Jobs",
                type: "timestamp with time zone",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "JobDate",
                schema: "gijima",
                table: "Jobs");

            migrationBuilder.AlterColumn<int>(
                name: "Price",
                schema: "gijima",
                table: "Offer",
                type: "integer",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "integer");
        }
    }
}

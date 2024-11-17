using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Gijima.Data.Migrations
{
    /// <inheritdoc />
    public partial class AreasSeed : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                schema: "gijima",
                table: "Area",
                columns: new[] { "Id", "Address1", "Address2", "CreatedAt", "Name", "Postcode", "UpdatedAt", "UserId" },
                values: new object[,]
                {
                    { 10, "Langa Main Road", "Zone 1", new DateTime(2024, 11, 17, 8, 59, 9, 81, DateTimeKind.Utc).AddTicks(7443), "Langa", 8000, null, null },
                    { 11, "Khayelitsha Main Road", "Zone 2", new DateTime(2024, 11, 17, 8, 59, 9, 81, DateTimeKind.Utc).AddTicks(7487), "Khayelitsha", 8001, null, null },
                    { 12, "Gugulethu Main Road", "Zone 3", new DateTime(2024, 11, 17, 8, 59, 9, 81, DateTimeKind.Utc).AddTicks(7493), "Gugulethu", 8002, null, null },
                    { 13, "Manenberg Main Road", "Zone 4", new DateTime(2024, 11, 17, 8, 59, 9, 81, DateTimeKind.Utc).AddTicks(7495), "Manenberg", 8003, null, null },
                    { 14, "Athlone Main Road", "Zone 5", new DateTime(2024, 11, 17, 8, 59, 9, 81, DateTimeKind.Utc).AddTicks(7497), "Athlone", 8004, null, null }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                schema: "gijima",
                table: "Area",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                schema: "gijima",
                table: "Area",
                keyColumn: "Id",
                keyValue: 11);

            migrationBuilder.DeleteData(
                schema: "gijima",
                table: "Area",
                keyColumn: "Id",
                keyValue: 12);

            migrationBuilder.DeleteData(
                schema: "gijima",
                table: "Area",
                keyColumn: "Id",
                keyValue: 13);

            migrationBuilder.DeleteData(
                schema: "gijima",
                table: "Area",
                keyColumn: "Id",
                keyValue: 14);
        }
    }
}
